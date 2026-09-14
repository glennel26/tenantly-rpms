# Tenantly: Front-End Landing Page Documentation

**Project Title:** Tenantly: A Web-Based Rental Property Management System for Apartment and Boarding House Administration  
**Project Scope:** Front-End Landing Page & Listings Discovery Module  
**Repository:** `tenantly-rpms`  

---

## 1. Overview & Objective

Tenantly is a web-based rental property management system designed for apartment complexes and student boarding houses in Bulacan. 

As the initial phase of the project, this documentation covers the **Front-End Landing Page**, which serves as the public gateway for prospective student tenants to find verified accommodations and for property owners to learn about system capabilities and register their listings.

---

## 2. Target Bulacan Campuses

The landing page provides search presets and filter tags for key colleges and universities in Bulacan:
- **Bulacan Agricultural State College (BASC)** - San Ildefonso
- **Bulacan State University (BulSU Main)** - Malolos
- **Bulacan State University (BulSU Bustos)** - Bustos
- **National University (NU Baliwag)** - Baliwag
- **La Consolacion University Philippines (LCUP)** - Malolos
- **Baliuag University (BU)** - Baliwag

---

## 3. Brand Identity & Design System

The landing page follows a distinct four-color brand palette:

| Color Token | Hex Code | Role in the Landing Page |
|---|---|---|
| Crimson Red | `#780000` | Primary action buttons (*Search Rentals*, *List Your Property*, *Inquire Now*), house roof icon outline |
| Warm Cream | `#FDF0D5` | House rules container background, search pill borders, window pane accents |
| Prussian Navy | `#003049` | Deep contrast hero banner gradient, typography headers, card price pills, navigation links, footer |
| Slate Blue | `#669BBC` | Secondary badges, category filter pills, interactive hover states, bedspace indicators |
| Pure White | `#FFFFFF` | Card surfaces, form inputs, clean readability contrast |

### Logo Assets
- `assets/logo-full.png`: Horizontal logo with transparent background for header navigation.
- `assets/logo-submark.png`: Compact TNTY submark with transparent background for mobile view, favicon, and footer.

---

## 4. Front-End Features & Components

### 4.1. Header & Navigation
- Responsive top navbar with transparent logo.
- Quick navigation to Browse Listings, Campus Life stories, System Features, and Bulacan Campuses.
- Role-specific action buttons:
  - **"List Your Property"** (for landlords).
  - **"Sign In"** (dual-role modal trigger).

### 4.2. Unified Search Capsule (Cozycozy Inspired)
- Sticky floating search pill that allows visitors to filter accommodations by:
  - **Campus / Area:** Filter by BASC, BulSU, NU Baliwag, etc.
  - **Property Type:** Boarding house bedspaces, solo rooms, studio apartments.
  - **Monthly Budget:** Below ₱3,000, ₱3,000 - ₱6,000, Above ₱6,000.
  - **Preferences & Rules:** Female only, male only, no curfew, pet-friendly.
  - **Search Button:** Triggers real-time filtering without page reloads.

### 4.3. Interactive Category Filter Pills
- Instant client-side pill filters allowing single-click filtering for quick campus or accommodation lookups.

### 4.4. Property Listing Cards & House Rules
Each property card includes:
- Realistic room photograph with hover zoom effect.
- Rating score and verified badge.
- Pricing in Philippine Peso (`PHP /mo`).
- School proximity indicator (e.g. *300m from BulSU Gate 2*).
- **House Rules Snapshot:**
  - Curfew times (e.g. *10:00 PM gate lock* vs. *No curfew / 24-7 RFID*).
  - Pet policy (*Strictly no pets* vs. *Small pets allowed*).
- **"View Details"** and **"Inquire Now"** action buttons.

### 4.5. Property Details & Inquiry Modal
- Displays full property specifications, including:
  - Curfew policy, pet rules, visitor hours, cooking permissions, deposit terms, gender allocation.
  - Unit amenities checklist (WiFi, study desks, submetered utilities, CCTV).
  - Landlord contact information and average response rate.
  - Direct reservation inquiry form (Full Name, School, Mobile Number, Move-in Date, Notes).

### 4.6. Story Highlight Showcase
- Vertical photo cards highlighting student life in Bulacan:
  - *Walk to Class Gates* (campus proximity).
  - *Solo Studio Living* (privacy for thesis writers).
  - *Focused Study Desks* (academics and quiet hours).
  - *Digital Billing* (submetered light and water tracking).
  - *Gated & Monitored* (security and peace of mind).

### 4.7. Dual-Role Feature Overview
- Interactive switcher tabs showcasing features for both user types:
  - **For Tenants & Students:** Verified listings, transparent digital bills, one-click maintenance tickets.
  - **For Property Owners & Landlords:** Multi-property inventory, automated rent & receipt validation, tenant profiling.

### 4.8. Dual-Role Authentication Modal
- Clean modal allowing visitors to select their role (*Tenant / Student* or *Property Owner*), enter credentials, and simulate login.

---

## 5. Front-End Folder Structure

All landing page files and assets are contained within the `frontend/` directory:

```text
frontend/
├── index.html                 # main landing page markup
├── style.css                  # custom css styling and responsive design system
├── main.js                    # interactive filtering, modal logic, and search handlers
└── assets/
    ├── logo-full.png          # transparent tenantly logo
    ├── logo-submark.png       # transparent tnty submark
    └── properties/            # realistic room & building photography (room-1.jpg to room-6.jpg)
```

Root redirection:
- `index.html` (in root): Automatically redirects visitors to `frontend/index.html`.

---

## 6. Development & Coding Conventions

- **Zero Emojis:** All UI elements use clean inline SVG icons.
- **Lowercase Comments:** All comments in HTML, CSS, and JS are formatted in lowercase.
- **Student Coding Style:** Clear variable names, standard DOM manipulation, and maintainable vanilla structure without framework bloat.
- **Future Scope:** Additional pages (e.g. Tenant Dashboard, Landlord Dashboard, Billing Management) will be added in subsequent project phases as needed.
