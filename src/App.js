import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Enter from "./routes/Enter";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Result from "./routes/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Enter />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/test"} element={<Test />} />
        <Route path={"/result"} element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
