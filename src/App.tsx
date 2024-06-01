import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AuthTabs from "./components/AuthTabs";
import './index.css'; // Import the CSS file for the dynamic background

const App: React.FC = () => {
  useEffect(() => {
      document.title = "Auth Template"; // Set the page title dynamically
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthTabs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
