import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import Test from "./routes/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/test"} element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
