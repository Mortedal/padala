import React from 'react'
import "../styles/Profile.css";
import { AddressData } from "./AddressData";

function Sidebar() {
  return (
    <div className="Sidebar">
        <ul className="SidebarList">
            {SidebarData.map((val, key) => {
                return (
                    <li 
                     key={key}
                     className="row"
                     onClick={()=> {
                        window.location.pathname = val.link;
                     }}
                    >
                     {" "}
                    </li>
                   );
                })}
        </ul>
    </div>
  );
}

export default Sidebar;