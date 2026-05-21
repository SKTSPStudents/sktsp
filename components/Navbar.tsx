"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
    HomeIcon,
    InfoIcon,
    BookOpenIcon,
    UsersIcon,
    HistoryIcon,
    CalendarIcon,
    GraduationCapIcon,
    PhoneIcon
} from "lucide-react";

const NAV_LINKS = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/about", label: "About", icon: InfoIcon },
    { href: "/curriculum", label: "Curriculum", icon: BookOpenIcon },
    { href: "/gurus", label: "Teachers", icon: UsersIcon },
    { href: "/parampara", label: "Parampara", icon: HistoryIcon },
    { href: "/events", label: "Events", icon: CalendarIcon },
    { href: "/admissions", label: "Admissions", icon: GraduationCapIcon },
    { href: "/contact", label: "Contact", icon: PhoneIcon },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 bg-background border-b ${isScrolled
                ? "border-border/40 shadow-soft"
                : "border-border/20 shadow-none"
                }`}
            role="banner"
        >
            <nav
                className="w-full max-w-[1920px] mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between h-16 md:h-20"
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3 shrink-0"
                    aria-label="Sri Kamakoti Triveni Sangeetha Patasala - Home"
                >
                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden gold-border-thin">
                        <Image
                            src="/images/branding/logo.jpeg"
                            alt="Sri Kamakoti Triveni Sangeetha Patasala Logo"
                            width={40}
                            height={35}
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="font-heading text-lg md:text-xl font-bold leading-none text-foreground whitespace-nowrap">
                        Sri Kamakoti Triveni Sangeetha Patasala
                    </span>
                </Link>

                {/* Desktop Navigation (Dock) */}
                <div className="hidden lg:block relative z-50">
                    <Dock direction="middle" className="bg-background/80 border-primary/20 shadow-card">
                        {NAV_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <DockIcon key={link.href} className="group relative pt-1 pb-1">
                                    <Link
                                        href={link.href}
                                        className="flex items-center justify-center w-full h-full text-foreground/80 hover:text-primary transition-colors"
                                        aria-label={link.label}
                                    >
                                        <Icon className="size-full" strokeWidth={1.5} />
                                    </Link>
                                    {/* Tooltip */}
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-sans font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {link.label}
                                    </span>
                                </DockIcon>
                            );
                        })}
                    </Dock>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 rounded-md focus-visible:outline-2 focus-visible:outline-primary"
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span
                            className={`block w-full h-0.5 rounded-full transition-all duration-300 bg-foreground ${isMobileMenuOpen
                                ? "rotate-45 translate-y-[9px]"
                                : ""
                                }`}
                        />
                        <span
                            className={`block w-full h-0.5 rounded-full transition-all duration-300 bg-foreground ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-full h-0.5 rounded-full transition-all duration-300 bg-foreground ${isMobileMenuOpen
                                ? "-rotate-45 -translate-y-[9px]"
                                : ""
                                }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`lg:hidden overflow-hidden transition-all duration-400 ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                    }`}
                role="menu"
            >
                <ul className="bg-background/98 backdrop-blur-sm border-t border-border/30 px-4 py-4 space-y-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href} role="menuitem">
                            <Link
                                href={link.href}
                                className="block px-4 py-3 text-foreground font-sans font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
