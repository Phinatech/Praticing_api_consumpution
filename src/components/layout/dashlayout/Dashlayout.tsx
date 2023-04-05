import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../blocks";
import styled from "styled-components";

const Dashlayout = () => {
  return (
    <Container>
      <div style={{ width: "270px", height: "100vh" }}>
        <Sidebar />
      </div>
      <div style={{ flex: "1" }}>
        <Outlet />
      </div>
    </Container>
  );
};

export default Dashlayout;
const Container = styled.div`
  display: flex;
`;
