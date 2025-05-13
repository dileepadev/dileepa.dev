# Changelog

All notable changes to this project are documented in this file.

Changes are organized into the following categories:

- **Added:** New features or functionality introduced to the project.
- **Changed:** Modifications to existing functionality that do not add new features.
- **Fixed:** Bug fixes that resolve issues or correct unintended behavior.
- **Removed:** Features or components that have been removed from the project.

## [Unreleased]

- Changes for the next release are available in development branches.

## [1.2.0] - 2025-05-13

### **Added:**

- Initialized base project using **Next.js 15**.
- Implemented core layout sections: `Navbar`, `Hero`, `About`, `Experience`, `Education`, `Community`, `Connect`, and `Footer`.
- Added API data fetching for dynamic section content.
- Integrated contact form with **email configuration** via Resend.
- Added SEO metadata for improved search visibility.
- Introduced analytics and performance tools:
  - **Vercel Web Analytics**
  - **Vercel Speed Insights**
  - **Microsoft Clarity**
  - **Google Analytics**
- Created [VERSIONING.md](https://github.com/dileepadev/dileepa.dev/VERSIONING.md) to document release practices.
- Updated [COMMIT_MESSAGE_GUIDELINES.md](https://github.com/dileepadev/dileepa.dev/COMMIT_MESSAGE_GUIDELINES.md).

### **Changed:**

- Refactored routing logic to use a **single-page scrollable layout**.
- Updated the **navbar** to support in-page scroll instead of navigation between routes.
- Redesigned **header** and **footer** for improved aesthetics and accessibility.
- Standardized and refined **theme styling** for consistency across components.
- Applied accessibility improvements and layout responsiveness across screen sizes.

### **Fixed:**

- Resolved layout issues related to **padding and margins** in multiple sections.
- Ensured compatibility and readability in both **dark** and **light** modes.

## [1.1.1] - 2024-10-23

- **Fixed:**

  - chore: Upgrade to 1.1.1 - package.json
  - Add Experience Page - Career Break & RSL
  - Add Education Page - Postgraduate Education
  - Add Media Page - Missing event details
  - Add missing achievements
  - Add MLSC - NIBM

## [1.1.0] - 2024-05-01

- **Added:**

  - New font to Inter
  - Add pageHeaderTheme

- **Changed:**
  
  - Update dependencies
    - version [1.0.1 -> 1.1.0]
    - next [13.5.4 -> 14.1.4]
    - react-icons [4.11.0 -> 5.0.1]
    - react-toastify [9.1.3 -> 10.0.5]
    - resend [2.0.0 -> 3.2.0]
    - next-themes [0.2.1 -> 0.3.0]
    - @vercel/analytics [1.1.1 -> 1.2.2]
    - autoprefixer [10 -> 10.0.1]
    - eslint-config-next [13.5.4 -> 14.1.4]
    - tailwindcss [3 -> 3.3.0]
  - Update header and footer
  - Update home page
  - Update experience pag
    - Add Projects section
    - Add Tools & Technologies section
    - Update latest experience data
    - Add new 4 sections
    - Update theme details & ItemCards
    - Update interface & links
  - Update about page
  - Update about cards
  - Add achievements section
  - Add section for LinkedIn recommendations
  - Update education page
    - Add new cards and layout design
  - Update media page
    - Add event highlights
    - Remove banner and log details
  - Update connect page
    - Change section layout format
  - Update documents
    - Update README.md
    - Remove extra inputs from ISSUE_TEMPLATE/feature_request.md

- **Fixed:**

  - Replace unsupported links
  - Experience page missing items
    - Fix WingzDev dates
    - Add missing tools & technologies
    - Fix broken links in communities

## [1.0.1] - 2023-11-24

- **Fixed:**

  - Link cards to a new username

## [1.0.0] - 2023-11-15

- **Added:**

  - NavBar component (`NavBar.tsx`)
  - Body layout
  - Footer component (`Footer.tsx`)
  - ThemeSwitcher component
  - About page (`pages/about.tsx`)
  - Education page (`pages/education.tsx`)
  - Experience page (`pages/experience.tsx`)
  - Media page (`pages/media.tsx`)
  - Connect page (`pages/connect.tsx`)
  - Folder structure
  - Resend email integration (`api/email/route.ts`)
  - Images (`public/`) and Icons (`components/`)
  - Custom theme data at `globals.css`
  - Custom components (e.g., `ItemCards.ts`)
  - Interfaces for types (`interfaces.ts`)
  - Pull request guidelines (`PULL_REQUEST_GUIDELINES.md`)
  - Branch naming guidelines (`BRANCH_NAMING_GUIDELINES.md`)

- **Changed:**

  - Updated Home page (`app/page.tsx`)
  - Formatted layout & structure
  - Updated `README.md`

- **Fixed:**

  - Website accessibility issues

## [0.1.0] - 2023-10-25

- **Added:**

  - Initialized commit from Create Next App
  - Created community standards documents
  - Developed coming soon page
  - Integrated Vercel Web Analytics

- **Changed:**

  - Updated `README.md`

<!-- Unreleased -->
<!-- 1.2.0 -->
<!-- 1.1.1 -->
<!-- 1.1.0 -->
<!-- 1.0.1 -->
<!-- 1.0.0 -->
<!-- 0.1.0 -->

[Unreleased]: https://github.com/dileepadev/dileepa.dev/tree/dev
[1.2.0]: https://github.com/dileepadev/dileepa.dev/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/dileepadev/dileepa.dev/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/dileepadev/dileepa.dev/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/dileepadev/dileepa.dev/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/dileepadev/dileepa.dev/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/dileepadev/dileepa.dev/releases/tag/v0.1.0
