import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Sri Kamakoti Triveni Sangeetha Patasala",
};

export default function ContactPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center section-spacing mt-16 md:mt-24 px-4 bg-background overflow-hidden relative">
            <div className="section-watermark scale-[1.5] md:scale-110 opacity-10"></div>
            <div className="relative z-10 text-center max-w-2xl mx-auto p-8 md:p-12 border border-primary/20 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft">
                <span className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </span>
                <h1 className="heading-primary text-primary mb-4">Contact Us</h1>
                <div className="divider-gold" />
                <p className="body-text text-lg mb-8 text-foreground/80 leading-relaxed md:px-6">
                    We are setting up our contact channels.
                    In the meantime, please refer to the contact details found in the footer.
                </p>
                <Link href="/" className="btn-secondary">
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
