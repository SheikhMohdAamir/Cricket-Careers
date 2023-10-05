import MyForm from "./Components/MyForm";
import List from "./Components/List";
import { BrowserRouter ,Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/list" element={<List />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
