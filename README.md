# GitHub Search - DevFinder

A modern React application for searching GitHub users and viewing their profiles. Built with TypeScript, Redux Saga, and Ant Design.

## 🚀 Live Demo

**[View the live demo here](https://hurgotdev.github.io/github-search/)**

## ✨ Features

- **GitHub User Search**: Search for GitHub users by username
- **User Profiles**: View detailed user profiles with repositories and information
- **Responsive Design**: Mobile-friendly interface built with Ant Design
- **Real-time Search**: Instant search results with loading states
- **Modern UI**: Clean and intuitive user interface

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit + Redux Saga
- **UI Library**: Ant Design
- **Styling**: Styled Components
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/hurgotdev/github-search.git
cd github-search
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 🏗️ Project Structure

```
src/
├── modules/
│   ├── search/          # Search functionality
│   └── profile/         # User profile views
├── redux/               # State management
│   ├── actions/         # Redux actions
│   ├── reducers/        # Redux reducers
│   ├── sagas/           # Redux sagas
│   └── selectors/       # Redux selectors
├── shared/              # Shared components and utilities
│   ├── components/      # Reusable components
│   ├── services/        # API services
│   └── styles/          # Global styles
└── App.tsx              # Main application component
```

## 🔧 Configuration

The application uses the GitHub API for fetching user data. No API key is required for basic user search functionality.

## 📱 Usage

1. **Search Users**: Enter a GitHub username in the search bar
2. **View Results**: Browse through the search results
3. **View Profile**: Click on a user to view their detailed profile
4. **Navigate**: Use the browser navigation to go back to search

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**HurgotDev** - [GitHub Profile](https://github.com/hurgotdev)

---

Made with ❤️ using React and TypeScript
