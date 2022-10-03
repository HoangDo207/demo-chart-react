import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StockOverviewPage } from "./pages/stockOverviewPage";
import { StockDetailPage } from "./pages/stockDetailPage";
import { AppProvider } from "./context/watchListContext";
import "./App.css";

function App() {
  return (
    <main>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<StockOverviewPage />}></Route>
            <Route path="/detail/:symbol" element={<StockDetailPage />}></Route>
          </Routes>
        </Router>
      </AppProvider>
    </main>
  );
}

export default App;
