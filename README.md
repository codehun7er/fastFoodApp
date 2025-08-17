# 🍔 FastFood - React Native Food Delivery App

<div align="center">
  <img src="./assets/images/logo.png" alt="FastFood Logo" width="120" height="120">
  
  [![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
  [![Expo](https://img.shields.io/badge/Expo-53.0.20-black.svg)](https://expo.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
</div>

## 🌟 Overview

**FastFood** is a modern, feature-rich food delivery mobile application built with React Native and
Expo. Experience seamless food ordering with a beautiful interface, real-time cart management, and
personalized user experiences.

## ✨ Key Features

### 🔐 **Authentication System**

- Secure user registration and login
- Powered by Appwrite backend services
- Protected routes and user sessions

### 🍕 **Rich Food Menu**

- **6 Food Categories**: Burgers, Pizzas, Burritos, Sandwiches, Wraps, and Bowls
- **14+ Menu Items** with detailed descriptions
- High-quality food images and nutritional information
- Real-time ratings and calorie tracking

### 🛒 **Smart Shopping Cart**

- Add/remove items with quantity controls
- **Custom Food Modifications**:
  - Toppings: Extra Cheese, Jalapeños, Bacon, Avocado, etc.
  - Sides: Fries, Chicken Nuggets, Mozzarella Sticks, etc.
  - Beverages: Coke, Iced Tea, and more
- Real-time price calculations
- Persistent cart state with Zustand

### 🔍 **Advanced Search**

- Fast food item search with debounced input
- Category-based filtering
- Smart search suggestions

### 🎨 **Beautiful UI/UX**

- Modern design with smooth animations
- Custom components with consistent styling
- Responsive layout for all screen sizes
- Haptic feedback integration

## 🚀 Tech Stack

### **Frontend**

- **React Native** (0.79.5) - Cross-platform mobile development
- **Expo** (53.0.20) - Development platform and tools
- **TypeScript** (5.8.3) - Type-safe JavaScript
- **Expo Router** (5.1.4) - File-based navigation

### **Styling & UI**

- **NativeWind** (4.1.23) - Tailwind CSS for React Native
- **Tailwind CSS** (3.4.17) - Utility-first CSS framework
- **React Native Reanimated** (3.17.4) - Smooth animations
- **Expo Blur** - Beautiful blur effects

### **State Management**

- **Zustand** (5.0.7) - Lightweight state management
- Separate stores for authentication and cart management

### **Backend & Services**

- **Appwrite** - Backend-as-a-Service
- **React Native Appwrite** (0.11.0) - Database and authentication

### **Development Tools**

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting with Tailwind plugin
- **TypeScript** - Static type checking

## 📱 App Structure

```
fastFood/
├── app/                    # Main application screens
│   ├── (auth)/            # Authentication flow
│   │   ├── login.tsx      # User login screen
│   │   └── signup.tsx     # User registration screen
│   └── (root)/            # Main app flow
│       ├── index.tsx      # Home screen with offers
│       ├── cart.tsx       # Shopping cart management
│       └── search.tsx     # Food search interface
├── components/            # Reusable UI components
│   ├── CartButton.tsx     # Cart access button
│   ├── CartItem.tsx       # Individual cart item
│   ├── CustomButton.tsx   # Styled button component
│   ├── CustomHeader.tsx   # Navigation header
│   ├── CustomInput.tsx    # Form input component
│   ├── Filter.tsx         # Category filter component
│   ├── MenuCard.tsx       # Food item display card
│   └── SearchBar.tsx      # Search input component
├── store/                 # State management
│   ├── auth.store.ts      # Authentication state
│   └── cart.store.ts      # Shopping cart state
├── lib/                   # Utilities and configurations
│   ├── appwrite.ts        # Appwrite configuration
│   ├── data.ts           # Menu and category data
│   └── useAppwrite.ts    # Custom Appwrite hooks
└── assets/               # Images, icons, and fonts
    ├── fonts/            # Custom Quicksand font family
    ├── icons/            # UI icons (bag, search, star, etc.)
    └── images/           # Food images and graphics
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (16+ recommended)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (Mac) or Android Emulator

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fastFood
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app for physical device

### Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run on web browser
npm run lint       # Run ESLint code analysis
```

## 🎯 Core Functionality

### **Menu Categories**

- **Burgers**: Classic Cheeseburger, BBQ Bacon Burger, Double Patty Burger
- **Pizzas**: Pepperoni Pizza, Classic Margherita Pizza
- **Burritos**: Bean Burrito, Paneer Burrito
- **Sandwiches**: Grilled Veggie Sandwich, Spicy Chicken Sandwich, Chicken Club Sandwich
- **Wraps**: Chicken Caesar Wrap, Paneer Tikka Wrap
- **Bowls**: Mexican Burrito Bowl, Protein Power Bowl

### **Customization Options**

- **Toppings**: Extra Cheese, Jalapeños, Onions, Mushrooms, Bacon, Avocado
- **Sides**: Fries, Chicken Nuggets, Mozzarella Sticks, Garlic Bread
- **Beverages**: Coke, Iced Tea, and more
- **Desserts**: Choco Lava Cake

### **User Experience Features**

- Smooth page transitions with Expo Router
- Real-time cart updates
- Haptic feedback on interactions
- Optimized images with Expo Image
- Safe area handling for all devices

## 🔧 Configuration

### **Expo Configuration** (`app.json`)

- Cross-platform support (iOS, Android, Web)
- Custom splash screen and app icons
- Edge-to-edge display on Android
- Tablet support for iOS

### **TypeScript Configuration**

- Strict type checking enabled
- Custom type definitions for menu items, cart, and user data
- Intellisense support for better development experience

## 🎨 Design System

### **Color Palette**

- Primary colors for branding
- Semantic colors for status and actions
- Consistent color usage across components

### **Typography**

- **Quicksand Font Family**: Light, Regular, Medium, SemiBold, Bold
- Consistent text sizing and hierarchy
- Optimized for readability

### **Components**

- Modular and reusable component architecture
- Consistent styling with Tailwind CSS
- Accessibility-first design approach

## 🚦 Getting Started Development

1. **Understand the file structure** - Familiarize yourself with Expo Router's file-based navigation
2. **Check the stores** - Review Zustand stores for state management patterns
3. **Explore components** - Look at the reusable component library
4. **Review data structure** - Understand the menu and user data models
5. **Test on multiple platforms** - Ensure consistent experience across iOS and Android

## 📈 Performance Optimizations

- **Lazy loading** of screens with Expo Router
- **Optimized images** with Expo Image
- **Debounced search** to reduce API calls
- **Efficient state management** with Zustand
- **Native animations** with React Native Reanimated
