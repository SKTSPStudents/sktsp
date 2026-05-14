"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Guru } from "@/lib/types";
import gurusData from "@/data/gurus.json";

const gurus: Guru[] = gurusData;

export default function GurusPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const watermarkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

        const initAnimation = async () => {
            const { gsap } = await import("@/lib/gsap-init");

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".gurus-header-animate",
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
                    ".guru-card-animate",
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".guru-card-animate",
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
            aria-labelledby="teachers-heading"
            id="teachers-preview"
        >
            <div ref={watermarkRef} className="section-watermark scale-110"></div>
            <div className="section-container">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="heading-primary mb-2 gurus-header-animate"
                        id="teachers-heading"
                    >
                        Our Teachers
                    </h2>
                    <div className="divider-gold gurus-header-animate mx-auto" />
                    <p className="body-text mt-4 max-w-2xl mx-auto gurus-header-animate">
                        Revered teachers carrying forward the luminous tradition of Carnatic
                        music with dedication and mastery
                    </p>
                </div>

                {/* Teacher Cards Marquee */}
                <div className="relative overflow-hidden w-full py-4 max-w-full">
                    <div className="flex w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
                        {/* Duplicate the array twice for seamless looping */}
                        {[...gurus, ...gurus].map((guru, idx) => (
                            <article
                                key={`${guru.id}-${idx}`}
                                className="w-[300px] md:w-[350px] shrink-0 mx-4 p-8 border border-border/50 bg-card/50 hover:bg-card hover:border-border rounded-xl transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Decorative accent */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                                    {guru.name}
                                </h3>
                                <p className="font-sans text-sm font-semibold tracking-wide uppercase text-primary mb-3">
                                    {guru.title}
                                </p>
                                <p className="font-body text-base text-muted-foreground line-clamp-3">
                                    {guru.specialization} &mdash; A dedicated teacher imparting the profound knowledge of classical arts to eager students.
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12 md:mt-16 gurus-header-animate relative z-10">
                    <Link href="/gurus" className="btn-secondary">
                        Meet All Our Teachers
                    </Link>
                </div>
            </div>
        </section>
    );
}
