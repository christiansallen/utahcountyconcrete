# BUILD PLAN - Utah County Concrete Mobile Landing Page

## Project Overview
Mobile landing page for "Utah County Concrete" - a concrete services company in Utah County. The design is mobile-first at 402px wide. Built with Vite + React 19 + Tailwind CSS v4.

## Design Tokens (defined in `src/index.css` `@theme` block)

| Token               | CSS Variable         | Value     | Usage                              |
|----------------------|----------------------|-----------|------------------------------------|
| `bg-bg`             | `--color-bg`         | `#EDF1F5` | Page background                    |
| `text-black`        | `--color-black`      | `#1E1F21` | Headings, dark buttons             |
| `text-navy`         | `--color-navy`       | `#28364D` | Card titles, sub-headings          |
| `text-gray-500`     | `--color-gray-500`   | `#525C6C` | Body text, descriptions            |
| `bg-yellow`         | `--color-yellow`     | `#FFB700` | Accent bars, "Learn More" links    |
| `bg-white`          | `--color-white`      | `#FFFFFF` | Card backgrounds, button text      |
| `bg-gray-200`       | `--color-gray-200`   | `#E0E5EA` | Icon badge backgrounds             |
| `border-border`     | `--color-border`     | `#D5D7DA` | Card borders                       |
| `font-inter`        | `--font-inter`       | `"Inter"` | All text                           |

### Typography Scale
| Element              | Font Weight       | Size   | Tailwind Classes                           |
|----------------------|-------------------|--------|--------------------------------------------|
| Section titles       | ExtraBold (800)   | 20px   | `text-[20px] font-extrabold uppercase`     |
| Hero title           | ExtraBold (800)   | 24px   | `text-[24px] font-extrabold uppercase`     |
| Card titles          | ExtraBold (800)   | 16px   | `text-[16px] font-extrabold uppercase`     |
| Value prop titles    | ExtraBold (800)   | 14px   | `text-[14px] font-extrabold uppercase`     |
| Body text            | Light (300)       | 14px   | `text-[14px] font-light`                   |
| Button text          | Semibold (600)    | 14px   | `text-[14px] font-semibold`                |
| Subtitle             | Regular (400)     | 15px   | `text-[15px] font-normal`                  |
| Learn More links     | Semibold (600)    | 14px   | `text-[14px] font-semibold`                |

## Component Hierarchy

```
App (max-w-[402px] mx-auto min-h-screen bg-bg)
  +-- Header
  +-- HeroTitle
  +-- EstimateCalculator
  +-- FourCs
  |     uses SectionHeading
  +-- Services
        uses SectionHeading
        uses ServiceCard (x4)
              uses Button (for "Learn More" if needed)
```

## Image Assets (`src/assets/images.js`)

| Export Name        | Used In               | Description                |
|--------------------|-----------------------|----------------------------|
| `heroImage`        | EstimateCalculator    | Background of calculator   |
| `drivewaysImage`   | Services card #1      | Driveways & Walkways       |
| `patiosImage`      | Services card #2      | Patios & Slabs             |
| `curbingImage`     | Services card #3      | Curbing                    |
| `foundationsImage` | Services card #4      | Foundations & Footings     |
| `logoSvg`          | Header                | UC stylized logo mark      |

---

## Component Specifications

---

### 1. `src/components/ui/Button.jsx`

**Props:** `{ children, variant, icon, className, ...rest }`

**Implementation:**

```jsx
export default function Button({ children, variant = "primary", icon, className = "", ...rest }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[14px] font-semibold w-full cursor-pointer transition-opacity hover:opacity-90 bg-black text-white ${className}`}
      {...rest}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
```

**Notes:**
- All buttons on this page use the same dark style (`bg-black` which maps to `#1E1F21`, `text-white`)
- The `variant` prop is available for future use but both variants render the same for now
- Always render `w-full` and `justify-center`
- Icon goes before text, wrapped in a flex span

---

### 2. `src/components/ui/SectionHeading.jsx`

**Props:** `{ title }`

**Implementation:**

```jsx
export default function SectionHeading({ title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-9 bg-yellow rounded-full" />
      <h2 className="text-[20px] font-extrabold uppercase text-black tracking-tight">
        {title}
      </h2>
    </div>
  );
}
```

**Notes:**
- Yellow accent bar: `w-1` (4px) x `h-9` (36px), `bg-yellow`, `rounded-full`
- Title: `text-[20px] font-extrabold uppercase text-black tracking-tight`
- Container: `flex items-center gap-3 mb-6`

---

### 3. `src/components/ui/ServiceCard.jsx`

**Props:** `{ image, icon, title, description }`

**Implementation:**

```jsx
export default function ServiceCard({ image, icon, title, description }) {
  return (
    <div className="overflow-hidden rounded-xl">
      {/* Card Image */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Body */}
      <div className="bg-white p-5 border border-border border-t-0 rounded-b-xl">
        {/* Icon Badge */}
        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-extrabold uppercase text-navy mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] font-light text-gray-500 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Learn More Link */}
        <a
          href="#"
          className="text-[14px] font-semibold text-yellow inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          Learn More
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
```

**Notes:**
- The image area uses `aspect-video` for ~16:9 ratio
- Only the card body has a border, not the image area. Use `border-t-0` on the body to avoid double border at the seam
- The outer `div` has `rounded-xl` and `overflow-hidden` so the image gets rounded top corners
- The card body gets `rounded-b-xl` explicitly
- Icon badge is 40x40px (`w-10 h-10`), `bg-gray-200`, `rounded-lg`

---

### 4. `src/components/Header.jsx`

**Implementation:**

```jsx
import { logoSvg } from "../assets/images";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white">
      {/* Call Now Button */}
      <a
        href="tel:+1234567890"
        className="flex items-center gap-1.5 bg-black text-white text-[12px] font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        {/* Phone Icon (inline SVG) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
        </svg>
        Call Now
      </a>

      {/* Logo */}
      <img src={logoSvg} alt="Utah County Concrete" className="h-10" />

      {/* Hamburger Menu */}
      <button className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer bg-transparent border-none" aria-label="Menu">
        <span className="block w-5 h-0.5 bg-black rounded-full" />
        <span className="block w-5 h-0.5 bg-black rounded-full" />
        <span className="block w-5 h-0.5 bg-black rounded-full" />
      </button>
    </header>
  );
}
```

**Key details:**
- Background: `bg-white`
- Layout: `flex items-center justify-between px-4 py-3`
- Call Now button: small `text-[12px]`, `bg-black text-white`, `rounded-lg`, `px-3 py-2`
- Phone icon: inline SVG from Heroicons (solid phone), `w-3.5 h-3.5`
- Logo: `<img>` tag loading `logoSvg` from assets, `h-10` tall
- Hamburger: 3 lines using `span` elements, each `w-5 h-0.5 bg-black rounded-full`, gap `1.5`

---

### 5. `src/components/HeroTitle.jsx`

**Implementation:**

```jsx
export default function HeroTitle() {
  return (
    <section className="pt-8 pb-2 px-4 text-center">
      <h1 className="text-[24px] font-extrabold uppercase text-black tracking-tight">
        CONCRETE{" "}
        <span className="text-black">&#9733;</span>
        {" "}CURBING
      </h1>
      <p className="text-[15px] font-normal text-gray-500 mt-3">
        Serving Utah County for over 15 years
      </p>
    </section>
  );
}
```

**Key details:**
- Container: `pt-8 pb-2 px-4 text-center`
- Title: `text-[24px] font-extrabold uppercase text-black tracking-tight`
- Star: Use `&#9733;` (★ black star Unicode character), same color as text
- Subtitle: `text-[15px] font-normal text-gray-500 mt-3` (mt-3 = 12px gap)

---

### 6. `src/components/EstimateCalculator.jsx`

**Implementation:**

```jsx
import { useState } from "react";
import { heroImage } from "../assets/images";

// Cost per square foot for estimation (simple calc)
const COST_PER_SQFT = 12;

export default function EstimateCalculator() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const sqft = width && length ? Number(width) * Number(length) : 0;
  const estimate = sqft > 0 ? Math.round(sqft * COST_PER_SQFT) : 0;

  return (
    <section className="px-4 pt-6 pb-2">
      {/* Calculator Card */}
      <div
        className="relative rounded-xl overflow-hidden"
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 p-5">
          {/* Yellow Accent Bar + Title */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-9 bg-yellow rounded-full" />
            <h2 className="text-[20px] font-extrabold uppercase text-white tracking-tight">
              Estimate Calculator
            </h2>
          </div>

          {/* Input Row */}
          <div className="flex items-center gap-2 mb-4">
            {/* Width Input */}
            <div className="flex-1">
              <input
                type="number"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-[14px] placeholder:text-white/50 focus:outline-none focus:border-yellow"
              />
              <span className="text-[11px] text-white/60 mt-1 block">ft</span>
            </div>

            {/* Length Input */}
            <div className="flex-1">
              <input
                type="number"
                placeholder="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-[14px] placeholder:text-white/50 focus:outline-none focus:border-yellow"
              />
              <span className="text-[11px] text-white/60 mt-1 block">ft</span>
            </div>

            {/* Equals Sign */}
            <div className="flex items-center justify-center w-8 h-8 text-white/60 text-[18px] font-light shrink-0">
              =
            </div>

            {/* Result Field */}
            <div className="flex-1">
              <div className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-[14px] font-semibold min-h-[42px] flex items-center">
                {estimate > 0 ? `$${estimate.toLocaleString()}` : "$"}
              </div>
              <span className="text-[11px] text-white/60 mt-1 block">&nbsp;</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-4">
            <a
              href="#"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black rounded-lg px-4 py-3 text-[14px] font-semibold hover:opacity-90 transition-opacity"
            >
              {/* Calendar Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
              </svg>
              Schedule Visit
            </a>
            <a
              href="tel:+1234567890"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-3 text-[14px] font-semibold hover:opacity-90 transition-opacity"
            >
              {/* Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-[12px] text-white/60 text-center">
            Free on-site visit, measure and confirm quote.
          </p>
        </div>
      </div>

      {/* Below-card disclaimer */}
      <p className="text-[12px] text-gray-500 mt-3 px-1 leading-relaxed">
        *Estimates are subject to vary based on site conditions, project complexity, and material costs. Final pricing confirmed after on-site visit.
      </p>
    </section>
  );
}
```

**Key details:**
- Outer section: `px-4 pt-6 pb-2`
- Card container: `relative rounded-xl overflow-hidden`
- Background: `heroImage` loaded as an `<img>` with `object-cover`, covered by `bg-black/70` overlay div
- Content sits above with `relative z-10 p-5`
- The section heading inside the card uses WHITE text (not black) since it's on a dark background. Replicate the yellow bar + title inline rather than using `SectionHeading` (which uses black text)
- Input row: `flex items-center gap-2`
- Each input container is `flex-1`; inputs have `bg-white/10 border border-white/20 rounded-lg`
- "ft" labels: `text-[11px] text-white/60 mt-1 block`
- Equals sign: centered in a `w-8 h-8` div, `text-white/60`
- Result display: same styling as inputs but not editable (a `div` not `input`)
- "Schedule Visit" button: `bg-white text-black` (inverted from normal)
- "Call Now" button: `bg-black text-white` (normal dark)
- Both buttons: `flex-1`, `rounded-lg`, `px-4 py-3`, `text-[14px] font-semibold`
- Disclaimer inside card: `text-[12px] text-white/60 text-center`
- Disclaimer below card: `text-[12px] text-gray-500 mt-3 px-1 leading-relaxed`
- Calculator logic: `COST_PER_SQFT = 12`, result = `width * length * 12`, display as `$X,XXX`

---

### 7. `src/components/FourCs.jsx`

**Implementation:**

```jsx
import SectionHeading from "./ui/SectionHeading";

const values = [
  {
    title: "Craftsmanship First",
    description:
      "Every pour, finish, and detail reflects our dedication to superior workmanship. We take pride in delivering concrete work that stands the test of time.",
  },
  {
    title: "Confidence in Proven Techniques",
    description:
      "With over 15 years in the industry, we use time-tested methods and modern best practices to ensure reliable, long-lasting results on every project.",
  },
  {
    title: "Committed to Quality",
    description:
      "From premium materials to meticulous preparation, we never cut corners. Our commitment to quality means your investment is built to last.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your vision drives our work. We communicate clearly, respect your property, and don't consider the job done until you're completely satisfied.",
  },
];

export default function FourCs() {
  return (
    <section className="px-4 pt-8">
      <SectionHeading title="Our 4 C's" />

      <div className="flex flex-col gap-5">
        {values.map((item, index) => (
          <div key={index}>
            <h3 className="text-[14px] font-extrabold uppercase text-navy mb-1.5">
              {item.title}
            </h3>
            <p className="text-[14px] font-light text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Key details:**
- Section container: `px-4 pt-8`
- Uses `SectionHeading` with title="Our 4 C's"
- Values mapped in a `flex flex-col gap-5` container
- Each value: title is `text-[14px] font-extrabold uppercase text-navy mb-1.5`
- Description: `text-[14px] font-light text-gray-500 leading-relaxed`
- The description text above is placeholder. Builder should use the exact text or similar concrete-industry-appropriate copy.

---

### 8. `src/components/Services.jsx`

**Implementation:**

```jsx
import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ui/ServiceCard";
import {
  drivewaysImage,
  patiosImage,
  curbingImage,
  foundationsImage,
} from "../assets/images";

const services = [
  {
    image: drivewaysImage,
    title: "Driveways & Walkways",
    description:
      "Durable, professionally finished concrete driveways and walkways that enhance your home's curb appeal and withstand Utah's climate year after year.",
    icon: (
      {/* Truck/Paving icon - use a simple path-based SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-navy">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    image: patiosImage,
    title: "Patios & Slabs",
    description:
      "Custom concrete patios and slabs designed for outdoor living. From stamped to exposed aggregate, we create beautiful spaces for your backyard.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-navy">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    image: curbingImage,
    title: "Curbing",
    description:
      "Professional landscape curbing that adds a clean, finished look to your yard. Choose from a variety of styles, colors, and patterns to complement your landscaping.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-navy">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    image: foundationsImage,
    title: "Foundations & Footings",
    description:
      "Solid foundations and footings built to code. From residential additions to new construction, we ensure your structure starts on solid ground.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-navy">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="px-4 pt-8 pb-12">
      <SectionHeading title="Our Services" />

      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
```

**Key details:**
- Section container: `px-4 pt-8 pb-12` (extra bottom padding since it's the last section)
- Uses `SectionHeading` with title="Our Services"
- Cards in `flex flex-col gap-4` (16px gap)
- Each card uses `ServiceCard` component
- Icons are inline SVGs from Heroicons (outline style), `w-5 h-5 text-navy`
- Icon choices:
  - Driveways: `truck` icon (Heroicons)
  - Patios: `home` icon (Heroicons)
  - Curbing: `paint-brush` / `rocket-launch` icon (Heroicons)
  - Foundations: `building-office` icon (Heroicons)

---

## Build Order (for the Builder agent)

1. **First:** Build `ui/Button.jsx`, `ui/SectionHeading.jsx`, `ui/ServiceCard.jsx` (reusable primitives)
2. **Second:** Build `Header.jsx` and `HeroTitle.jsx` (simple sections)
3. **Third:** Build `EstimateCalculator.jsx` (most complex - has state, calculations, background image)
4. **Fourth:** Build `FourCs.jsx` (uses SectionHeading)
5. **Fifth:** Build `Services.jsx` (uses SectionHeading + ServiceCard)
6. **Finally:** Visual QA pass in browser at 402px width

## Important Notes for Builder

- **Mobile only**: This is designed for 402px width. The outer `App` container uses `max-w-[402px] mx-auto`.
- **No dark mode**: Ignore `prefers-color-scheme`. The design is light mode only.
- **Font loading**: Inter is loaded via Google Fonts link tags in `index.html`. The `font-inter` token is defined in the Tailwind theme.
- **All colors use Tailwind theme tokens**: Use `text-black`, `bg-yellow`, `text-navy`, etc. -- NOT arbitrary hex values in classes.
- **Icons**: Use inline SVGs from Heroicons (https://heroicons.com). Copy the JSX-compatible SVG code. Use outline (24px) variants for service card icons, and solid (20px) variants for button icons.
- **Images**: Import from `src/assets/images.js`. These are external URLs (Figma CDN), so use `<img src={url}>` tags, NOT `background-image` CSS (except for the calculator where you use an img tag with absolute positioning for the same effect).
- **Interactivity**: Only the Estimate Calculator has real interactivity (width/length inputs calculate a price). Everything else is static.
- **Links**: Use `href="#"` for all links. Use `href="tel:+1234567890"` for phone-related CTAs.
