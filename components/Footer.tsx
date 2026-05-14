import Link from "next/link";
import contactData from "@/data/contact.json";

const QUICK_LINKS = [
    { href: "/about", label: "About" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/gurus", label: "Gurus" },
    { href: "/parampara", label: "Acharya Parampara" },
    { href: "/events", label: "Events & Gallery" },
];

const ACADEMIC_LINKS = [
    { href: "/admissions", label: "Admissions" },
    { href: "/curriculum", label: "Course Structure" },
    { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
    return (
        <footer
            className="bg-foreground text-background"
            role="contentinfo"
        >
            {/* Gold separator */}
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="section-container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Institution Info */}
                    <div className="lg:col-span-1 pr-0 lg:pr-6">
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">
                            Sri Kamakoti Triveni
                        </h3>
                        <p className="font-heading font-medium text-base text-background/90 tracking-wide mb-5">
                            Sangeetha Patasala
                        </p>
                        <p className="font-sans font-medium text-sm text-background/70 leading-relaxed">
                            Dedicated to the preservation and propagation of Carnatic music
                            through the sacred Guru-Shishya tradition.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg font-bold text-primary mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="font-sans font-medium text-sm text-background/70 hover:text-primary transition-colors duration-200 block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academic */}
                    <div>
                        <h4 className="font-heading text-lg font-bold text-primary mb-5">
                            Academics
                        </h4>
                        <ul className="space-y-3">
                            {ACADEMIC_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="font-sans font-medium text-sm text-background/70 hover:text-primary transition-colors duration-200 block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-lg font-bold text-primary mb-5">
                            Contact
                        </h4>
                        <address className="not-italic space-y-3">
                            <p className="font-sans font-medium text-sm text-background/70 leading-relaxed">
                                {contactData.address.line1}
                                <br />
                                {contactData.address.line2}
                                <br />
                                {contactData.address.cityStatePin}
                            </p>
                            <p className="font-sans font-medium text-sm text-background/70 block mt-4">
                                <span className="text-primary font-bold">Call:</span>{" "}
                                {contactData.phone.join(" / ")}
                            </p>
                            <p className="font-sans font-medium text-sm text-background/70 block">
                                <span className="text-primary font-bold">Write:</span>{" "}
                                <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">
                                    {contactData.email}
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-body text-xs text-background/50">
                            © {new Date().getFullYear()} Sri Kamakoti Triveni Sangeetha
                            Patasala. All rights reserved.
                        </p>
                        <p className="font-body text-xs text-background/40">
                            Preserving the sacred tradition of Carnatic music
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
