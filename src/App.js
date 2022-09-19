import { Route, Routes } from "react-router-dom";
import UseReducerHook from './pages/UseReducerHook'
import MainPage from "./pages/MainPage";
import UseMemoHook from './pages/UseMemoHook'
import UseStateHook from "./pages/UseStateHook";
import UseCallbackHook from "./pages/UseCallbackHook";
import UseContextHook from "./pages/UseContextHook";
import UseEffectHook from "./pages/UseEffectHook";
import UseImperativeHandleHook from "./pages/UseImperativeHandleHook";
import UseLayoutEffectHook from "./pages/UseLayoutEffectHook";
import UseRefHook from "./pages/UseRefHook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/use-reducer-hook" element={<UseReducerHook />} />
      <Route path="/use-memo-hook" element={<UseMemoHook />} />
      <Route path="/use-state-hook" element={<UseStateHook />} />
      <Route path="/use-callback-hook" element={<UseCallbackHook />} />
      <Route path="/use-context-hook" element={<UseContextHook />} />
      <Route path="/use-effect-hook" element={<UseEffectHook />} />
      <Route path="/use-imperative-handle-hook" element={<UseImperativeHandleHook />} />
      <Route path="/use-layout-effect-hook" element={<UseLayoutEffectHook />} />
      <Route path="/use-ref-hook" element={<UseRefHook />} />
    </Routes>
  );
}

export default App;
