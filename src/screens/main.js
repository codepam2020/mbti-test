import React from "react";
import styled from "styled-components";
import Home from "./home/home";
import Test1 from "./test/test1";
import { ThemeProvider } from "styled-components";
import { theme } from "../data/theme";
import { useSelector } from "react-redux";

const View = styled.div`
  display: flex;
  flex-direction: colun;
  justify-content: center;
  algin-items: center;
`;

export default function Main() {
  const { page_num } = useSelector((state) => {
    return { page_num: state.page_num.page_num };
  });

  console.log(page_num);

  if (page_num === 1) {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Test1 />
        </View>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Home />
        </View>
      </ThemeProvider>
    );
  }
}
