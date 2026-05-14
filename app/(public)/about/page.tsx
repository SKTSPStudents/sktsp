import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Sri Kamakoti Triveni Sangeetha Patasala",
};

export default function AboutPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center section-spacing mt-16 md:mt-24 px-4 bg-background overflow-hidden relative">
            <div className="section-watermark scale-[1.5] md:scale-110 opacity-10"></div>
            <div className="relative z-10 text-center max-w-2xl mx-auto p-8 md:p-12 border border-primary/20 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                <span className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 3.5 0 0 0 0 7h5a3.5 3.5 3.5 0 0 1 0 7H6" /></svg>
                </span>
                <h1 className="heading-primary text-primary mb-4">About Us</h1>
                <div className="divider-gold" />
                <p className="body-text text-lg mb-8 text-foreground/80 leading-relaxed md:px-6">
                    We are carefully crafting this section of our digital presence to share our story.
                    Please check back soon.
                </p>
                <Link href="/" className="btn-secondary">
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
