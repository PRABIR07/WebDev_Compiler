import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import { ThemeProvider } from "@/components/theme-provider";

import Home from "./Pages/Home";
import Compiler from "./Pages/Compiler";
import Error from "./Pages/Error";
import { Toaster } from "sonner";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Toaster position="bottom-right" theme="dark" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/compiler/:urlId?" element={<Compiler />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
