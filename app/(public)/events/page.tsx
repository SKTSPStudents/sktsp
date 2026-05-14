import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & Gallery | Sri Kamakoti Triveni Sangeetha Patasala",
};

export default function EventsPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center section-spacing mt-16 md:mt-24 px-4 bg-background overflow-hidden relative">
            <div className="section-watermark scale-[1.5] md:scale-110 opacity-10"></div>
            <div className="relative z-10 text-center max-w-2xl mx-auto p-8 md:p-12 border border-primary/20 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                <span className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4V8z" /></svg>
                </span>
                <h1 className="heading-primary text-primary mb-4">Events & Gallery</h1>
                <div className="divider-gold" />
                <p className="body-text text-lg mb-8 text-foreground/80 leading-relaxed md:px-6">
                    Our full gallery of past performances and upcoming schedule is being curated.
                    Please visit again shortly.
                </p>
                <Link href="/" className="btn-secondary">
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
