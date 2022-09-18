import { Route, Routes } from "react-router-dom";
import UseReducerHook from './pages/UseReducerHook'
import MainPage from "./pages/MainPage";
import UseMemoHook from './pages/UseMemoHook'
import UseState from "./pages/UseState";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/use-reducer-hook" element={<UseReducerHook />} />
      <Route path="/use-memo-hook" element={<UseMemoHook />} />
      <Route path="/use-state-hook" element={<UseState />} />
    </Routes>
  );
}

export default App;
