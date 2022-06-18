import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import TestProgress from "../components/test_progress";
import { useSelector } from "react-redux";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-items: center;
  width: 100%;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: start;
  margin: 20px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.size.question_text}px;
  font-weight: 750;
`;

export default function Test1() {
  const { page_num } = useSelector((state) => {
    return { page_num: state.page_num.page_num };
  });
  return (
    <View>
      <Header />
      <TestProgress value={10.5} />
      <QuestionContainer>
        <Question>{"Q1) 안녕하세요"}</Question>
      </QuestionContainer>
    </View>
  );
}
