# CampusConnect (Expo + React Native)

Setup notes (done):
- Created with: npx create-expo-app CampusConnect --template blank
- Installed: @react-navigation/native, @react-navigation/native-stack, react-native-screens, react-native-safe-area-context, axios
- Wired Stack Navigation in App.js and added four screens

Run
- npm install
- npm start
- Open on Android emulator (a), Web (w), or scan QR in Expo Go

Screenshot
- On HomeScreen, take screenshot (Android: Power+Vol Down; iOS: Side+Vol Up)

Features
- HomeScreen: custom UI with logo, welcome message, navigation buttons
- ServicesScreen: FlatList of services with icons, title, description
- ServiceDetailScreen: details for selected service
- AnnouncementsScreen: axios fetch from https://jsonplaceholder.typicode.com/posts?_limit=5