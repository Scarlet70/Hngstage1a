# 🚀 HNG Stage 1A – Advanced Todo Card

## Overview

This project is an enhanced version of the Stage 0 Todo Card, upgraded into a more interactive, stateful, and dynamic component using HTML, CSS, and vanilla JavaScript.

It introduces real-world frontend concepts such as:

- State management
- UI synchronization
- Editable content
- Dynamic time handling
- Accessibility improvements

---

## Features

- Editable todo content (title, description, priority, due date)
- Status control with synchronized checkbox and dropdown
- Dynamic time tracking (minutes, hours, days, overdue)
- Expand / collapse functionality for long descriptions
- Visual priority indicators (Low, Medium, High)
- Overdue highlighting
- Responsive layout across devices
- Improved accessibility (ARIA attributes, labels, keyboard navigation)

---

## 🔄 What Changed from Stage 0

### 1. State Management Introduced

- Implemented a central `todo` object to manage all data
- UI now updates based on state instead of direct DOM manipulation

### 2. Edit Mode Added

- Users can now modify:
    - Title
    - Description
    - Priority
    - Due date

- Save updates the UI
- Cancel restores previous values

### 3. Status Control Upgrade

- Added dropdown for status selection
- Synchronized:
    - Checkbox
    - Status display
    - Status control

- The Logic I used ensures consistency across all the controls

### 4. Expand / Collapse Feature

- Long descriptions are truncated by default
- Users can toggle full visibility
- Accessible using `aria-expanded` and `aria-controls`

### 5. Time Logic Enhancement

- Displays:
    - “Due in X days/hours/minutes”
    - “Overdue by X hours”

- Updates automatically every 30 seconds
- Stops updating when task is marked as completed

### 6. Priority Indicator Improvements

- Visual styling changes based on priority level:
    - Low
    - Medium
    - High

---

## Challenges & Difficulties Encountered

### 1. Date Formatting & Conversion

- Handling `<input type="date">` required converting between:
    - `Date` object → formatted string (`YYYY-MM-DD`)
    - String → `Date` object

---

### 2. State Consistency Issues

- Initially mixed direct DOM updates with state updates
- Led to UI inconsistencies
- It was resolved by using a **single source of truth (`todo` object)**

---

### 3. Synchronizing Status Logic

- Keeping checkbox, dropdown, and UI status aligned was tricky
- Required careful logic to ensure:
    - Changing one feature updates all others

---

### 4. Dynamic Time Calculation

- Calculating accurate time differences (minutes, hours, days) required:
    - Proper date math
    - Handling edge cases like overdue tasks

- Ensuring updates stop when status = "Done"

---

### 5. Expand / Collapse Accessibility

- Implementing `aria-expanded` and `aria-controls` correctly
- Ensuring toggle behavior is both functional and accessible

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Live Demo

hngstage1a-pro.vercel.app

---

## GitHub Repository

(https://github.com/Scarlet70/Hngstage1a)

---

## How to Run Locally

1. Clone the repository
2. Navigate into the project folder
3. Open `index.html` in your browser

---

## Author

**Cheta Dev**
Frontend Developer
