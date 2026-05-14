"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function AdmissionsCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

        const initAnimation = async () => {
            const { gsap } = await import("@/lib/gsap-init");

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".cta-animate",
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }, sectionRef);
        };

        initAnimation();
        return () => { if (ctx) ctx.revert(); };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-spacing bg-foreground relative overflow-hidden"
            aria-labelledby="cta-heading"
            id="admissions-cta"
        >
            {/* Decorative gold lines */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="section-container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 cta-animate"
                        id="cta-heading"
                    >
                        Begin Your Musical Journey
                    </h2>
                    <div className="w-24 h-[2px] bg-primary mx-auto my-6 cta-animate" />
                    <p className="font-body text-base md:text-lg text-background/80 leading-relaxed mb-10 cta-animate">
                        Join the sacred tradition of Carnatic music. Whether you are a
                        beginner seeking to learn the fundamentals or an advanced student
                        aspiring to deepen your mastery, our doors are open to all sincere
                        seekers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <Link
                            href="/admissions"
                            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold text-lg rounded-md border border-primary/20 hover:border-primary/50 hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 cta-animate shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                        >
                            Apply for Admission
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-primary font-sans font-semibold text-lg rounded-md border-2 border-primary/40 hover:border-primary hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 cta-animate"
                        >
                            Make a Donation
                        </Link>
                    </div>
                </div>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25% 50%, var(--primary) 1px, transparent 1px), radial-gradient(circle at 75% 50%, var(--primary) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>
        </section>
    );
}
