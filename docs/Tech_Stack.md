# Technical Stack & Architecture

## Frontend
* **Framework:** Next.js (App Router for optimized server/client components)
* **Styling:** Tailwind CSS (for fast, responsive design matching standard e-commerce layouts)
* **Icons/Animations:** React Icons, Framer Motion, three.js (for smooth slider transitions and cart feedback)
* [cite_start]**Form Validation:** React Hook Form with Zod (satisfies the requirement for strict form validation on the Contact and Checkout forms [cite: 80, 81]).

## Backend & Database
* **Environment:** Node.js (via Next.js API Routes / Server Actions)
* **Database:** MongoDB (Mongoose ODM for flexible product schema management)
* **State Management:** Zustand or React Context (for managing Cart state across the app)

## Coding Standards
* Strictly use functional components and hooks.
* Maintain modular components (e.g., separating the global Navbar and Footer from page-specific code).
