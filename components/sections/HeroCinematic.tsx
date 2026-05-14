"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroCinematic() {
    return (
        <section
            className="w-full relative shadow-soft"
            aria-label="Hero"
            data-hero-section
        >
            {/* Aspect Video container ensures the image keeps its natural ratio across all screen sizes */}
            <div className="relative w-full aspect-[16/9] md:aspect-video overflow-hidden">
                <Image
                    src="/images/hero/Hero.webp"
                    alt="Sri Kamakoti Triveni Sangeetha Patasala Hero"
                    fill
                    className="object-cover object-center"
                    priority
                />

                {/* Interactive Overlay Layer inside the aspect ratio box */}
                {/* 
                  The buttons are absolutely positioned at roughly the bottom 25% mark and centered, 
                  matching where the title sits in the actual image. Percentages ensure it moves perfectly 
                  as the screen resizes.
                */}
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center">
                    {/* Position the buttons at the very bottom edge of the hero image as requested */}
                    <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 md:gap-6 w-full px-4 pointer-events-auto">
                        <Link
                            href="/admissions"
                            className="px-6 py-2.5 text-sm md:text-base font-sans font-semibold bg-primary/90 text-primary-foreground rounded-md border border-primary/30 hover:bg-primary transition-all duration-300 backdrop-blur-sm shadow-[0_4px_20px_rgba(166,124,82,0.4)]"
                        >
                            Apply for Admission
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 text-sm md:text-base font-sans font-semibold text-foreground bg-background/80 rounded-md border border-foreground/25 hover:border-foreground/50 hover:bg-background/95 transition-all duration-300 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Small gradient strip blending hero into the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </section>
    );
}
