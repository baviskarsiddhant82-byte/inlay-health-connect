# Inlay Health Connect

Reference image instructions: Study all attached website reference images before designing. Identify the strongest visual patterns in their layouts, typography, whitespace, product presentations, section transitions, and animations. Combine these patterns into one cohesive, original Inlay Health homepage. Do not copy any single reference or mix their styles randomly. The Inlay Health product context PDF takes priority for product functionality, branding, privacy, and content accuracy. The reference images guide visual direction only. Prioritize the most visually distinctive references while maintaining consistent typography, restrained colors, minimal copy, and strong UX principles throughout.

# Build a Premium Inlay Health Website — React

## 1. Project overview

Design and build a complete, production-quality, responsive marketing homepage for **Inlay Health**, an AI-assisted personal health platform that brings a person's medical information together in one place and helps patients and doctors understand the complete health picture.

Use the attached website reference images for visual inspiration. The references demonstrate premium SaaS landing pages, editorial layouts, clean healthcare interfaces, product-led storytelling, sophisticated typography, large visual sections, restrained color palettes, and well-composed product screenshots.

**Do not copy any reference website directly.** Create an original Inlay Health experience that adapts the strongest visual principles to the actual product.

### Primary objective

Showcase what Inlay Health does, the value it provides, and how its connected health-record platform works.

The homepage should help visitors quickly understand:
- What Inlay Health is.
- How it brings scattered health records together.
- How patients and doctors benefit from the same up-to-date health information.
- How AI helps identify trends, missed tests, and potential care gaps.
- How patient consent, privacy, and doctor oversight work.

The primary conversion goal is to encourage visitors to explore the platform or get started with their clinic. Use appropriate, clearly differentiated calls to action.

This is a **marketing homepage only**, not the actual patient dashboard, doctor portal, clinic portal, or admin console. Do not build an entire application or introduce unnecessary product features.

---

## 2. Technology requirements

Build the website using:

- React.js with functional components.
- Vite if a project setup is required.
- TypeScript where supported by the existing project.
- Tailwind CSS for styling.
- Lucide React for consistent interface icons.
- GSAP with ScrollTrigger for refined scroll-based animations.
- Reusable components and a maintainable component structure.

Before making changes, inspect the existing project structure and reuse its working configuration where appropriate. Do not unnecessarily replace dependencies or rewrite the entire setup.

The result must be a working website, not a static mockup.

Implement real navigation anchors, functional buttons, responsive layouts, and accessible interactive elements.

---

## 3. Design direction

Create a premium, calm, modern healthcare technology website that feels like a combination of a sophisticated SaaS product, an editorial health brand, and a carefully designed digital product experience.

The visual direction should draw from the supplied references:

- **Reference 1:** Distinctive full-page composition, generous whitespace, dark product cards, strong contrast, and creative section transitions.
- **Reference 2:** Premium healthcare SaaS presentation, product-led storytelling, refined typography, and clear workflow demonstrations.
- **Reference 3:** Editorial healthcare branding, understated elegance, and confident messaging.
- **Reference 4:** Minimal AI-healthcare presentation, spacious alternating layouts, and sophisticated product visualizations.
- **Reference 5:** Clean healthcare landing-page composition, clear service presentation, and well-structured content.
- **Reference 6:** Rounded content surfaces, concise information, strong card hierarchy, and carefully arranged product imagery.
- **Reference 7:** Contemporary healthcare website styling, modular sections, restrained color use, and strong content hierarchy.

Treat these as inspiration for composition, spacing, contrast, and interaction—not as templates to reproduce.

### Desired look and feel

- Premium but approachable.
- Calm and trustworthy.
- Minimal without feeling empty.
- Modern without looking futuristic or artificial.
- Product-focused rather than stock-photo-focused.
- Visually distinctive without unnecessary decoration.
- Appropriate for both patients and healthcare professionals.

Avoid generic hospital websites, generic AI startup templates, excessive gradients, childish illustrations, and overused floating glassmorphism cards.

---

## 4. Inlay Health brand system — follow strictly

The attached product context document is the source of truth for the brand.

### Colors

Use the following palette:

- Primary Inlay teal: `#01837E`
- Dark teal: `#016D69`
- Deep teal: `#005350`
- Light teal: `#EACFCA`
- Petrol: `#173E45`
- Sage: `#8DADA5`
- Mist: `#DDE8E5`
- Sand: `#D8D2C8`
- Cream: `#F7F4EF`
- White: `#FFFFFF`

Use white or warm off-white as the primary background, deep teal for strong contrast, and Inlay teal for primary buttons, links, selected elements, and subtle highlights.

Use sage, mist, and sand sparingly for supporting surfaces.

The documented light-teal value is `#EACFCA`; do not silently replace the official palette. If the existing product assets clarify an intended treatment, preserve the source value and use it appropriately.

### Important color rules

- Avoid purple and indigo.
- Do not introduce bright blue as the main brand color.
- Avoid excessive gradients and multicolor backgrounds.
- Do not make every section a different color.
- Avoid using red as a decorative accent.
- Reserve orange and red for appropriate health-status meanings, not marketing decoration.
- Use dark backgrounds selectively for contrast and product storytelling.

The site should feel cohesive from the header to the footer.

### Logo

Use the supplied Inlay Health logo or existing project asset if available.

The logo symbol consists of four rounded geometric pieces that fit together like interlocking tiles.

Use the light logo on light backgrounds and the dark-background logo on dark surfaces, according to the source branding.

Do not redesign the logo, approximate it with an unrelated icon, or invent a new brand identity. If no logo asset is available, create a temporary, simple geometric placeholder inspired by the documented symbol.

### Typography

Use **Inter** throughout the entire website.

Establish a consistent, reusable typography system:

- Display headings: 52–64px on large desktop screens.
- Section headings: 36–44px.
- Card headings: 20–24px.
- Body text: 16–18px.
- Supporting text: 14–15px.
- Eyebrows and metadata: 12–13px.

Use a sensible mobile scale with fluid sizing through `clamp()`.

Use regular, medium, and semibold weights. Maintain consistent line heights, heading styles, and spacing.

Do not assign arbitrary font sizes to individual sections. Do not mix typefaces, overuse bold text, use all-uppercase headings, or create oversized headings that overwhelm the product visuals.

Use sentence case throughout.

---

## 5. UX principles — mandatory

The website must follow these principles across every section.

### Clear visual hierarchy

Each section should have:
1. One primary message.
2. One supporting sentence or short paragraph.
3. One clear visual or product demonstration.
4. One primary action where appropriate.

A visitor should understand the purpose of a section within a few seconds.

### Reduce cognitive load

Keep copy concise and specific.

Prefer short headlines, brief descriptions, meaningful icons, and visual explanations over long paragraphs.

Do not repeat the same product benefits in multiple sections.

Avoid unnecessary labels, decorative statistics, excessive feature lists, redundant buttons, and repeated calls to action.

### Consistency

Maintain consistent:
- Typography and spacing.
- Button styles and interaction states.
- Card corner radii.
- Icon sizes and stroke weights.
- Grid alignment.
- Container widths.
- Section spacing.
- Color usage.
- Responsive behavior.

Create a small design system instead of styling each component independently.

### Accessibility

- Use semantic HTML.
- Maintain readable contrast.
- Provide visible keyboard focus states.
- Use descriptive accessible names for icon-only controls.
- Ensure links and buttons are distinguishable.
- Respect reduced-motion preferences.
- Do not rely on color alone to communicate health status.

### Trust and transparency

Healthcare is a sensitive domain.

Clearly communicate patient permission, privacy boundaries, and clinician oversight without making unsupported compliance or performance claims.

Do not imply that AI independently diagnoses conditions or prescribes medication.

AI should be positioned as a tool for explaining, summarizing, and identifying information that may need attention. Medical decisions remain under appropriate clinical oversight.

### Responsive design

Design mobile-first and ensure the desktop layout remains sophisticated.

Support:
- Desktop: 1440px and wider.
- Laptop: 1024–1439px.
- Tablet: 768–1023px.
- Mobile: 320–767px.

Prevent horizontal overflow, clipped headings, awkward line breaks, tiny buttons, and crowded cards.

---

## 6. Homepage structure

Build the homepage using the following sequence. Preserve this overall flow, but allow the content and visuals to breathe naturally.

### Section 1 — Minimal navigation

Create a clean, premium header.

Left:
- Inlay Health logo.

Center or right:
- How it works
- For patients
- For doctors
- Privacy

Right:
- Sign in
- Get started

Use a restrained layout with generous horizontal spacing.

The header can remain sticky on scroll, provided it does not consume excessive vertical space or obstruct content.

Navigation links should scroll to their corresponding homepage sections. Do not create unrelated pages.

Use a filled Inlay teal button for the main action and a subtle text link for secondary navigation.

### Section 2 — Hero: One complete picture of your health

Create an impactful, visually distinctive hero with a clear product message.

Suggested headline:

**Your health, all in one place.**

Supporting copy:

Bring your medical records together, understand what is changing, and help your doctor see the bigger picture.

Primary CTA: **Get started**

Secondary CTA: **See how it works**

Keep the text concise.

#### Hero visual

Create a custom product visualization that demonstrates the central Inlay Health concept.

Show a refined, realistic product interface containing:
- A unified health record.
- A few health-result summaries.
- A compact trend visualization.
- A subtle indication that records come from different sources.
- A small, restrained AI-generated health summary.

The interface should feel like a believable healthcare product, not a generic analytics dashboard.

Use a soft white or warm-white background, subtle borders, and restrained teal highlights.

Create depth through composition, layering, and spacing rather than excessive shadows or floating decorations.

Do not use stock photos of doctors, patients, or hospitals in the product imagery.

The product visualization is the hero's main visual asset. Give it enough space to communicate the value proposition immediately.

### Section 3 — The problem: Your health is more than one record

Introduce the fragmentation problem using a concise headline.

Suggested headline:

**Your health story is scattered.**

Supporting copy:

Test results, prescriptions, and hospital records often live in different places.

Show three or four compact visual elements representing:
- Hospital records.
- Lab results.
- Prescriptions.
- Phone health data.

Bring them together visually into one unified health record.

Keep this section visual-first. Use small labeled cards and connecting lines rather than lengthy explanations.

Do not imply that every source connects automatically in every situation. The product brings together available records from supported sources with the required permissions.

### Section 4 — The solution: One connected health record

Suggested headline:

**See the whole picture, not isolated results.**

Demonstrate how Inlay Health combines information into a coherent timeline.

Include a simplified interface showing:
- Health results organized by topic.
- Changes over time.
- Source information.
- Items that may need attention.

Use a clear before-and-after or fragmented-to-connected composition.

Keep the supporting copy to one or two short sentences.

The user should understand that the product organizes existing health information rather than replacing the underlying clinical record systems.

### Section 5 — AI that helps you understand

Use a distinctive product-led section, potentially with a deep-teal background and a light interface panel.

Suggested headline:

**Health information, made easier to understand.**

Supporting copy:

Get clear explanations of your results and see what may need a closer look.

Demonstrate three core capabilities using compact visual cards:

1. **Understand results** — Explain health information in plain language.
2. **Spot changes** — Highlight trends and results that may need attention.
3. **Find care gaps** — Surface missed tests and follow-ups.

Include a small example of the Ask Inlay experience, such as a patient asking a simple question about a health result.

Do not present AI responses as medical diagnoses or prescriptions.

Avoid chat bubbles filling the entire section. The AI interaction should be a supporting demonstration, not the entire product.

### Section 6 — Two perspectives, one health picture

Create a carefully balanced two-column section.

#### For patients

Headline: **Know more about your health.**

Show a simplified patient-facing interface with:
- Health records.
- Trends and results.
- Reminders for missed tests.
- Questions for Ask Inlay.
- Privacy and sharing controls.

CTA: **Explore the patient experience**

#### For doctors

Headline: **See what needs attention.**

Show a simplified doctor-facing interface with:
- A concise daily summary.
- Changes in patient records.
- Medication discrepancies to review.
- Missed tests and follow-ups.
- Health trends over time.

CTA: **Explore the doctor experience**

Use visually related product mockups so both perspectives feel like part of the same platform.

The two interfaces should differ in information hierarchy according to their audiences.

Patient screens should be approachable and easy to scan. Doctor screens may be denser but must remain organized and readable.

Do not turn either interface into a fully functional application.

### Section 7 — A simple, transparent workflow

Suggested headline:

**Connected by permission. Guided by care.**

Present four concise steps:

1. **Join through your clinic** — Receive an invitation.
2. **Set up your account** — Secure your access.
3. **Choose to share** — Give permission before health records are collected.
4. **Understand together** — Review health information with your doctor.

Use a horizontal four-step layout on desktop and a vertical timeline on mobile.

Each step should have a short title, one concise sentence, and a minimal visual marker.

The design should communicate that consent comes before collecting records and that permission can be withdrawn.

### Section 8 — Privacy built into the experience

This section must feel reassuring, clear, and factual.

Suggested headline:

**Your health information stays under your control.**

Show three concise principles:

- **Permission first** — Records are collected only after the patient agrees.
- **Clear access boundaries** — Each clinic sees its own patients, and office staff do not see medical information.
- **Accountability** — Access and changes are recorded so activity can be traced.

Include a small product visual showing privacy or sharing controls.

Use a light background, clear typography, and restrained teal accents.

Do not invent certifications, encryption specifications, security guarantees, or legal compliance claims that are not documented in the supplied product context.

Do not claim that all patient data is completely inaccessible to every third party.

### Section 9 — Relevant product capabilities

Use a compact grid of four to six cards rather than a long list of features.

Prioritize these documented capabilities:

- Unified health records.
- Health trends and result warnings.
- Missed-test reminders.
- Medication comparison.
- Ask Inlay.
- Doctor-reviewed personal health plans.

Each card should contain:
- One simple icon.
- A concise title.
- One short explanatory sentence.

Keep all cards consistent in height, spacing, typography, and visual treatment.

Use subtle interactions on hover. Do not add features outside the documented product context.

Paid capabilities should not be presented as universally available. If a feature is paid-only, clearly identify that distinction where relevant.

### Section 10 — Final CTA

Create a confident, minimal closing section.

Suggested headline:

**A clearer picture of your health starts here.**

Supporting copy:

Bring your records together and make more informed conversations with your doctor possible.

Primary CTA: **Get started**

Secondary link: **For clinics**

Use a clean, light background with a restrained teal accent or a deep-teal panel.

Do not use a generic full-width hospital photograph.

### Section 11 — Footer

Include:
- Inlay Health logo.
- A short brand description.
- Product links.
- Patient and doctor information.
- Privacy.
- Sign in.
- Relevant legal links, if existing project content provides them.

Keep the footer organized into a small number of columns.

Do not invent legal page content or links to nonexistent routes. Use working anchors or clearly identified placeholders when destinations have not been supplied.

---

## 7. Visual components and layout rules

Use a consistent 12-column desktop grid and a simplified mobile grid.

Suggested layout:
- Maximum content width: 1200–1280px.
- Desktop horizontal gutters: 48–72px.
- Tablet gutters: 28–36px.
- Mobile gutters: 20–24px.
- Desktop section spacing: approximately 100–140px.
- Mobile section spacing: approximately 64–88px.
- Card corner radius: generally 16–24px.
- Buttons: approximately 48–52px high.
- Form and navigation controls: comfortable touch targets.

Treat these values as a coherent starting system rather than isolated mandatory dimensions.

### Card design

Use:
- Clean surfaces.
- Subtle borders.
- Restrained shadows only where needed.
- Consistent padding.
- Clear separation between headings and descriptions.

Avoid wrapping every paragraph in a card.

Use cards when they represent meaningful information, product modules, or distinct actions.

### Icons

Use Lucide React icons with consistent stroke width and sizing.

Avoid mixing outline icons, filled icons, emojis, and unrelated illustration styles.

### Product mockups

Product mockups should use believable interface content and realistic hierarchy.

Prefer custom-built React/CSS interface illustrations over unrelated images or generic stock dashboards.

Make sure text inside the mockups remains legible at normal viewing sizes.

Do not fill every section with decorative floating panels.

### Imagery

The supplied references are visual direction only.

Follow the Inlay Health brand requirements:
- No stock photographs of people in the product imagery.
- Use clean interface visuals, subtle geometric elements, and restrained abstract details.
- If a soft 3D object is used, use at most one per screen or major visual composition, with a white background and teal accent.
- Do not generate random AI-style healthcare illustrations.

---

## 8. Animation and interaction

Use GSAP and ScrollTrigger for purposeful motion.

Animation should enhance the experience rather than distract from the information.

Implement:
- A restrained hero entrance animation.
- Gentle staggered reveals for important section content.
- Subtle product-interface transitions.
- A coordinated animation illustrating separate records coming together.
- Small card movement or opacity transitions when entering the viewport.
- Subtle hover states for buttons and interactive cards.
- Smooth scrolling for internal navigation.

Keep animations short and natural, generally around 300–700ms for interface transitions.

Avoid:
- Excessive parallax.
- Large spinning objects.
- Constantly moving elements.
- Aggressive scroll hijacking.
- Long animations that delay access to content.
- Animations that make text difficult to read.

Use `gsap.context()` and proper cleanup in React effects. Avoid duplicate ScrollTrigger instances and memory leaks.

Respect `prefers-reduced-motion` and ensure that all content remains visible if animations are disabled or JavaScript animation fails.

---

## 9. Functional requirements

Implement:
- Responsive navigation.
- Working anchor links.
- Clear hover, focus, active, and disabled states where relevant.
- Functional primary and secondary CTA interactions.
- Responsive mobile navigation.
- Keyboard-accessible interactive elements.
- Proper image sizing and loading behavior.
- Reusable sections and consistent layout components.

If actual authentication or clinic registration is not part of the existing project, do not invent a backend. Make CTAs navigate to an existing destination when available; otherwise, use a clear placeholder destination or lightweight informational interaction.

Do not create fake forms that imply successful registration or submit data to nonexistent services.

Ensure the page works without console errors.

---

## 10. Content rules

Use the attached Inlay Health product context document as the source of truth.

Keep all website copy concise, plain-language, and user-focused.

Prefer one strong sentence over three generic marketing paragraphs.

Avoid vague claims such as:
- "Revolutionizing the future of healthcare."
- "Experience the power of AI."
- "Your journey to better health starts today" repeated throughout the page.
- Unsupported claims about accuracy, outcomes, performance, or clinical superiority.

Do not invent user counts, testimonials, client logos, clinic partnerships, success statistics, medical certifications, or customer quotes.

Do not use generic doctor-booking functionality as the central product proposition. Inlay Health's central value is connected health information, understandable results, proactive awareness, and better-informed collaboration between patients and doctors.

Do not change the product name to Human Optimization Lab or use the old HOL branding as the primary identity.

Do not add a pricing page, blog, appointment marketplace, ecommerce section, or additional product portal unless it already exists and is explicitly part of the requested homepage.

---

## 11. Final quality checklist

Before considering the implementation complete, verify all of the following:

- The result looks like a premium, original healthcare SaaS website, not a generic template.
- The Inlay Health product proposition is immediately understandable.
- The supplied reference images influence the layout and visual sophistication without being copied.
- The design uses the official brand palette and Inter typography.
- Font sizes and spacing remain consistent throughout.
- The page is visually rich without being text-heavy.
- Product interfaces are the primary visual storytelling elements.
- Patient and doctor experiences are clearly differentiated.
- Consent, privacy, and clinical oversight are communicated accurately.
- All key sections are present and follow a logical narrative.
- Animations are smooth, subtle, and accessible.
- Mobile and desktop layouts are both polished.
- All buttons and links behave meaningfully.
- No undocumented features, fabricated statistics, or unsupported medical claims have been added.
- No broken assets, overflow issues, or console errors remain.

**Final direction:** Create a distinctive, minimal, product-led Inlay Health homepage that feels thoughtfully art-directed and ready for a real healthcare technology brand. Prioritize visual clarity, believable product interfaces, concise messaging, strong hierarchy, and consistent UX over decorative effects or excessive content.

Implement the complete homepage directly in the project rather than returning only a design description.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3f785f86-dbf1-4f69-89cb-aae47e54de7c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
