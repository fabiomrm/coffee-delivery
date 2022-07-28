import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}