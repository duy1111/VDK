import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/Public";
import { path } from "./utils/constant";
import Remote from "./containers/Public/Remote";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>

          <Route path={path.REMOTE} element={<Remote/>} />

        </Route>

      </Routes>
    </div>
  );
}

export default App;
