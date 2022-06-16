import React from "react";
import styled from "styled-components";
import Home from "./home/home";

const View = styled.div`
  display: flex;
  flex-direction: colun;
  justify-content: center;
  algin-items: center;
`;

export default function Main() {
  return (
    <View>
      <Home />
    </View>
  );
}
