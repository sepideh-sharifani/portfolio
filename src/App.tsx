import { Route, Routes } from "react-router-dom";
import Landing from "@/components/landingPage";
import Projects from "./components/Projects/Projects";
import PageNotFound from "./components/PageNotFound";
import { LanguageProvider } from "./container/Language";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
