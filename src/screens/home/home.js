import React from "react";
import styled from "styled-components";
import HomeHeader from "./components/home_header";
import HomeBody from "./components/home_body";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-items: center;
  width: 100%;
`;

export default function Home() {
  return (
    <View>
      <HomeHeader />
      <HomeBody />
    </View>
  );
}
