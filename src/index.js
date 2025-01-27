import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout";
import Task from "./Components/Task";
import Email from "./Components/email";
import Chat from "./Components/chat";
import Contact from "./Components/contact";
import Deal from "./Components/deal";
import Setting from "./Components/setting";
import Dashboard from "./Components/Dashboard";
import AddUser from "./Components/AddUser";
import Form from "./Components/Form";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Deal" element={<Deal />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
    {/* <AddUser/> */}
    {/* <Form/> */}
  </React.StrictMode>
);
