import './App.css';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import BookDetails from './Components/BookDetails';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

export const ThemeContext = createContext();

function App() {
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YwZmMwYjI5ODZmNDAwMTVkYTNhOGYiLCJpYXQiOjE3NDM4NDY0MTEsImV4cCI6MTc0NTA1NjAxMX0.HUaMKWt00ivGPFFa5zF5ssdw8WxBiKK2YM7r3xxfXNM";

  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <div className={theme === 'dark' ? 'bg-dark text-white min-vh-100' : 'bg-light text-dark min-vh-100'}>
          <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path="/" element={<><Welcome /><AllTheBooks searchQuery={searchQuery} token={token} /></>} />
            <Route path="/details/:asin" element={<BookDetails token={token} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MyFooter />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;