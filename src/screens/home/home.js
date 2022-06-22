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
  // Header와 Body를 받아옴
  // main 에 서 관리

  // const test = window.navigator.userAgent;
  // console.log(test);
  return (
    <View>
      <Header />
      <HomeBody />
    </View>
  );
}
