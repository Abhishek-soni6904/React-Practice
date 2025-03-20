# 🚀 Components Collection

This repository contains various reusable UI components and mini-projects built using React and web technologies.

---

## 📌 Project Descriptions

1. **🔹 Accordion** - A collapsible and expandable UI component for content organization. It has a feature that allows users to open one or multiple sections at once. Implemented in `Accordion.jsx`, with content in `data.js` and styles in `accordion.css`.
2. **🎨 Color Code Generator** - Generates both RGB and HEX codes, allowing users to toggle between modes via a button click. The selected color is applied as the background. Implemented in `Color.jsx`, styled with `color.css`.
3. **⚙️ Custom Hooks** - A set of useful React hooks:
   - `useFetch.jsx` - Fetches data from APIs.
   - `useWindowResize.jsx` - Tracks real-time window width and height.
   - `useClickOutside.jsx` - Closes modals/dropdowns when clicking outside.
   - `useLocalStorage.jsx` - Stores theme preferences for the **Light/Dark Mode** switcher.
   - Example usage in `UsingCustomHooks.jsx`.
4. **🖼️ Custom Modal** - A customizable modal dialog component (`Modal.jsx`, `modal.css`).
5. **📑 Custom Tabs** - A tab-based navigation component (`Tabs.jsx`, `TabsParent.jsx`, `tabs.css`).
6. **🐙 GitHub Profile Finder** - Fetches and displays GitHub user profiles using the GitHub API (`GithubFinder.jsx`, `GithubFinder.css`).
7. **🌙 Light/Dark Mode** - Uses `useLocalStorage.jsx` for persisting theme preferences (`LightDarkMode.jsx`, `theme.css`).
8. **📥 Load More Data** - Implements infinite scrolling (`LoadMoreData.jsx`, `loadMoreData.css`).
9. **📂 Nested Menu** - Multi-level navigation menu (`menuData.js`, `MenuItem.jsx`, `MenuList.jsx`, `NestedMenu.css`).
10. **🔳 QR Code Generator** - Generates QR codes using the `react-qrcode` library (`QrCodeGenerator.jsx`).
11. **📊 Scroll Indicator** - Displays a progress bar based on scroll position (`ScrollIndicator.jsx`, `scroll.css`).
12. **🔎 Search Auto-Complete** - An input field with auto-complete suggestions (`SearchAutoComplete.jsx`).
13. **⭐ Star Rating** - Dynamic star glow effect based on `mousemove`, `click`, and `mouseleave` events (`StarRating.jsx`, `starRating.css`).
14. **❌⭕ Tic-Tac-Toe** - Optimized using React's `useMemo` for performance (`TicTacToe.jsx`, `ticTacToe.css`).

---

## 🛠️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Abhishek-soni6904/React-Projects.git
cd React-Projects
```

### 2️⃣ Install Dependencies
If you have `package.json`:
```bash
npm install
```
If you want to install dependencies from `package-lock.json` (recommended for consistency):
```bash
npm ci
```

### 3️⃣ Run the Project
Navigate to any component folder and start the development server:
```bash
cd component-folder-name  # Replace with actual component folder name
npm start
```
This will launch the project on `http://localhost:3000/`.

---

Happy Coding! 🚀

