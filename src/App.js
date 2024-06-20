import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./pages/Layout";
import VerhicleBrand from "./pages/VerhicleBrand";
import Home from "./pages/Home";
import VerhicleModel from "./pages/VerhicleModel";
import Center from "./pages/Center";
import Account from "./pages/Account";
import Login from "./pages/Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
          <Route path="verhicleBrand" element={<VerhicleBrand />} />
          <Route path="verhicleModel" element={<VerhicleModel />} />
          <Route path="account" element={<Account />} />
          <Route path="center" element={<Center />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);