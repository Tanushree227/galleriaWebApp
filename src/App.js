import React from "react";
import { Route, Routes } from "react-router-dom";
import AllImages from "./pages/AllImages";
import NewImagePage from "./pages/NewImages";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return(
    <Layout>
    <Routes>
      <Route path="/" exact element = {<AllImages />} />
      <Route path="/new-image" element= {<NewImagePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
    </Layout>
    );
}

export default App;
