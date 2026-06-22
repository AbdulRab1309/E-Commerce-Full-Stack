# UI/UX Design System & Layout Guidelines

## 1. Design Philosophy & Theming
The visual identity is brutalist, minimalist, and highly structural. The design relies on generous negative space, sharp grid alignments, and oversized typography rather than heavy illustrations, shadows, or gradients. Think of the aesthetic suited for an exclusive, curated drop of streetwear—where the product imagery and structural layout do all the talking.

*   **Typography:** A stark, geometric Sans-Serif (e.g., Helvetica Now, Neue Haas Grotesk, or Inter). The design relies on extreme contrast in font weight: `font-black` (or extremely heavy weights) for massive headers, brand names, and structural elements, contrasted with `font-normal text-sm` for utility links and product meta-data.
*   **Theming & Color Modes:** The application uses CSS variables (e.g., `bg-background`, `text-foreground`, `border-primary`) to seamlessly toggle between three distinct, high-contrast structural modes:
    *   **White Mode (Base):** Background is Paper White (`#F4F4F0`), Text/Borders are Pitch Black (`#000000`).
    *   **Black Mode (Inverted):** Background is Pitch Black (`#000000`), Text/Borders are Paper White (`#F4F4F0`).
    *   **Red Mode (Accent):** Background is a vivid, aggressive Red (`#FF0000`), Text/Borders are Pitch Black (`#000000`) for a jarring, urgent aesthetic.
*   **Borders & Shapes:** Sharp edges only. No `rounded-lg` or border-radius classes anywhere. Use `rounded-none` globally. Buttons, input fields, and grid dividers must be harsh, solid 1px or 2px rectangles using the `border-primary` variable.

## 2. Global Components

### Navigation Bar (Sticky Header)
*   **Layout:** Edge-to-edge spanning the full viewport, separated from the content by a single structural bottom border (`border-b-2 border-primary`).
*   **Left:** The brand name in uppercase, bold typography (`text-xl font-black tracking-tighter uppercase`).
*   **Center:** Hidden on mobile. On desktop, simple, stark text links for Shop, Categories, About, Contact.
*   **Right:** Functional elements (Search, Cart). The Cart should display a strict numerical counter in brackets, e.g., `CART [2]`.

### Footer
*   **Layout:** Massive, screen-filling typography.
*   **Top Section:** The brand name stretching across the entire width of the screen (`text-[15vw] font-black leading-none tracking-tighter uppercase`), acting as a graphic element.
*   **Bottom Section:** A simple, multi-column CSS grid displaying utility links, social profiles, and a minimalist newsletter input field (a border-bottom text input with a simple `->` submit button).

### Buttons & Inputs
*   **Primary Buttons:** Brutalist and solid. Background uses the `bg-foreground` variable, with contrasting text (`text-background`). Include harsh structural hover states (e.g., instantly inverting the background and text colors, or swapping to the Red theme palette on hover).
*   **Forms:** Transparent backgrounds (`bg-transparent`). Only a solid bottom border for inputs, or full heavy borders. The placeholder text should use a muted grey (`#A0A0A0`). No focus rings; focus states simply thicken the border.

## 3. Page-Level Architecture

### Home Page
*   **Hero Section:** A massive edge-to-edge image slider. No text overlays wrapping the image. The title and a raw "SHOP NOW" button sit cleanly below the image grid.
*   **Category Marquee:** A CSS-animated, infinitely scrolling marquee text strip displaying the product categories or brand manifesto in bold, uppercase text.
*   **Latest Products:** A strict 2-column (mobile) or 4-column (desktop) grid defined by solid borders. The product image has a subtle off-white/muted background color variable. Below the image: Title aligned left, Price aligned right. No stars, no review badges, just pure text.

### Products Page (Shop All)
*   **Header:** A massive, left-aligned page title reading "ALL PRODUCTS."
*   **Layout:** A rigid split layout. A sidebar on the left (25% width) containing a brutalist checklist for Categories and a raw numerical slider for Price Range. The right side (75% width) is the product grid.
*   **Product Cards:** Hovering over a product image should instantly swap the image to a secondary lifestyle/editorial shot. 

### Product View Page (Single Item)
*   **Layout:** 50/50 split on desktop, separated by a vertical border line.
*   **Left Side (Media):** Sticky scrolling. A stacked vertical list of massive, high-resolution product images.
*   **Right Side (Details):** Fixed in place while the left side scrolls. Contains the Product Title (`text-4xl font-black uppercase tracking-tighter`), Price, a stark description, and a massive, full-width "ADD TO CART" button.
*   **Accordion Details:** Shipping, materials, and dimension information tucked into simple, border-bottom accordions with `+` and `-` toggle icons.

### Cart Page (Slide-out or Full Page)
*   **Layout:** A stark, unstyled list view. Each row has a solid border-bottom.
*   **Row Content:** Square thumbnail on the left, Title next to it. Quantity toggles as simple `[ - ] 1 [ + ]` text blocks. Price on the far right.
*   **Summary:** Pushed completely to the bottom right of the page, featuring the Subtotal and a blocky, full-width "PROCEED TO CHECKOUT" button.

### Checkout Page
*   **Layout:** Two distinct columns. Left column for the Shipping Form, right column for the Order Summary.
*   **Form Style:** Floating labels or simple top-labels, brutalist input fields (bottom borders only or heavy rectangles). Strict validation error text displayed in bold using an `error-text` variable (`uppercase text-xs font-bold text-red-600`).

## 4. Micro-Interactions & States
*   **Hover States:** Links should not feature traditional underlines. Instead, they should have a strikethrough line or slightly fade in opacity (`hover:opacity-50`).
*   **Image Loading:** Use a solid, stark background color (like the Red theme color or muted grey) while high-res images load to maintain the brutalist geometry.
*   **Scroll:** Implement smooth scrolling for the "Scroll to Top" button. The button itself should be a stark, solid contrasting square with a simple ASCII up-arrow (`^`), pinned to the bottom right of the viewport.
