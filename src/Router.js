import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import KilamForm from "./components/Form/KilamForm";
import Test from "./components/Test";
import Dashboard from "./components/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <SharedLayout>
        <Routes>
          <Route path="/rfc-form" element={<KilamForm />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
        </Routes>
      </SharedLayout>
    </BrowserRouter>
  );
};

export default Router;
