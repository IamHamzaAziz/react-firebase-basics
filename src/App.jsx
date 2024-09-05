import Auth from "./components/Auth"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import UpdateNote from "./pages/UpdateNote"
import UploadFile from "./pages/UploadFile"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Auth />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/update/:id" element={<UpdateNote />} />
        <Route path="/upload" element={<UploadFile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
