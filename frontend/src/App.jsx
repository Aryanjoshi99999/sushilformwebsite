import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Keeps the intro banner active for 4 seconds before transition
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 antialiased selection:bg-amber-200">
      {showBanner ? <Banner /> : <RegistrationForm />}
    </div>
  );
}

export default App;
