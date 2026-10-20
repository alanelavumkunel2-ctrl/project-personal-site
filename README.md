# Alan John — Personal Portfolio Website

A clean, modern, light-neutral personal portfolio website designed for **Alan John** — a Grade 10 student from Kasaragod, Kerala, technology enthusiast, and AI-assisted project builder.

Built with semantic HTML5, modern CSS with custom design tokens, and modular vanilla JavaScript with **zero external dependencies**.

---

## 🌟 What's New & Upgraded

1. **Updated Personal Brand & Identity:**
   - **Headline:** `Student | AI-Assisted Web Creator | Electronics & Robotics Enthusiast`
   - **Introduction:** Honest presentation as a Grade 10 student learning technology through hands-on builds, exploring AI web creation, electronics, and robotics without false claims of expert programming.
   - **Location:** Kasaragod, Kerala, India.

2. **Replaced Programming Skills with "What I Can Do":**
   - Replaced language proficiency percentage cards with 5 honest, practical capability cards:
     - **CARD 1:** AI-Assisted Website Creation (planning and refining sites with tools like Antigravity)
     - **CARD 2:** Website Customisation (communicating design ideas and layout adjustments)
     - **CARD 3:** Project Presentation (organizing descriptions, photos, and documentation)
     - **CARD 4:** Technology Exploration (hands-on electronics, robotics, sensors, microcontrollers)
     - **CARD 5:** AI-Assisted Problem Solving (investigating technical challenges and concepts)
   - Clear note: *"I'm still learning programming fundamentals and developing my technical skills through practice."*

3. **Separate "Technologies & Interests" Section:**
   - Visual cards detailing domains explored in projects:
     - AI-Assisted Web Development
     - Arduino
     - ESP32
     - LoRa Communication
     - Sensors & IoT
     - Robotics & Motor Control
     - Renewable Energy & Solar Projects

4. **Personalized Education Card:**
   - **Status:** Currently Studying
   - **Title:** Grade 10 Student
   - **Location:** Kasaragod, Kerala, India
   - Clear description and checklist of academic and maker milestones.
   - Dedicated photo area (`assets/images/education-photo.svg`).

5. **Full-Page Technical Case Studies for Every Project:**
   - Clicking any project opens a **dedicated full-page view** (not a small modal pop-up!).
   - Clean URLs supported:
     - `/projects/smart-flood-detection`
     - `/projects/bluetooth-controlled-car`
     - `/projects/community-solar-model`
   - Normal vertical scrolling, sticky sub-navigation menu, and browser Back/Forward button support.
   - Comprehensive sections:
     - **Hero Header:** Large title, status, category, subtitle, tags, action buttons.
     - **Project Overview:** Problem statement, purpose, objectives, intended benefits, status, and conceptual disclaimer.
     - **How It Works:** Conceptual visual workflow diagram (`assets/images/flood-flow-diagram.svg`) with step-by-step breakdown.
     - **Components Table:** Component names, quantities, models/specs, purpose, and technical notes.
     - **Components & Resources:** Component name, supplier, product link, datasheet link, price, notes.
     - **Source Code Viewers:** Monospaced code view with line numbers, Copy Code button with feedback, and `.ino` file download button.
       - *Smart Flood Detection:* Dedicated sections for **LoRa Transmitter Code** and **LoRa Receiver Code** with hardware pinouts.
       - *Arduino Car:* Dedicated section for **Arduino Robot Controller Code** and pinouts.
     - **Circuit & Wiring Diagrams Gallery:** Schematic cards with zoom/lightbox support.
     - **Project Photographs Gallery:** Responsive grid with captions, dates, and full-resolution lightbox viewer.
     - **Demonstration Video:** Responsive 16:9 video container supporting local MP4, embeds, or clean "Demonstration video coming soon" placeholder.
     - **Testing & Observations:** Test procedures, sensor calibration readings table, RF communication notes, and troubleshooting.
     - **Challenges & Learning:** Problems investigated, solutions attempted, and lessons learned.
     - **Review & Future Improvements:** What worked, needs improvement, and future suggestions.
     - **Downloads & Resources:** Downloadable `.ino` sketches, schematics, and BOM files.
     - **Bottom Navigation:** Previous Project, Next Project, and Back to All Projects buttons.

---

## 📁 Project Structure & Where to Put Files

```
site!!/
├── index.html                 # Semantic HTML structure, OpenGraph, views container
├── styles.css                 # Design tokens, typography, responsive layouts, case study styles
├── server.ps1                 # PowerShell local server with clean SPA project route support
├── start-server.bat           # One-click Windows launcher
├── README.md                  # Complete project documentation
├── js/
│   ├── data.js                # Centralized project & profile data (EDIT THIS TO PERSONALIZE!)
│   └── app.js                 # Routing engine, dynamic rendering, lightbox, code copy, and theme
└── assets/
    ├── favicon.svg            # "AJ" monogram brand favicon
    └── images/
        ├── hero-illustration.svg        # Tech workbench hero vector graphic
        ├── about-avatar.svg             # Maker profile illustration
        ├── education-photo.svg          # Student/maker learning graphic
        ├── flood-flow-diagram.svg       # Smart flood detection system flow diagram
        ├── circuit-placeholder.svg      # Circuit diagram schematic graphic
        ├── project-flood-detection.svg  # Flood monitoring project cover
        ├── project-arduino-car.svg      # Bluetooth car project cover
        └── project-solar-power.svg      # Community solar model cover
```

---

## ✏️ How to Edit & Personalize Your Website

All your content is located in **[`js/data.js`](file:///c:/Users/user/Documents/site!!/js/data.js)**. You do not need to touch HTML or CSS to update your information!

### 1. Editing Profile, Bio & Social Links
Open `js/data.js`:
- Locate `personal`: edit your name, headline, intro, or contact note.
- Locate `socialLinks`: update `url` with your real GitHub, LinkedIn, or email links.

### 2. Updating Education
Open `js/data.js` and locate `education`:
- Edit `title`, `location`, `description`, and `highlights`.
- To use your own photo, place your image (e.g. `my-photo.jpg`) in `assets/images/` and change `image: "assets/images/my-photo.jpg"`.

### 3. Updating Project Information, Code & Schematics
Open `js/data.js` and locate `projects`:
- **Past your real transmitter code:** Find `transmitterCode.codePlaceholder` and paste your Arduino C++ sketch inside the backticks (` `).
- **Paste your receiver code:** Find `receiverCode.codePlaceholder` and paste your sketch.
- **Add your photographs:** In `photographs`, add your image file path (e.g. `assets/images/my-flood-model.jpg`), title, and caption.
- **Add your demonstration video:** In `video`, set `isPlaceholder: false` and provide `videoUrl: "assets/videos/demo.mp4"` or an embed URL.
- **Add component purchase links:** In `purchaseResources`, add product URLs and datasheet URLs.

### 4. Adding a New Project
In `js/data.js`, simply copy an existing project object in the `projects` array, customize its `id`, `slug`, `title`, and sections. It will automatically show up in the portfolio grid and get its own full-page route at `/projects/your-slug`!

---

## 🚀 How to Run the Website

### Option 1: One-Click Windows Launcher (Recommended)
Double-click [`start-server.bat`](file:///c:/Users/user/Documents/site!!/start-server.bat) in the project folder. Your browser will open:
```
http://localhost:3000/
```

### Option 2: PowerShell
Run:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1 -Port 3000
```

### Option 3: Direct File Open
Double-click `index.html`. All features (including full-page project navigation via `#project/slug`, lightbox, code copy, and theme toggle) work out of the box with zero setup.
