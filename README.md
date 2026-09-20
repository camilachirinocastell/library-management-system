# Library Management System

A Node.js backend application built with pure TCP architecture and the MVC pattern, showcasing core programming fundamentals, custom data structures, and sorting algorithms.

> **Note:** This project connects via native TCP sockets (`net` module) rather than HTTP/REST protocols. It is designed to run locally or within dedicated network environments.

## Overview

This project handles book inventory and loan management without external web frameworks. It features a custom MVC layer, native file system persistence, and custom algorithmic implementations (Bubble Sort, Linear Search) for data manipulation and statistical report generation.

## Tech stack

- Node.js (`net` module for TCP server)
- JavaScript (ES6+)
- MVC Architecture
- Node.js File System (`fs`) for JSON persistence

## Features

- **TCP Server Architecture:** Custom socket handling using Node.js core modules.
- **MVC Design Pattern:** Clear separation between data models, request handling, and business logic.
- **Custom Algorithms:** Sequential search and Bubble Sort algorithms implemented for inventory sorting and filtering.
- **Data Normalization:** Advanced array operations (`.map()`, `.filter()`, `.reduce()`) to generate reports.

## Video Demo & Explanation

🎥 **Watch the project walkthrough (English):** []

## Local installation

```bash
git clone [https://github.com/camilachirinocastell/library-management-system.git](https://github.com/camilachirinocastell/library-management-system.git)
cd library-management-system
npm install
Run
To start the TCP server locally:

Bash
node server.js
To interact with the server via TCP socket (in a separate terminal):

Bash
netcat localhost 3000   # or telnet localhost 3000
Project structure
├── src/
│   ├── controllers/   # TCP request processing logic
│   ├── models/        # Data structures and algorithm utilities
│   └── views/         # Response formatting for socket output
├── data/              # Persistence layer (JSON files)
└── server.js          # TCP server entry point

Author
Camila Chirino Castell —
💻 Portfolio: camilachirinocastell-portfolio.netlify.app
🐙 GitHub: github.com/camilachirinocastell
👤 LinkedIn: www.linkedin.com/in/camila-chirino-castell