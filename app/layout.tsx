import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth-scroll";

export const metadata: Metadata = {
    title: "Sri Kamakoti Triveni Sangeetha Patasala",
    description:
        "A premier institution dedicated to the teaching and preservation of Carnatic music in the authentic Guru-Shishya tradition. Offering comprehensive curriculum in vocal, veena, violin, and mridangam.",
    keywords: [
        "Carnatic music",
        "Sangeetha Patasala",
        "Indian classical music",
        "Music school",
        "Guru-Shishya",
        "Veena",
        "Violin",
        "Mridangam",
        "Carnatic vocal",
    ],
    openGraph: {
        title: "Sri Kamakoti Triveni Sangeetha Patasala",
        description:
            "A premier institution dedicated to the teaching and preservation of Carnatic music.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </body>
        </html>
    );
}
