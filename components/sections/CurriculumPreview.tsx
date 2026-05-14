"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { BookOpenIcon, MusicIcon, HeartHandshakeIcon } from "lucide-react";

const CURRICULUM_CATEGORIES = [
    {
        id: "shastriya-sangeetham",
        name: "Shastriya Sangeetham",
        summary: "Rigorous training in Carnatic vocal and instrumental music following the revered Guru-Shishya parampara.",
        icon: MusicIcon,
    },
    {
        id: "modern-education",
        name: "Modern Education",
        summary: "Integration with State Board / NIOS and Oxford Matriculation for a balanced academic foundation.",
        icon: BookOpenIcon,
    },
    {
        id: "moral-education",
        name: "Moral Education",
        summary: "Imparting timeless values through the study of Bhagavath Gita, Sanskrit, and Vedic traditions.",
        icon: HeartHandshakeIcon,
    }
];

export default function CurriculumPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const watermarkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

        const initAnimation = async () => {
            const { gsap } = await import("@/lib/gsap-init");

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".curriculum-header-animate",
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
                    ".curriculum-card-animate",
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.12,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".curriculum-card-animate",
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
            className="section-spacing bg-background relative"
            aria-labelledby="curriculum-heading"
            id="curriculum-preview"
        >
            <div ref={watermarkRef} className="section-watermark scale-110"></div>
            <div className="section-container">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="heading-primary mb-2 curriculum-header-animate"
                        id="curriculum-heading"
                    >
                        Our Curriculum
                    </h2>
                    <div className="divider-gold curriculum-header-animate" />
                    <p className="body-text mt-4 max-w-2xl mx-auto curriculum-header-animate">
                        A comprehensive system of education rooted in tradition, balancing divine arts with modern academics.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
                    {CURRICULUM_CATEGORIES.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article
                                key={item.id}
                                className="curriculum-card-animate p-8 md:p-10 rounded-xl border border-border bg-card hover:shadow-card transition-all duration-300 group text-center"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                    <Icon className="w-8 h-8 text-primary group-hover:text-background transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
                                    {item.name}
                                </h3>

                                <p className="font-body text-base text-muted-foreground leading-relaxed">
                                    {item.summary}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-12 md:mt-16 curriculum-header-animate">
                    <Link href="/curriculum" className="btn-primary">
                        Explore Full Curriculum
                    </Link>
                </div>
            </div>
        </section>
    );
}
