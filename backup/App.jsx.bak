// 1. Navigate をインポートに追加してください
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Access from "./pages/Access";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import ContactThanks from "./pages/ContactThanks";
import Collection from "./pages/Collection";
import PresidentBlog from "./pages/PresidentBlog";
import Association from "./pages/Association";
import Stock from "./pages/Stock";
import Sustainability from "./pages/Sustainability";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import Hyogo from "./pages/Hyogo";
// Blog は削除済みならインポート不要

// 薬品の基礎知識ページ
import KnowledgeIndex from "./pages/knowledge/KnowledgeIndex";
import SodiumHypochloriteStorage from "./pages/knowledge/SodiumHypochloriteStorage";
import SodiumHypochloriteDecomposition from "./pages/knowledge/SodiumHypochloriteDecomposition";
import CalciumChlorideHygroscopic from "./pages/knowledge/CalciumChlorideHygroscopic";
import SmallLotManufacturing from "./pages/knowledge/SmallLotManufacturing";
import HydrogenPeroxideHandling from "./pages/knowledge/HydrogenPeroxideHandling";
import CitricAcidUsage from "./pages/knowledge/CitricAcidUsage";
import EthanolProperties from "./pages/knowledge/EthanolProperties";
import HydrochloricAcidSafety from "./pages/knowledge/HydrochloricAcidSafety";
import PacCoagulant from "./pages/knowledge/PacCoagulant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="access" element={<Access />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/thanks" element={<ContactThanks />} />
          <Route path="collection" element={<Collection />} />
          <Route path="president-blog" element={<PresidentBlog />} />
          <Route path="association" element={<Association />} />
          <Route path="stock" element={<Stock />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="hyogo" element={<Hyogo />} />

          {/* 薬品の基礎知識カテゴリ */}
          <Route path="knowledge" element={<KnowledgeIndex />} />
          <Route path="knowledge/sodium-hypochlorite-storage" element={<SodiumHypochloriteStorage />} />
          <Route path="knowledge/sodium-hypochlorite-decomposition" element={<SodiumHypochloriteDecomposition />} />
          <Route path="knowledge/calcium-chloride-hygroscopic" element={<CalciumChlorideHygroscopic />} />
          <Route path="knowledge/small-lot-manufacturing" element={<SmallLotManufacturing />} />
          <Route path="knowledge/hydrogen-peroxide-handling" element={<HydrogenPeroxideHandling />} />
          <Route path="knowledge/citric-acid-usage" element={<CitricAcidUsage />} />
          <Route path="knowledge/ethanol-properties" element={<EthanolProperties />} />
          <Route path="knowledge/hydrochloric-acid-safety" element={<HydrochloricAcidSafety />} />
          <Route path="knowledge/pac-coagulant" element={<PacCoagulant />} />

          {/* ▼▼▼ ここに追加！古いURL (.html) 対策 ▼▼▼ */}
          {/* これを書くと、Google検索から来た人が正しいページに転送されます */}
          <Route path="index.html" element={<Navigate to="/" replace />} />
          <Route path="company.html" element={<Navigate to="/company" replace />} />
          <Route path="products.html" element={<Navigate to="/products" replace />} />
          <Route path="access.html" element={<Navigate to="/access" replace />} />
          <Route path="contact.html" element={<Navigate to="/contact" replace />} />
          
          {/* どのページにも当てはまらないURLはトップへ戻す（念の為） */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;