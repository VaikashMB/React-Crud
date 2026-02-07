# React CRUD User Management App

## Overview

This is a React-based CRUD (Create, Read, Update, Delete) web application for managing user data. The app is built with React + TypeScript and uses a configuration-driven form architecture to allow easy extensibility.

## Tech Stack

* React (Vite)
* TypeScript
* Material UI (MUI)
* React Hook Form
* Axios
* MockAPI.io (online mock backend)

---

## Setup Instructions

### 1. Clone the repository

git clone [https://github.com/VaikashMB/React-Crud.git](https://github.com/VaikashMB/React-Crud.git)

cd React-Crud

### 2. Install dependencies

npm install

### 3. Run the development server

npm run dev

The app will run at:

[http://localhost:5173](http://localhost:5173)

---

## Mock API Setup

This project uses MockAPI.io as the backend service.

The API endpoint is configured in:

src/api/userApi.ts

If needed, you can replace the API URL with your own MockAPI project endpoint.

---

## How to Add New Fields (Extensibility)

The form is designed to be extensible.

To add a new field:

1. Update the User type in:

   src/types/user.ts

2. Add the field in the form schema or UserForm component.

Example:

address: string;

Then add a corresponding input field in UserForm.

Because the app uses a structured and modular architecture, new fields can be added with minimal code changes.

---

## Features

* Create, Read, Update, Delete users
* Form validation
* Search and filtering
* Toast notifications
* Delete confirmation dialog
* Clean and responsive UI
* TypeScript-based architecture
* Modular and extensible code structure

---

## Design Decisions & Assumptions

* Used TypeScript for type safety and maintainability
* Used MockAPI.io to simulate a backend API
* Structured the app into modular components (Form, List, API layer)
* Focused on extensibility and clean architecture
* Used Material UI for consistent UI design

---

## Deployment

The application is deployed using Vercel.

Live application:

[PASTE YOUR VERCEL LINK HERE]

---

## Author

Vaikash
