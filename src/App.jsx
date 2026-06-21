import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout    from "./components/Layout";
import Home      from "./pages/Home";
import About     from "./pages/About";
import UseCases  from "./pages/UseCases";
import Tools     from "./pages/Tools";
import Writing   from "./pages/Writing";
import Research  from "./pages/Research";
import Contact   from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index           element={<Home />}     />
          <Route path="about"     element={<About />}    />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="tools"     element={<Tools />}    />
          <Route path="writing"   element={<Writing />}  />
          <Route path="research"  element={<Research />} />
          <Route path="contact"   element={<Contact />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
