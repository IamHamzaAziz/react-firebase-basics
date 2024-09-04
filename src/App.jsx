import Auth from "./components/Auth"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Auth />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create-note" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
