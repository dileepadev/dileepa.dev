# 🌐 Dileepa Bandara - Personal Website

Welcome to my personal website project, hosted at [dileepa.dev](https://dileepa.dev/). This website is designed to showcase my portfolio, share information about me, and provide a platform for sharing my thoughts and experiences.

## 📚 Table of Contents

- [🌐 Dileepa Bandara - Personal Website](#-dileepa-bandara---personal-website)
  - [📚 Table of Contents](#-table-of-contents)
  - [📸 Captured Media](#-captured-media)
  - [🌟 Features](#-features)
  - [🛠️ Technologies](#️-technologies)
  - [📌 Getting Started](#-getting-started)
    - [⚡ Prerequisites](#-prerequisites)
    - [⚙️ Installation](#️-installation)
  - [📘 Learn More About Next.js](#-learn-more-about-nextjs)
  - [🚀 Deployment](#-deployment)
  - [🍃 Branches](#-branches)
  - [🕹️ Versioning](#️-versioning)
  - [🖼️ Icons and Images](#️-icons-and-images)
  - [📜 License](#-license)
  - [💬 Contact](#-contact)
  - [💙 Contributing](#-contributing)
  - [❤️ Thanks](#️-thanks)

## 📸 Captured Media

![Screenshot of dileepa.dev](https://gh.dileepa.dev/public-images/projects/dileepa.dev/1.0.0.png)

## 🌟 Features

- **`About`**: Get to know my background, goals, and interests.
- **`Education`**: Discover my academic qualifications and institutions.
- **`Experience`**: Explore my professional work and volunteer experience.
- **`Media`**: Check out my latest articles, videos, and other content.
- **`Connect`**: Connect with me through social media and other communication channels.

## 🛠️ Technologies

This website is built using the following technologies:

- [HTML](https://html.spec.whatwg.org/) - Markup language used to structure and present content on the web.
- [CSS](https://www.w3.org/Style/CSS/) - Stylesheet language used to design the HTML content.
- [JavaScript](https://www.javascript.com/) - Programming language that conforms to the ECMAScript specification.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.
- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - React framework for building static and server-side rendered websites.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapidly building custom designs.
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Resend](https://resend.com/) - Platform to build, test, and deliver transactional emails.

## 📌 Getting Started

### ⚡ Prerequisites

- [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) or [Bun](https://bun.sh/)

### ⚙️ Installation

To get a copy of this project up and running on your local machine, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/dileepadev/dileepa.dev.git
   ```

2. Navigate to the project directory:
3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   # or
   npx next dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. To change the port, use the `-p` flag. For example, `npm run dev -p 4000`.

6. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

7. Create `.env.local` file to save environment variables. This project uses `RESEND_API_KEY` variable for [Resend](https://resend.com/) API.

   This is how the `.env.local` file should look like:

   ```env
   RESEND_API_KEY=YOUR-API-KEY-HERE
   ```

## 📘 Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## 🚀 Deployment

- This website is hosted on [Vercel](https://vercel.com/), a cloud platform for static sites and Serverless Functions.
- Any changes pushed to the `main` branch will be automatically deployed to [dileepa.dev](https://dileepa.dev/).
- Any changes pushed to the `dev` branch will be automatically deployed to [preview.dileepa.dev](https://preview.dileepa.dev/).

## 🍃 Branches

- Branches are an important part of this project. They are used to develop new features, fix bugs, and make changes to the source code. The following branches are used in this project:

  - `main` - The source code for the latest stable and production-ready release of the website.
  - `dev` - New features and bug fixes that are being worked on but not yet ready for production. Only for preview upcoming changes.
  - `feat/*` - Branches used to develop new features.
  - `fix/*` - Branches used to fix bugs.
  - ... and more.

- Check out the [branch naming guidelines](BRANCH_NAMING_GUIDELINES.md) for more information.

## 🕹️ Versioning

- This project uses [Semantic Versioning](https://semver.org/) for versioning.
- Each release is documented in the [CHANGELOG.md](CHANGELOG.md) file.
- Visit the [releases](https://github.com/dileepadev/dileepa.dev/releases) page to see the all releases.
- Visit the [tags](https://github.com/dileepadev/dileepa.dev/tags) page to see the all tags.
- Each release is in the format of `v*.*.*`, where `*` is a number and `v` is a prefix for the tag.
- Version numbers are incremented according to the `X.Y.Z` format.
  - `MAJOR`: X is incremented for incompatible API changes.
  - `MINOR`: Y is incremented for new functionality in a backwards-compatible manner.
  - `PATCH`: Z is incremented for backwards-compatible bug fixes.

**Example:**

| Version | Description                                   |
| ------- | --------------------------------------------- |
| 0.1.0   | Early stage of development                    |
| 1.0.0   | Initial release                               |
| 1.1.0   | New contact form added (backwards-compatible) |
| 1.1.1   | Fixed typo on homepage (backwards-compatible) |
| 1.2.0   | Added new blog section (backwards-compatible) |
| 2.0.0   | Rebrand with new theme (incompatible)         |

## 🖼️ Icons and Images

Icons used in this website are from [React Icons](https://react-icons.github.io/react-icons) and [Heroicons](https://heroicons.com/).

## 📜 License

This project is licensed under the MIT License.  
MIT © [Dileepa Bandara](https://dileepa.dev)  
See the license file here: [LICENSE](LICENSE)

## 💬 Contact

If you have any questions or comments about this project, please feel free to reach out to me at [contact@dileepa.dev](mailto:contact@dileepa.dev).

## 💙 Contributing

If you find any issues with this project or would like to suggest changes, feel free to submit a pull request or open an issue. Please make sure to follow guidelines at [CONTRIBUTING.md](CONTRIBUTING.md) before your contribution.

## ❤️ Thanks

Thanks to everyone who supported.
