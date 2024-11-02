import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import CharactersList from './components/CharactersList'

function Home() {
  return <h1>Home</h1>
}
function Gallery() {
  return <h1>Gallery</h1>
}
function Contact() {
  return <h1>Contact</h1>
}

function NotFound() {
  return <h1>404 - not found</h1>
}

function Navigation() {

  const setActive = ({ isActive }) => { 
    return isActive ? "active" : "";
  }
  return (
    <nav>
      <NavLink className={setActive} to="/">Home </NavLink>
      <NavLink className={setActive} to="/gallery">Gallery </NavLink>
      <NavLink className={setActive} to="/contact">Contact </NavLink>
      <NavLink className={setActive} to="/characters">Characters </NavLink>
    </nav>
  )
 }

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
