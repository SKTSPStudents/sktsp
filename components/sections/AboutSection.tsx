"use client";

import { Weight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const watermarkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

        const initAnimation = async () => {
            const { gsap, ScrollTrigger } = await import("@/lib/gsap-init");

            if (!sectionRef.current) return;

            ctx = gsap.context(() => {
                // Text Reveal
                gsap.fromTo(
                    ".about-animate",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
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
            aria-labelledby="about-heading"
            id="about"
        >
            <div ref={watermarkRef} className="section-watermark scale-110"></div>
            <div className="section-container">
                <div className="max-w-6xl mx-auto">

                    {/* Top: Sacred Mission Highlight */}
                    <div className="about-animate mb-12 md:mb-20">
                        <div className="text-center mb-8">
                            <h2 className="heading-primary mb-2" id="about-heading">
                                About Our Patasala
                            </h2>
                            <div className="divider-gold mx-auto" />
                        </div>
                        <div className="border border-border rounded-xl p-8 md:p-12 bg-card shadow-soft max-w-4xl mx-auto text-left relative overflow-hidden ">
                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-xl m-2" />
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-xl m-2" />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-xl m-2" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-xl m-2" />

                            <h3 className="heading-accent mb-4 text-2xl text-center ">Our Sacred Vision</h3>
                            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto relative z-10">Under the divine guidance of Kanchi Kamakoti Peetathipathi Jagadguru</p>
                            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto relative z-10"><strong>Sri Shankara Vijayendra Saraswathi Swamigal</strong></p>
                            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto relative z-10">Sri Kamakoti Triveni Sangeetha Patashala has been established exclusively for Brahmin boys with the noble aim of preserving and nurturing the rich traditions of <strong>Shastriya Sangeetham</strong> and <strong>Vedic education</strong> for future generations.</p>
                            <br />
                            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto relative z-10">This sacred initiative serves as a boon to the community, offering children the rare opportunity to receive the best of modern schooling alongside traditional learning, thereby ensuring that the eternal values of <strong>Sanatana Dharma</strong> remain vibrant and enriched for years to come.</p>
                        </div>
                    </div>

                    {/* 2-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Left Column: Founding Story */}
                        <div className="about-animate space-y-6">
                            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                                The Genesis
                            </h3>
                            <p className="font-body text-base text-muted-foreground leading-relaxed">Founded with the belief that true education must nurture both intellect and spirit, the Patashala integrates the Tamil Nadu State Board curriculum with Carnatic music, Vedic studies, and Sanskrit learning. This dual approach ensures that students not only excel academically but also grow with a strong cultural and spiritual foundation.</p>
                            <p className="font-body text-base text-muted-foreground leading-relaxed">The genesis of this initiative lies in the conviction that education should be accessible to all, regardless of financial background. Thus, the Patashala provides free education, accommodation, food, and medical care, ensuring that no child is denied the opportunity to learn.</p>
                            <p className="font-body text-base text-muted-foreground leading-relaxed">Guided by a team of devoted teachers and mentors, the Patashala continues to flourish as a sanctuary where young minds are shaped into scholars, artists, and custodians of tradition, ready to contribute meaningfully to society.</p>
                            <p className="font-body text-base text-muted-foreground leading-relaxed">Our institution serves as a beacon of cultural preservation, ensuring that the divine art form of Carnatic music continues to flourish and inspire future generations.</p>
                        </div>

                        {/* Right Column: YouTube embed */}
                        <div className="about-animate">
                            <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-muted shadow-card relative group">
                                <iframe
                                    className="w-full h-full absolute inset-0"
                                    src="https://www.youtube.com/embed/ZMQu4x_67Ms?si=PZ5M_eO8aM-Y62S5"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
