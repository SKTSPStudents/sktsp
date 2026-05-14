"use client";

export default function DonorMarquee() {
    return (
        <section
            className="section-spacing bg-parchment-dark"
            aria-labelledby="donor-heading"
            id="donors"
        >
            <div className="section-container">
                <div className="text-center mb-10 md:mb-14">
                    <h2
                        className="heading-primary mb-2 donor-header-animate"
                        id="donor-heading"
                    >
                        With Gratitude
                    </h2>
                    <div className="divider-gold donor-header-animate" />
                    <p className="body-text mt-4 max-w-xl mx-auto donor-header-animate mb-12">
                        We honour those whose generous contributions sustain our sacred
                        mission
                    </p>

                    {/* Single Static Name */}
                    <div className="inline-flex items-center justify-center px-10 py-6 md:px-16 md:py-8 border-y-2 border-primary/30 bg-background/50 backdrop-blur-sm shadow-soft rounded-3xl donor-header-animate">
                        <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary/80 mr-4 md:mr-6 shrink-0 shadow-[0_0_10px_rgba(166,124,82,0.5)]" />
                        <span className="font-heading text-xl md:text-3xl text-foreground font-bold tracking-wide">
                            Sri Prathyaksha Charitable Trust
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
