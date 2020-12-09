import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
`;

const SidebarLabe = styled.span``;

export const SubMenu = () => {
  return (
    <>
      <Sidebar to={DataTransferItem.path}>
        <div>
          {DataTransferItem.icon}
          <SidebarLabel>{DataTransferItem.title}</SidebarLabel>
        </div>
      </Sidebar>
    </>
  );
};
