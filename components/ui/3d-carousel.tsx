"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
    AnimatePresence,
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
} from "framer-motion";

export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

type UseSwipeBlockProps = {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    swipeThreshold?: number;
    lockDirection?: boolean;
};

const useSwipeBlock = ({
    onSwipeLeft,
    onSwipeRight,
    swipeThreshold = 50,
    lockDirection = true,
}: UseSwipeBlockProps) => {
    const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
        null
    );
    const [isSwiping, setIsSwiping] = useState(false);
    const [swipeDirection, setSwipeDirection] = useState<"horizontal" | "vertical" | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setIsSwiping(true);
        setSwipeDirection(null);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!touchStart || !isSwiping) return;

        const deltaX = e.touches[0].clientX - touchStart.x;
        const deltaY = e.touches[0].clientY - touchStart.y;

        if (!swipeDirection && lockDirection) {
            setSwipeDirection(Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical");
        }

        if (swipeDirection === "horizontal" || !lockDirection) {
            e.preventDefault();
        }
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart || !isSwiping) return;

        const deltaX = e.changedTouches[0].clientX - touchStart.x;

        if (swipeDirection === "horizontal" || !lockDirection) {
            if (Math.abs(deltaX) > swipeThreshold) {
                if (deltaX > 0) {
                    onSwipeRight?.();
                } else {
                    onSwipeLeft?.();
                }
            }
        }

        setTouchStart(null);
        setIsSwiping(false);
        setSwipeDirection(null);
    };

    return { onTouchStart, onTouchMove, onTouchEnd };
};

type CarouselProps = {
    images: { src: string; title?: string; id: string }[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
};

const ThreeDPhotoCarousel = memo(
    ({
        images,
        autoPlay = true,
        interval = 4000,
        className = "",
    }: CarouselProps) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
        const [isHovered, setIsHovered] = useState(false);

        const nextSlide = () => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        };

        const prevSlide = () => {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };

        useEffect(() => {
            if (isAutoPlaying && !isHovered) {
                const timer = setInterval(nextSlide, interval);
                return () => clearInterval(timer);
            }
        }, [isAutoPlaying, isHovered, interval, currentIndex]); // Added currentIndex to reset timer on manual change

        const swipeHandlers = useSwipeBlock({
            onSwipeLeft: nextSlide,
            onSwipeRight: prevSlide,
        });

        // Calculate positions dynamically based on screen width (optional refinement later)
        const getTransform = (index: number) => {
            const diff = (index - currentIndex + images.length) % images.length;

            // Current center
            if (diff === 0) {
                return {
                    x: 0,
                    z: 50,
                    rotateY: 0,
                    scale: 1,
                    opacity: 1,
                    zIndex: 30,
                };
            }
            // Right 1
            if (diff === 1) {
                return {
                    x: "50%",
                    z: 0,
                    rotateY: -25,
                    scale: 0.85,
                    opacity: 0.7,
                    zIndex: 20,
                };
            }
            // Right 2 (or left if only 3 items)
            if (diff === 2) {
                if (images.length === 3) {
                    return {
                        x: "-50%",
                        z: 0,
                        rotateY: 25,
                        scale: 0.85,
                        opacity: 0.7,
                        zIndex: 20,
                    };
                }
                return {
                    x: "100%",
                    z: -50,
                    rotateY: -45,
                    scale: 0.7,
                    opacity: 0.4,
                    zIndex: 10,
                };
            }

            // Handling Left sides dynamically
            if (diff === images.length - 1) {
                return {
                    x: "-50%",
                    z: 0,
                    rotateY: 25,
                    scale: 0.85,
                    opacity: 0.7,
                    zIndex: 20,
                };
            }

            if (diff === images.length - 2 && images.length > 3) {
                return {
                    x: "-100%",
                    z: -50,
                    rotateY: 45,
                    scale: 0.7,
                    opacity: 0.4,
                    zIndex: 10,
                };
            }

            // Hide the rest
            return {
                x: 0,
                z: -100,
                rotateY: 0,
                scale: 0.5,
                opacity: 0,
                zIndex: 0,
            };
        };


        if (!images || images.length === 0) return null;

        return (
            <div
                className={`relative w-full max-w-5xl mx-auto h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden [perspective:1000px] ${className}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...swipeHandlers}
            >
                <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
                    <AnimatePresence initial={false} mode="popLayout">
                        {images.map((image, i) => {
                            const animationProps = getTransform(i);
                            const isCenter = i === currentIndex;

                            return (
                                <motion.div
                                    key={image.id || image.src}
                                    className="absolute w-[70%] max-w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl cursor-pointer will-change-transform border border-border bg-card"
                                    initial={animationProps}
                                    animate={animationProps}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.32, 0.72, 0, 1], // Custom easing for premium feel
                                    }}
                                    onClick={() => {
                                        if (!isCenter) setCurrentIndex(i);
                                    }}
                                >
                                    {/* Using standard img to avoid Next.js Image component complexities in 3D transforms unless strictly needed */}
                                    <div className="w-full h-full relative">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                            style={{ backgroundImage: `url(${image.src})` }}
                                        />
                                        {/* Overlay for inactive slides */}
                                        <div
                                            className={`absolute inset-0 bg-background/40 transition-opacity duration-300 ${isCenter ? 'opacity-0' : 'opacity-100'}`}
                                        />

                                        {/* Title gradient overlay */}
                                        {image.title && (
                                            <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                                                <p className="font-heading text-lg font-bold text-foreground truncate">
                                                    {image.title}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-4 z-40 p-3 rounded-full bg-background/50 backdrop-blur-md border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus:outline-none"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-4 z-40 p-3 rounded-full bg-background/50 backdrop-blur-md border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus:outline-none"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-40">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
);

ThreeDPhotoCarousel.displayName = "ThreeDPhotoCarousel";

export { ThreeDPhotoCarousel };
