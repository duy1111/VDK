import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./containers/Public";
import { path } from "./utils/constant";
import Remote from "./containers/Public/Remote";
import { Toaster } from 'react-hot-toast';
import { useDispatch,useSelector } from 'react-redux';
import * as actions from './store/actions';
import { useEffect } from "react";
function App() {
  let dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth)

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrentUser());
    },1000)
  })
  if(!isLoggedIn){
    return(
      <div className="h-screen w-screen bg-primary">
        <Login/>
      </div>
    )
  }
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.REMOTE} element={<Remote/>} />       
        </Route>

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
