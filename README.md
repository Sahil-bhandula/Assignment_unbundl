# Unbundl Frontend Developer Assessment

## Project Overview

This project is a React implementation of the provided Whistle Figma design. The goal was to recreate the UI as closely as possible while demonstrating React fundamentals, responsive design, dynamic data rendering, loading states, error handling, and user interactions.

---

## Tech Stack

* React (Functional Components)
* React Hooks (useState, useEffect)
* CSS
* Vite

---

## Setup Instructions

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd project-folder
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

---

## Data Source

The provided public APIs did not map naturally to the dental treatment content shown in the Figma design. As permitted in the assessment instructions, local JSON files were used as mock data sources.

Data files used:

* `resultsData.js`
* `whyWhistleData.js`

Data loading is simulated asynchronously using `useEffect` to demonstrate a realistic fetch lifecycle.

---

## Features Implemented

### Figma Recreation

Implemented multiple sections from the provided design, including:

* Hero Section
* Lead Capture Form
* Clinic Locator Section
* Pricing Section
* Results Showcase
* Why Whistle Section
* FAQ Section

### Dynamic Data Handling

* useState for state management
* useEffect for data loading lifecycle
* Loading skeleton states
* Error handling and fallback messages
* Dynamic rendering using mapped data

### User Interactions

Implemented the following interactions:

* Filter toggle for treatment results
* Tab switch between "Results" and "Why Whistle" content views
* FAQ accordion with expand/collapse functionality

### Responsive Design

The layout is responsive across desktop, tablet, and mobile screen sizes using custom CSS and media queries.

---

## Approach

I first recreated the core sections from the Figma design and structured them into reusable React components. Since the provided APIs did not fit the dental-treatment content, I used local JSON files and simulated asynchronous loading while implementing loading and error states. Additional interactions such as filtering, tab switching, and an accordion were added to demonstrate state management and user experience considerations.
