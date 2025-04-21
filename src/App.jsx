import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

const HomePage = lazy( () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/HomePage")), 2000)
    )
);



const AboutPage = lazy( () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/AboutPage")), 2000)
    )
);
const ContactPage = lazy( () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/ContactPage")), 2000)
    )
);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader page='home' />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader page = 'about'/>}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader page = 'contact' />}>
              <ContactPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
