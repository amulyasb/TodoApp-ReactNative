# 📝 Todo App

A modern, feature-rich Todo application built with React Native and Expo. This app helps you manage your tasks efficiently with a clean interface and powerful features.

## ✨ Features

- ✅ **Add, Edit & Delete Todos** - Complete CRUD operations
- 🔍 **Search Functionality** - Find todos quickly with real-time search
- 💾 **Local Storage** - Todos persist between app sessions using AsyncStorage
- 🎯 **Task Completion** - Mark todos as done with visual feedback
- 📱 **Cross-Platform** - Works on iOS, Android, and Web
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- ⚡ **Performance Optimized** - Smooth scrolling with FlatList optimization

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Todo
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
   - Press `w` for Web browser
   - Scan QR code with Expo Go app on your phone

## 📱 Usage

### Adding Todos
- Type your todo in the input field
- Press the add button or hit Enter
- Your todo will be saved automatically

### Managing Todos
- **Complete**: Tap the checkbox to mark as done
- **Delete**: Tap the delete icon to remove a todo
- **Search**: Use the search bar to filter todos

### Search
- Type in the search bar to filter todos
- Results update in real-time
- Clear search to see all todos

## 🏗️ Project Structure

```
Todo/
├── app/                    # Main application directory
│   ├── (home)/            # Home screen and components
│   │   ├── components/    # Reusable components
│   │   │   ├── addTodo.tsx
│   │   │   ├── headers.tsx
│   │   │   ├── ListTodos.tsx
│   │   │   └── searchTodo.tsx
│   │   ├── _layout.tsx    # Layout configuration
│   │   └── index.tsx      # Home screen
│   ├── _layout.tsx        # Root layout
│   └── constant.ts        # App constants
├── hooks/                 # Custom React hooks
│   └── todo.ts           # Todo management logic
├── assets/               # Images, fonts, etc.
└── package.json          # Dependencies and scripts
```

## 🛠️ Technologies Used

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **AsyncStorage** - Local data persistence
- **React Hooks** - State management and side effects

## 📦 Key Dependencies

- `@react-native-async-storage/async-storage` - Local storage
- `expo-router` - File-based routing
- `nativewind` - Tailwind CSS for React Native
- `@expo/vector-icons` - Icon library

## 🔧 Customization

### Styling
The app uses Tailwind CSS for styling. You can customize the design by modifying the classes in the component files.

### Adding Features
- New features can be added in the `hooks/todo.ts` file
- UI components can be created in the `app/(home)/components/` directory
- Constants and configurations are in `app/constant.ts`

## 🚀 Deployment

### Building for Production

1. **Configure app.json** with your app details
2. **Build for platforms**:
   ```bash
   # For iOS
   npx expo build:ios
   
   # For Android
   npx expo build:android
   ```

### Publishing to Stores
- Follow Expo's [publishing guide](https://docs.expo.dev/distribution/introduction/)
- Configure app signing and certificates
- Submit to App Store and Google Play Store

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Icons from [@expo/vector-icons](https://expo.github.io/vector-icons/)
- Styling with [Tailwind CSS](https://tailwindcss.com)


---

