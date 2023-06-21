import React from "react";

import logo from "../../assets/Logo.png";
import { Button } from "../../components";
import * as actions from "../../store/actions/auth"
import Item from "../../components/ItemHeader";
import icons from "../../utils/icons";
import { useNavigate, Link } from "react-router-dom";
import { useCallback } from "react";
import { path } from "../../utils/constant";
import { useSelector,useDispatch } from "react-redux";
const { AiOutlineHeart } = icons;
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  const { isLoggedIn } = useSelector(state => state.auth)
  console.log('check loginheader',isLoggedIn)
  return (
    <div>
      <div className="w-screen h-1200 flex items-center justify-between bg-green-400 border border-gray-300">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="w-[70px] h-[70px] object-container"
            />
          </Link>
          
        </div>
        
      </div>
    </div>
  );
}

export default Header;
