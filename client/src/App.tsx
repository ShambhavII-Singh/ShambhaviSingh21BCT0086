import { ThemeProvider } from './components/theme-provider';
import { MainPage } from './containers/main-page';


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MainPage />
    </ThemeProvider>
  )
}

export default App
