# Nightwatch TypeScript Testing Bug-4384

## 📌 Overview

This project automates UI testing using **Nightwatch.js** with **TypeScript**.  
It includes a **Page Object Model (POM)** for **DuckDuckGo** search.

## 🛠️ Fixes & Improvements

### ✅ TypeScript Bug Fix:
- **Refactored the DuckDuckGo Page Object to use TypeScript.**  
- **Fixed type mismatches in Page Object Model (`duckPage`).**  
- **Updated `DuckPage` interface to extend `EnhancedPageObject`.**  
- **Ensured compatibility with `NightwatchTests` in `home.ts`.**

### **Updated Files**
- `page-objects/DuckPage.ts`
- `tests/home.ts`

## 🚀 Setup Guide

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** `>=16.x`
- **TypeScript** `>=4.x`
- **Nightwatch.js** `>=2.x`
- **Chrome WebDriver**

### **Installation**
```sh
git clone https://github.com/org/project.git
cd project
npm install
