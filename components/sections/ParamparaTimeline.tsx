"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import type { ParamparaEntry } from "@/lib/types";
import paramparaData from "@/data/parampara.json";

const parampara: ParamparaEntry[] = paramparaData;

export default function ParamparaTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const watermarkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

        const initAnimation = async () => {
            const { gsap } = await import("@/lib/gsap-init");

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                // Header animation
                gsap.fromTo(
                    ".parampara-header-animate",
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

    // Transform parampara data into Timeline entries
    const timelineData = parampara.map((entry) => ({
        title: entry.period,
        content: (
            <div className="bg-card/60 border border-border/40 rounded-lg p-6 backdrop-blur-sm">
                {/* Portrait placeholder */}
                <div className="w-20 h-20 mx-auto md:mx-0 mb-4 rounded-full gold-border overflow-hidden bg-muted flex items-center justify-center">
                    <svg
                        className="w-8 h-8 text-primary/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </div>

                <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                    {entry.name}
                </h4>
                <p className="font-body text-sm font-semibold text-primary mb-3">
                    {entry.title}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {entry.description}
                </p>
            </div>
        ),
    }));

    return (
        <section
            ref={sectionRef}
            className="section-spacing bg-background overflow-hidden relative"
            aria-labelledby="parampara-heading"
            id="parampara-preview"
        >
            <div ref={watermarkRef} className="section-watermark scale-110"></div>
            <div className="section-container">
                {/* Header */}
                <div className="text-center mb-4 md:mb-8">
                    <h2
                        className="heading-primary mb-2 parampara-header-animate"
                        id="parampara-heading"
                    >
                        Acharya Parampara
                    </h2>
                    <div className="divider-gold parampara-header-animate" />
                    <p className="body-text mt-4 max-w-2xl mx-auto parampara-header-animate">
                        An unbroken lineage of masters who have preserved and enriched the
                        tradition of Carnatic music across generations
                    </p>
                </div>
            </div>

            {/* Vertical Timeline */}
            <div className="relative z-10 px-4 md:px-8">
                <Timeline data={timelineData} />
            </div>

            {/* CTA */}
            <div className="text-center mt-6 md:mt-10 section-container relative z-10">
                <Link href="/parampara" className="btn-secondary parampara-header-animate">
                    Explore Full Parampara
                </Link>
            </div>
        </section>
    );
}
