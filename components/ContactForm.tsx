"use client";

export default function ContactForm() {
    return (
        <div className="card-portrait p-6 md:p-8">
            <h2 className="heading-secondary mb-6">Send us a Message</h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label
                        htmlFor="contact-name"
                        className="block font-body text-sm font-medium text-temple-brown-dark mb-1"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="w-full px-4 py-3 bg-parchment border border-antique-gold/30 rounded-md font-body text-sm text-temple-brown-dark placeholder-temple-brown-light/50 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all"
                        placeholder="Enter your full name"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-email"
                        className="block font-body text-sm font-medium text-temple-brown-dark mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="w-full px-4 py-3 bg-parchment border border-antique-gold/30 rounded-md font-body text-sm text-temple-brown-dark placeholder-temple-brown-light/50 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-phone"
                        className="block font-body text-sm font-medium text-temple-brown-dark mb-1"
                    >
                        Phone (Optional)
                    </label>
                    <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-parchment border border-antique-gold/30 rounded-md font-body text-sm text-temple-brown-dark placeholder-temple-brown-light/50 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all"
                        placeholder="Enter your phone number"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-subject"
                        className="block font-body text-sm font-medium text-temple-brown-dark mb-1"
                    >
                        Subject
                    </label>
                    <select
                        id="contact-subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-parchment border border-antique-gold/30 rounded-md font-body text-sm text-temple-brown-dark focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all"
                    >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Enquiry</option>
                        <option value="curriculum">Curriculum Information</option>
                        <option value="donations">Donations</option>
                        <option value="general">General Enquiry</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="contact-message"
                        className="block font-body text-sm font-medium text-temple-brown-dark mb-1"
                    >
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-parchment border border-antique-gold/30 rounded-md font-body text-sm text-temple-brown-dark placeholder-temple-brown-light/50 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all resize-vertical"
                        placeholder="Enter your message"
                    />
                </div>

                <button type="submit" className="btn-primary w-full">
                    Send Message
                </button>
            </form>
        </div>
    );
}
