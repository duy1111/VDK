import React,{useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';
import Item from "../../components/ItemHeader";
import { apiGetCategories } from '../../services/category';
import { formatVietnameseToString } from '../../utils/constant';

let arrCate = [
 
  {
    "code":"dieukhien",
    "value":"Điều khiển",
    "active":false,

  },
  
]
const Navigation = () => {
  const [categories, setCategories] = useState(arrCate)
  
  let handleClickNav =(code) =>{
    const updatedMenuItems = categories.map((menu) => {
      if (menu.code === code) {
        return { ...menu, active: true };
      } else {
        return { ...menu, active: false };
      }
    });
    console.log('check update item',updatedMenuItems)
    setCategories(updatedMenuItems); 
  }
  

    return (
        <div className="w-screen h-[57px] border-b-2 shadow-md flex items-center bg-[#A0522D] justify-center">
            <div className="h-max w-[1200px] flex justify-between font-semibold text-xl text-white ">
                {categories?.length > 0 &&
                    categories.map((item) => {
                        return (
                            <div
                              onClick={() => handleClickNav(item.code)}
                            >
                              <Item
                                  key={item.code}
                                  className="h-[50px] w-[200px] flex items-center justify-center "
                                  text={item.value}
                                  link={formatVietnameseToString(item.value)}
                                  isActive={item.active}
                                  
                              >
                                  
                              </Item>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Navigation;
