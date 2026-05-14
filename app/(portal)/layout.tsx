export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-parchment">
            {/* Portal layout placeholder — future authentication and dashboard */}
            <header className="bg-temple-brown-dark text-parchment-light py-4">
                <div className="section-container">
                    <p className="font-heading text-lg font-semibold">
                        Sri Kamakoti Triveni — Portal
                    </p>
                </div>
            </header>
            <main className="section-container py-10">{children}</main>
        </div>
    );
}
