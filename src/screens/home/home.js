import React from "react";
import styled from "styled-components";
import Header from "../components/header";
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
      <Header />
      <HomeBody />
    </View>
  );
}
