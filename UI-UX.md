# UI/UX Design System & Layout Guidelines

## 1. Design Philosophy & Theming
The visual identity is brutalist, minimalist, and highly structural. The design relies on negative space, sharp grid alignments, and oversized typography rather than heavy illustrations or shadows. Think of the aesthetic suited for an exclusive, curated drop of streetwear—like limited-run graphic hoodies or oversized half-zip sweatshirts—where the product imagery and layout do all the talking.

*   **Color Palette:** To Be Decided (TBD). The application will use CSS variables or Tailwind theme extensions (e.g., `bg-background`, `text-foreground`, `border-primary`) so the actual color codes can be injected later.
*   **Contrast:** The design must rely on high-contrast pairings (e.g., a dark text variable against a light background variable) to maintain readability.
*   **Typography:** A stark, geometric Sans-Serif (e.g., Inter, Space Grotesk, or Helvetica Now). Use extreme contrasts in font weight: `font-black` for massive headers and `font-normal text-sm` for utility links and descriptions.
*   **Borders & Shapes:** Sharp edges only. No `rounded-lg` or border-radius classes. Use `rounded-none`. Buttons and input fields should be harsh, 1px solid rectangles using the `border-primary` variable.

## 2. Global Components

### Navigation Bar (Sticky Header)
*   **Layout:** Edge-to-edge spanning the full viewport, separated from the content by a single 1px solid bottom border (`border-b border-primary`).
*   **Left:** The brand name in uppercase, bold typography (`text-xl font-black tracking-tighter`).
*   **Center:** Hidden on mobile. On desktop, simple text links for Shop, Categories, About, Contact.
*   **Right:** Functional icons/text (Search, Cart). The Cart should display a strict numerical counter in brackets, e.g., `CART [2]`.

### Footer
*   **Layout:** Massive, screen-filling typography.
*   **Top Section:** The brand name stretching across the entire width of the screen (`text-[10vw] font-black leading-none`).
*   **Bottom Section:** A simple, multi-column CSS grid displaying utility links, social profiles, and a minimalist newsletter input field (a border-bottom text input with a simple "->" submit button).

### Buttons & Inputs
*   **Primary Buttons:** Solid background using the `bg-primary` variable, with contrasting text (`text-secondary`). Include structural hover states (e.g., inverting the primary and secondary colors).
*   **Forms:** Transparent backgrounds. Only a 1px solid bottom border for inputs. The placeholder text should use a muted text variable.

## 3. Page-Level Architecture

### Home Page
*   **Hero Section:** A massive edge-to-edge image slider. No text overlays wrapping the image. Put the title and "Shop Now" button cleanly below the image grid.
*   **Category Marquee:** A CSS-animated, infinitely scrolling marquee text strip displaying the product categories.
*   **Latest Products:** A strict 2-column (mobile) or 4-column (desktop) grid. The product image has a subtle muted background color variable. Below the image: Title aligned left, Price aligned right. No stars, no badges, just text.

### Products Page (Shop All)
*   **Header:** A massive, left-aligned page title reading "ALL PRODUCTS."
*   **Layout:** A sidebar on the left (25% width) containing a brutalist checklist for Categories and a raw numerical slider for Price Range. The right side (75% width) is the product grid.
*   **Product Cards:** Hovering over a product image should instantly swap the image to a secondary lifestyle shot. 

### Product View Page (Single Item)
*   **Layout:** 50/50 split on desktop.
*   **Left Side (Media):** Sticky scrolling. A stacked vertical list of massive, high-resolution product images.
*   **Right Side (Details):** Fixed in place while the left side scrolls. Contains the Product Title (`text-4xl uppercase`), Price, a short description, and a massive, full-width "ADD TO CART" button.
*   **Accordion Details:** Shipping, materials, and dimension information tucked into simple, border-bottom accordions.

### Cart Page (Slide-out or Full Page)
*   **Layout:** A stark list view. Each row has a 1px border-bottom.
*   **Row Content:** Thumbnail on the left, Title next to it. Quantity toggles as simple `[-] 1 [+]` text. Price on the far right.
*   **Summary:** Pushed completely to the bottom right of the page, featuring the Subtotal and a blocky "PROCEED TO CHECKOUT" button.

### Checkout Page
*   **Layout:** Two distinct columns. Left column for the Shipping Form, right column for the Order Summary.
*   **Form Style:** Floating labels, brutalist input fields (bottom borders only). Strict validation error text displayed in bold using an `error-text` variable (`uppercase text-xs`).

## 4. Micro-Interactions & States
*   **Hover States:** Links should not underline. Instead, they should have a strikethrough line or slightly fade in opacity (`hover:opacity-50`).
*   **Image Loading:** Use a solid muted background variable while high-res images load.
*   **Scroll:** Implement smooth scrolling for the "Scroll to Top" button. The button itself should be a stark, solid contrasting square with an up-arrow, pinned to the bottom right.
