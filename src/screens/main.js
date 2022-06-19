import React from "react";
import styled from "styled-components";
import Home from "./home/home";
import Test from "./test/test";
import Result from "./result/result";
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
  const { page_num, test_result } = useSelector((state) => {
    return {
      page_num: state.page_num.page_num,
      test_result: state.test_result,
    };
  });

  console.log(`test result: ${test_result}`);

  if (page_num === 0) {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Home />
        </View>
      </ThemeProvider>
    );
  }
  if (page_num === 11) {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Result />
        </View>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Test />
        </View>
      </ThemeProvider>
    );
  }
}
