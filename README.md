# Badminton Court Reservation System - Admin View

## Overview

This website serves as the **Admin View** for a **Badminton Court Reservation System** mobile app. The system enables business owners or administrators to monitor and manage court reservations, view court availability, and oversee user memberships in real-time. The admin interface provides crucial insights into court usage and helps ensure smooth operation of badminton court rentals.

## Features

### 1. **Dashboard Overview**
   - Get an at-a-glance view of court availability, ongoing reservations, and membership statistics.
   - Real-time updates on court usage, reservation status, and upcoming bookings.

### 2. **Manage Courts**
   - View the availability of courts in real-time.

### 3. **Membership Management**
   - View and manage user memberships.
   - Track membership count, and membership-based discounts on court rentals.

## Technology Stack

- **Frontend**: NextJS, TailwindCSS
- **Backend**: Node.js, Express
- **Database**:
  - **Local Database (SQLite)**: To store/verify admin credentials, user data, and reservations.
  - **Remote Database (Firebase)**: To track court availability and suggest courts for users based on reservation history.
  
## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js v14.x or later
- npm (Node Package Manager)
- SQLite
- Firebase SDK

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MrRyushi/MOBDEV-Courtly-Web-Admin).git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd courtly
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the app:**
   ```bash
   npm run dev
   ```

## Usage
- Open the admin interface in your browser:
  ```bash
  http://localhost:3000
  ```
- Login as an Admin: Use your credentials to access the dashboard.
- You can also use the hosted version on vercel: `https://courtly-admin.vercel.app`
  
