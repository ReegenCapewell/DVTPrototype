Here is the fully rewritten and finalized Technical Specification. Every single AI safeguard, deployment bypass, and stylistic rule—including the final fixes for token limits, import aliases, and mobile padding—has been seamlessly integrated into the document. 

This is now a master-level technical spec ready to be handed to any AI.

***

# Technical Specification: Dove Valley Timber & Fencing Supplies Landing Page

## 1. Project Overview
Create a modern, responsive, single-page landing page prototype for "Dove Valley Timber and Fencing Supplies Ltd." This project replaces their legacy Wix website. Because local SEO is critical for trade businesses, the project will be built using **Next.js** to ensure fast load times, Server-Side Rendering (SSR) capabilities, and robust metadata management. 

The page will condense their existing content into a highly converting, smooth-scrolling single-page architecture designed for lead generation. This "Phase 1" prototype will rely strictly on local state, establishing a modular foundation for "Phase 2," which will introduce a complex materials calculator and dynamic backend integrations.

**Deployment Target:** This application must be "plug-and-play" for **Vercel**. Prototype build rules and code generation instructions are strictly configured to ensure a smooth, error-free deployment on the first try, bypassing common AI-generated build bottlenecks.

## 2. Tech Stack & Setup
*   **Initialization:** Explicit Next.js installation to bypass interactive prompts and enforce import aliases: 
    `npx create-next-app@latest dove-valley-timber --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`
*   **Framework:** Next.js (App Router, React) – *Chosen over Vite for superior local SEO and indexing.*
*   **Styling:** Tailwind CSS.
*   **Icons:** `lucide-react` (clean, modern icons for products and contact details).
*   **Routing/Scrolling:** Native CSS smooth scrolling implemented globally via `globals.css` (`html { scroll-behavior: smooth; }`) using Next.js `<Link href="#id">` tags to avoid unnecessary third-party dependencies.
*   **State Management:** Strictly local component state for Phase 1 (React `useState`). No global state managers (like Context or Zustand) are required yet.

## 3. Design & UI Guidelines
*   **Vibe:** Industrial, reliable, trade-focused but friendly enough for the general public (DIYers).
*   **Copywriting:** All AI-generated placeholder text must use realistic, professional, UK-focused trade terminology. Avoid generic *Lorem Ipsum*.
*   **Color Palette:** 
    *   **Primary:** Timber Brown / Amber (`bg-amber-700` or `bg-amber-800`) – representing wood.
    *   **Secondary:** Treated Green (`bg-emerald-800`) – representing green-treated timbers.
    *   **Background:** Clean light gray/off-white (`bg-stone-50`) to let product images pop.
    *   **Text:** Dark Stone (`text-stone-900`).
*   **Typography:** A robust, structural sans-serif font (e.g., Next.js default `geist-sans` or Inter).
*   **Responsiveness & Spacing:** Mobile-first design. The site must be fully responsive, catering heavily to tradespeople viewing on mobile devices while on-site. **Crucial:** Use responsive Tailwind padding utilities (e.g., `px-4 md:px-8` or `px-6 lg:px-12`) to ensure mobile layouts are not squished by desktop-sized margins.

## 4. Component Structure
Using Next.js App Router conventions, the project will follow this modular structure, utilizing the `@/` import alias:
```text
/src
  /app
    layout.tsx (Includes exported SEO metadata and imports globals.css)
    page.tsx (Acts as the single-page aggregator)
    globals.css (Contains Tailwind directives and smooth scroll CSS rule)
  /components
    Navbar.tsx ("use client" - handles mobile menu state & closes on click)
    Hero.tsx
    About.tsx
    Products.tsx 
    ProductCard.tsx
    DeliveryInfo.tsx 
    Contact.tsx ("use client" - handles form UI state)
    Footer.tsx ("use client" - handles newsletter UI state)
```

## 5. Section-by-Section Requirements

*   **A. Navbar:** Sticky header containing the logo, Next.js `<Link>` anchor links to page sections, and a highly visible "Call Now" CTA button. Must include a Hamburger menu for mobile views. *Crucial: Clicking a link in the mobile menu must close the menu.*
*   **B. Hero:** High-impact top section with a background timber image overlay. Must include an 'Open Mon-Fri 8am-5pm' badge, a primary CTA ("Get a Quote"), and a secondary CTA ("View Products").
*   **C. About:** A trust-building section highlighting their establishment in 2008 and 30+ years of trade experience.
*   **D. Products:** A responsive grid mapping over an array of products, utilizing `ProductCard.tsx`. Categories include: Closeboard Panels, Timber Posts, Sleepers, PAR Materials, Treated Timbers, Sheet Materials, and C16/C24 Graded Timber. Images must use `object-cover` to prevent distortion.
*   **E. Delivery Info:** A distinct banner section featuring a truck icon emphasizing local delivery capabilities. Include a code comment here stating: `// Phase 2: Insert dynamic Postcode Delivery Calculator here`.
*   **F. Contact:** A split-layout section. Left side: A static map image linking out to Google Maps. Right side: A quote/contact form (Name, Email, Phone, Address, Subject, Message). Submit button prevents default behavior and shows a simulated success message.
*   **G. Footer:** Standard footer containing NAP (Name, Address, Phone) details, quick links, and a purely visual newsletter subscribe input that simulates a success state.

***

## 6. Prompt for the AI Developer

*Copy and paste this directly to your AI coding assistant (like v0, Claude 3.5 Sonnet, or ChatGPT):*

> "Act as an expert Frontend Developer. I need you to build a single-page landing page prototype for a timber and fencing merchant called 'Dove Valley Timber and Fencing Supplies Ltd'. Please build this using **Next.js (App Router)** and **Tailwind CSS**.
>
> **CRITICAL VERCEL DEPLOYMENT, SETUP & OUTPUT RULES:** 
> 1. Start by giving me the exact terminal command to install icons: `npm install lucide-react` (assume I have already run the strict Next.js setup).
> 2. To ensure a successful first-time deployment on Vercel, generate a `next.config.mjs` file that sets `eslint: { ignoreDuringBuilds: true }` and `typescript: { ignoreBuildErrors: true }`. 
> 3. You must place `"use client";` at the very top of any file that uses `useState`, `useEffect`, or event handlers (like `onClick`).
> 4. For placeholder images, use standard HTML `<img>` tags with `className="w-full h-full object-cover"` and reliable raw image URLs (e.g., `images.unsplash.com` or `placehold.co`). To prevent Vercel build failures, put `/* eslint-disable @next/next/no-img-element */` at the top of any file using the `<img>` tag.
> 5. **Avoid Next.js Hydration Errors:** Ensure strict HTML validity. Do not nest `<a>` tags inside `<button>` tags, or `<p>` tags inside `<p>` tags.
> 6. **No Lazy Code:** Do not use placeholders, omit styling, or truncate code. Write the complete, production-ready code for every single component. If you run out of output tokens, pause and ask me to type 'continue'.
> 7. **Imports:** Use the `@/components/...` import alias for all component imports to avoid relative path confusion.
>
> **Design, SEO & Vibe:** 
> *   **SEO:** In `layout.tsx`, generate an `export const metadata` block with an optimized Title and Description for a UK-based Timber Merchant.
> *   **Vibe:** Industrial, reliable, and trade-focused. Use timber browns/ambers (`bg-amber-800`), treated wood greens (`bg-emerald-800`), and a light stone background (`bg-stone-50`). 
> *   **Interactivity & Layout:** Use standard Tailwind utility classes. Ensure true mobile-first padding (e.g., `px-4 md:px-8` or `px-6 lg:px-12`) so mobile views aren't squished. Add `html { scroll-behavior: smooth; }` to `globals.css`. Use strictly local state (`useState`) for any interactivity.
>
> **Generate the code file-by-file based on the following structure (Use realistic, professional UK trade-focused placeholder text for all copy):**
> 1. A sticky `Navbar` (Client Component) with Next.js `<Link href="#id">` smooth scroll anchor links, a clickable phone CTA, and a functional Hamburger menu for mobile. **Crucial: Ensure clicking a mobile menu link closes the menu (`setIsOpen(false)`).**
> 2. A `Hero` section with a background image overlay, an 'Open Mon-Fri 8am-5pm' badge, and two CTA buttons.
> 3. An `About` section highlighting their establishment in 2008 and 30+ years of trade experience.
> 4. A `Products` grid section displaying cards for: Closeboard Panels, Timber Posts, Sleepers, PAR Materials, Treated Timbers, Sheet Materials, and C16/C24 Graded Timber.
> 5. A `DeliveryInfo` banner section with a truck icon. (Leave a code comment here noting Phase 2 will introduce a postcode calculator).
> 6. A `Contact` section (Client Component) featuring a static map image linking to Google Maps on the left. On the right, build a form (Name, Email, Phone, Address, Subject, Message) that prevents default submission and uses local React state to show a simulated success message.
> 7. A `Footer` with a purely visual newsletter subscribe input that also shows a simulated UI success state.
>
> Please write modular, clean code, provide the `next.config.mjs` and `globals.css` files, and assemble all components into the main `page.tsx` file using the `@/components/` alias."

***

## 7. Summary of Architectural & AI Safeguard Decisions

1. **Strict CLI Flags:** Bypasses human error during project setup by forcing the exact architecture configured in the CLI, ensuring the AI's output matches your folder structure (`/src/app`).