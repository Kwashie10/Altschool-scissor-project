import React from "react";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Optimize from "./pages/Optimize";
import Form from "./pages/Form";
import Header from "./pages/Header";
import Views from "./pages/Views";
import Questions from "./pages/Questions";
import Footer from "./pages/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Views />
      <Features />
      <Pricing />
      <Form />
      <Questions />
      <Optimize />
      <Footer />
    </div>
  );
};

export default App;
