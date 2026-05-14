"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import type { EventItem } from "@/lib/types";
import eventsData from "@/data/events.json";

const events: EventItem[] = eventsData;

export default function EventsGallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const watermarkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

        const initAnimation = async () => {
            const { gsap } = await import("@/lib/gsap-init");

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".events-header-animate",
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                gsap.fromTo(
                    ".event-card-animate",
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.12,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".event-card-animate",
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // Subtle background parallax
                if (watermarkRef.current) {
                    gsap.fromTo(
                        watermarkRef.current,
                        { y: "-10%" },
                        {
                            y: "10%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true,
                            },
                        }
                    );
                }
            }, sectionRef);
        };

        initAnimation();
        return () => { if (ctx) ctx.revert(); };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-spacing bg-background"
            aria-labelledby="events-heading"
            id="events-preview"
        >
            <div ref={watermarkRef} className="section-watermark scale-110"></div>
            <div className="section-container">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="heading-primary mb-2 events-header-animate"
                        id="events-heading"
                    >
                        Events & Gallery
                    </h2>
                    <div className="divider-gold events-header-animate" />
                    <p className="body-text mt-4 max-w-2xl mx-auto events-header-animate">
                        Celebrating the living tradition through seasonal recitals,
                        utsavams, and cultural gatherings
                    </p>
                </div>

                {/* Events 3D Carousel */}
                <div className="events-header-animate relative z-10 my-10 md:my-16">
                    <ThreeDPhotoCarousel
                        images={events.map((event, i) => ({
                            id: event.id,
                            title: event.title,
                            src: `/images/events/event-${(i % 3) + 1}.jpg`
                        }))}
                        autoPlay={true}
                        interval={5000}
                    />
                </div>

                {/* Events 3D Carousel only */}

                {/* CTA */}
                <div className="text-center mt-10 md:mt-14 events-header-animate relative z-10">
                    <Link href="/events" className="btn-primary">
                        View All Events
                    </Link>
                </div>
            </div>
        </section>
    );
}
