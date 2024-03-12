import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { BlogPage } from "./Pages/BlogPage/BlogPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { GalleryPage } from "./Pages/GalleryPage/GalleryPage";
import { Home } from "./Pages/Home/Home";
import { MenuPage } from "./Pages/MenuPage/MenuPage";
import { Reservation } from "./Pages/Reservation/Reservation";
import { BlogDetails } from "./Pages/BlogDetails/BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/article" element={<BlogDetails />} />
        </Routes>
        {/* <BackToTop/> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
