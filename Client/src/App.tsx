import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import { ThemeProvider } from "@/components/theme-provider";

import Home from "./Pages/Home";
import Compiler from "./Pages/Compiler";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
