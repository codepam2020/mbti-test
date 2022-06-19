import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import TestProgress from "../components/test_progress";
import { useSelector, useDispatch } from "react-redux";
import AnswerButton from "./components/answer_button";
import { PageNumAction } from "../../reducers/page_num_action";
import { TestResultAction } from "../../reducers/test_result_action";

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

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Test() {
  const { page_num } = useSelector((state) => {
    return { page_num: state.page_num.page_num };
  });
  const dispatch = useDispatch();

  const question = [
    "Q1) Question 1",
    "Q2) Question 2",
    "Q3) Question 3",
    "Q4) Question 4",
    "Q5) Question 5",
    "Q6) Question 6",
    "Q7) Question 7",
    "Q8) Question 8",
    "Q9) Question 9",
    "Q10) Question 10",
  ];

  const answer1 = [
    "Answer1-1",
    "Answer2-1",
    "Answer3-1",
    "Answer4-1",
    "Answer5-1",
    "Answer6-1",
    "Answer7-1",
    "Answer8-1",
    "Answer9-1",
    "Answer10-1",
  ];
  const answer2 = [
    "Answer1-2",
    "Answer2-2",
    "Answer3-2",
    "Answer4-2",
    "Answer5-2",
    "Answer6-2",
    "Answer7-2",
    "Answer8-2",
    "Answer9-2",
    "Answer10-2",
  ];

  function clickAnswerButton1() {
    dispatch(PageNumAction(page_num + 1));
    dispatch(TestResultAction(1));
  }

  function clickAnswerButton2() {
    dispatch(PageNumAction(page_num + 1));
    dispatch(TestResultAction(2));
  }

  return (
    <View>
      <Header />
      <TestProgress value={(page_num - 1) * 10} />
      <QuestionContainer>
        <Question>{question[page_num - 1]}</Question>
      </QuestionContainer>
      <AnswerContainer>
        <AnswerButton
          onClick={clickAnswerButton1}
          title={answer1[page_num - 1]}
        />
        <AnswerButton
          onClick={clickAnswerButton2}
          title={answer2[page_num - 1]}
        />
      </AnswerContainer>
    </View>
  );
}
