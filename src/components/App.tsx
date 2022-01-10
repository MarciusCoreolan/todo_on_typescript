import React from "react";
import TodoPage from "../pages/TodoPage";
import AuthPage from "../pages/AuthPage";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./header";

function App() {
  const user = useTypeSelector((state) => state.user.user);

  return (
    <>
      <Header />
      <Routes>
        {user ? (
          <Route path={`/*`} element={<TodoPage />} />
        ) : (
          <>
            <Route path={"/"} element={<AuthPage />} />
            <Route path={"*"} element={<Navigate to={"/"} replace />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
