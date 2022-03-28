import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import CountryDetails from "./containers/CountryDetails";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="lg:px-16 px-6 md:py-20 py-8 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country/:code" element={<CountryDetails />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
