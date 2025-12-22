

# 🎵 Spotify Clone – DOM Based Web Project

A front-end **Spotify UI clone** built using **HTML, CSS, and Vanilla JavaScript**, focusing on **DOM manipulation**, **event handling**, and **basic audio controls**.

---

## 📁 Project Structure

```
05_Project Spotify/
│
├── IndexX.html              # Main HTML file (Spotify UI)
├── script.js                # Core JavaScript logic
├── style.css                # Main styling
├── utility.css              # Reusable utility classes
├── favicon.ico
├── install_fonts.bat        # Font installer (Windows)
├── Qustions.txt             # Learning / notes file
│
└── Images/
    ├── logo.svg
    ├── play.svg / pause.svg
    ├── nextsong.svg / prevsong.svg
    ├── volume.svg / mute.svg
    ├── hamburger.svg / close.svg
    ├── cover.jpg
    └── other UI icons
```

---

## 🧠 Project Objective

* Learn **DOM manipulation**
* Work with **HTML Audio API**
* Implement **Spotify-like UI**
* Understand **event-driven JavaScript**
* Practice **CSS layouts and utilities**

---

## 🚀 Features

✅ Play / Pause songs
✅ Next / Previous song controls
✅ Song list rendering
✅ Volume control + mute
✅ Responsive sidebar (hamburger menu)
✅ Dynamic DOM updates
✅ Spotify-inspired UI

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **DOM API**
* **Audio API**

---

## 📄 HTML Overview (`IndexX.html`)

Main responsibilities:

* Layout of sidebar, navbar, and player
* Song list container
* Audio control buttons
* Icons and images

Key sections:

* Sidebar (Home / Search / Library)
* Main playlist section
* Bottom music player bar

---

## ⚙️ JavaScript Overview (`script.js`)

### Core Responsibilities

* Handling song play/pause
* Updating UI based on song state
* Managing song list
* Volume & mute logic
* Sidebar open/close

---

### Important Concepts Used

#### 🎧 Audio Object

```js
let currentSong = new Audio();
```

Used to:

* Load songs
* Play / pause
* Control volume
* Track time updates

---

#### 🧩 Play / Pause Logic

* Toggle play & pause icons
* Sync UI with audio state

---

#### 🧩 Next / Previous Song

* Uses index-based navigation
* Updates audio source dynamically

---

#### 🧩 Volume Control

* Slider input controls volume
* Mute button toggles sound

---

#### 🧩 Responsive Sidebar

* Hamburger icon opens sidebar
* Close icon hides sidebar

---

## 🧩 CSS Overview

### `style.css`

* Layout styling
* Spotify-like dark theme
* Player bar design
* Sidebar animation

### `utility.css`

Reusable classes:

* Flex helpers
* Spacing utilities
* Alignment helpers

Example:

```css
.flex {
  display: flex;
  align-items: center;
}
```

---

## 🧩 How to Run the Project

1. Clone the repo

```bash
git clone https://github.com/hrshshukla/WebDev.git
```

2. Open the project folder

```bash
cd WebDev/05_Project\ Spotify
```

3. Open `IndexX.html` in browser
   (No server required)

---

## 🧩 Learning Outcomes

* Strong understanding of **DOM events**
* Real-world UI interaction logic
* Audio handling in JavaScript
* Better CSS structuring
* Frontend project confidence 

---

## 🧩 Possible Improvements (Future Scope)

* Mobile optimizations
* Convert to React later 😉

---

## 👤 Author

**Harsh Shukla**
Web Development Practice Project
GitHub: [https://github.com/hrshshukla](https://github.com/hrshshukla)
