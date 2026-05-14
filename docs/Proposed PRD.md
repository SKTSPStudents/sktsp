# Sri Kamakoti Triveni Sangeetha Patasala

## Product Requirements Document (PRD) – Final Hybrid Version (v3)

---

# 1. Project Vision

Build a premium, high‑performance, culturally respectful institutional website that:

* Establishes authenticity and lineage
* Clearly presents the Curriculum (not “Courses”)
* Builds trust through Gurus
* Highlights Acharya Parampara authority
* Showcases real activity via Events & Gallery
* Drives Admissions inquiries
* Delivers an elegant cinematic hero scroll experience
* Remains fully scalable for future portal expansion

This is currently a public marketing and admissions website.
It will later expand to include:

* Staff management modules
* Admin dashboard
* Parent login portal
* Authentication system
* Database-backed features

The architecture must support this future expansion without restructuring.

---

# 2. Core Objectives

Primary Objectives:

1. Establish identity immediately
2. Build institutional trust
3. Clearly explain Curriculum structure
4. Highlight living Guru tradition
5. Provide a simple admissions pathway
6. Deliver a refined cinematic hero experience
7. Ensure full responsiveness across all devices

Success Metrics:

* Lighthouse score > 90 (public pages)
* Initial JS < 250KB for public landing
* Fast First Contentful Paint
* Curriculum or Admissions reachable within 2 clicks
* No layout shifts (CLS stability)

---

# 3. Technical Architecture (Hybrid-Capable)

Framework:
Next.js (App Router)

Build Mode:
Default Next.js build (NO static export lock)
Hybrid-capable (Static public pages + future server features)

Language:
TypeScript (strict mode enabled)

Styling:
Tailwind CSS

Animation Stack (STRICT):

* Lenis (smooth scrolling)
* GSAP
* GSAP ScrollTrigger
* Native IntersectionObserver (where appropriate)

Negative Rules:

* Do NOT use Framer Motion
* Do NOT use WebGL
* Do NOT use Three.js
* Do NOT introduce heavy animation libraries

Server Capability:

* API routes must remain available
* Middleware support must remain enabled
* Architecture must allow authentication integration

Deployment Target:
Vercel (Node-compatible hosting)

---

# 4. Fully Responsive Design Requirement (Critical)

The website must be fully responsive and optimized for:

Desktop (1440px+)

* Full cinematic hero (550vh scroll height)
* Multi-column layouts
* Generous spacing rhythm

Laptop / Small Desktop (1024px–1439px)

* Slightly reduced hero scroll height
* Responsive typography scaling

Tablet (768px–1023px)

* Hero scroll reduced to ~450vh
* Stacked but balanced layout
* Optimized spacing and text scaling

Mobile (<768px)

* NO heavy frame-based animation
* Static hero fallback image (frame0070.webp)
* Vertical stacking
* Touch-optimized spacing
* Reduced motion support

Accessibility & Responsiveness Requirements:

* Semantic HTML
* Visible focus states
* AA contrast minimum
* Keyboard navigable navigation
* Prefers-reduced-motion support

---

# 5. Hero Cinematic Scroll (141 Frames)

Frames Location:
/public/frames/patashala-hero/

Naming Convention (Locked):
frame0001.webp → frame0141.webp

Total Size:
~7.5 MB

Scope of Animation:
The 141-frame animation controls:

* Hero introduction
* Title reveal
* About section reveal

The animation concludes BEFORE the Curriculum section begins.
Curriculum appears after canvas fully fades.

The animation does NOT control the entire homepage.

---

# 6. Scroll Mapping Strategy

Desktop Scroll Height:
550vh

Scroll Formula:

progress = (scrollY - heroTop) / heroHeight
clampedProgress = Math.min(Math.max(progress, 0), 1)
frameIndex = Math.floor(clampedProgress * 140)

Frame Distribution:
0–40% → Cinematic intro
40–70% → Institution title reveal
70–90% → About section reveal
90–100% → Canvas fade out

After frame 140:

* Canvas opacity transitions to 0
* ScrollTrigger disabled
* Normal document flow resumes

Performance Strategy:

* Preload first 20 frames
* Lazy load remaining frames
* Cache images
* Use requestAnimationFrame
* Single ScrollTrigger instance
* Avoid layout thrashing

Reduced Motion:
If prefers-reduced-motion is enabled:

* Disable frame animation
* Render static hero image

---

# 7. Visual Identity & Design Specification

Design must strictly reflect the provided hero reference imagery.

Overall Mood:

* Devotional
* Classical
* Warm
* Symmetrical
* Authoritative
* Timeless (not modern startup aesthetic)

Color System:
Primary Background: Warm parchment (#F4E6C8 family)
Secondary Background: Slightly darker parchment (#E9D8B4 family)
Primary Accent: Saffron / Amber (#D97706 range)
Secondary Accent: Deep temple brown (#5C3A21)
Gold Borders: Antique gold (#C8A14A)
Primary Text: Dark brown (#3B2A1A)
Secondary Text: Soft brown (#6B4A2D)

Negative Color Rules:

* No pure white sections
* No pure black text
* No blue tech palette
* No neon gradients
* No glassmorphism

Layout Principles:

* Symmetrical alignment
* Central axis focus
* Generous vertical spacing (~100px rhythm desktop)
* Max container width ~1200px
* Gold-bordered portrait cards
* Soft shadows only

Typography:
Headings → Serif, traditional tone, weight 600–700
Body → Clean sans-serif, calm readability

Hero Overlay:

* Centered
* Subtle parchment overlay if needed
* Must not obscure central artwork

Navigation Specification:

* Logo positioned left
* Primary navigation links on desktop
* Collapsible mobile menu
* Sticky navigation on scroll
* Subtle background transition after hero scroll completes
* Optional search icon placement in header

Donor Section Design:

* Horizontal scrolling donor list (marquee-style, smooth and subtle)
* Static stacked layout for mobile
* Minimal animation (no aggressive motion)
* Warm background tone consistent with site palette

About Section Enhancement:

* 100–150 word summary
* Founding story highlight block
* Optional embedded featured video

Acharya Parampara Interaction:

* Horizontal GSAP-driven timeline
* Scroll-driven or controlled horizontal movement
* Click-to-view-more interaction available
* Fully responsive stacking on mobile

---

# 8. Information Architecture

/
Home
About
Curriculum
Gurus
Acharya Parampara
Events & Gallery
Admissions
Contact

Future Route Group Separation:
/(public)
/(portal)

---

# 9. Home Page Structure (Final Order – Fully Aligned with Wireframe)

1. Hero (Canvas + Overlay)
2. About / Founding Story (Text + Optional Featured Video)
3. Curriculum Preview
4. Gurus Preview
5. Acharya Parampara (Horizontal Timeline Preview)
6. Events & Gallery Preview (Images + Optional Featured Video)
7. Donor Appreciation Section ("Thanks for the Donation" + Horizontal Marquee)
8. Admissions & Donation CTA
9. Footer (Quick Links + Contact + Academic Links)

Flow:
Identity → Trust → Offering → Teachers → Authority → Proof → Community → Action

---

# 10. Data Strategy (Mandatory Placeholders)

All content must be data-driven.
No hardcoded content inside UI components.

Required JSON files:
/data/curriculum.json
/data/gurus.json
/data/parampara.json
/data/events.json

Each field must include editable placeholders like:
"EDIT_THIS_TEXT"

Example Curriculum Entry:
{
"id": "vocal-beginner",
"name": "Carnatic Vocal – Beginners",
"summary": "EDIT_THIS_SUMMARY",
"ageGroup": "8–14",
"duration": "2 Years",
"thumbnail": "/images/curriculum/vocal.jpg"
}

---

# 11. Animation Guidelines

Allowed:

* Fade
* Translate Y
* Subtle scale
* Stagger reveal
* GSAP-driven horizontal timeline (Parampara)

Avoid:

* Heavy motion
* Layout reflows
* Over-animated UI
* Large GIF usage

All animations must rely on transform + opacity only.

---

# 12. Future Expansion Readiness

Architecture must allow addition of:

* Staff management
* Admin dashboard
* Parent login portal
* Authentication layer
* Database integration

Public site must remain logically separated from portal layer.

---

# 13. Scope Clarification

This PRD defines:

* Vision
* Technical architecture
* Scroll mapping logic
* Design system
* Responsiveness requirements
* Animation constraints
* Data structure
* Performance goals

This PRD does NOT define:

* Exact file-by-file implementation
* Code-level scaffolding
* Dependency setup

Those belong to the One-Shot Prompt.

---

End of PRD – Final Hybrid Version (v3)
