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
  // 페이지 번호와 테스트 결과 redux-state에서 가져옴
  const { page_num } = useSelector((state) => {
    return {
      page_num: state.page_num.page_num,
    };
  });

  // page number == 0 일때 home page 보여줌
  if (page_num === 0) {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Home />
        </View>
      </ThemeProvider>
    );
  }
  // page number == 14 일때 result page 보여줌
  if (page_num === 14) {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Result />
        </View>
      </ThemeProvider>
    );
  }
  // page number == 1 ~ 13 일때 test page 보여줌
  else {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Test />
        </View>
      </ThemeProvider>
    );
  }
}
