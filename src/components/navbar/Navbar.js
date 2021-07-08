import React from "react";
import { Wrapper, Links, Ul, Li } from "./StNavbar";
import { SidebarData } from "../sideBar/SideBar";

const navbar = () => {
  return (
    <Wrapper>
      <Ul>
        {SidebarData.map((item, index) => {
          return (
            <Li key={index}>
              <Links to={item.path}>
                <span>{item.title}</span>
              </Links>
            </Li>
          );
        })}
      </Ul>
    </Wrapper>
  );
};

export default navbar;
