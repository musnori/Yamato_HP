import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Access from "./pages/Access";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import ContactThanks from "./pages/ContactThanks";
import Collection from "./pages/Collection"; 
import Stock from "./pages/Stock";
import Sustainability from "./pages/Sustainability";
import Privacy from "./pages/Privacy";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="access" element={<Access />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/thanks" element={<ContactThanks />} />
          <Route path="collection" element={<Collection />} />
          <Route path="stock" element={<Stock />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
