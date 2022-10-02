import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { GetRepo } from "./compomentes/GetRepo";
import { GetCategory } from "./compomentes/GetCategory";
import { GetLeter } from "./compomentes/GetLeter";
import { GetSerie } from "./compomentes/GetSerie";
import { GetVariantSerie } from "./compomentes/GetVariantSerie";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>
            The <strong>Anime</strong> DataBase
          </h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<GetRepo />} />
          <Route path="/:category" element={<GetCategory />} />
          <Route path="/:category/:leter" element={<GetLeter />} />
          <Route path="/:category/:leter/:serie" element={<GetSerie />} />
          <Route path="/:category/:leter/:serie/:variant" element={<GetVariantSerie />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
