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
    "Q1) 누구나 부러워하는 물건을 갖게되었다.",
    "Q2) 친구랑 피자를 먹다 한조각이 남았다.",
    "Q3) 과제가 2주 남았다.",
    "Q4) 친구들이랑 노래방을 갔다.",
    "Q5) 운동 vs 독서",
    "Q6) 좋아하는 음식은?",
    "Q7) 문앞에 정체 모를 상자가 있다.",
    "Q8) 시험 중 마지막 한문제를 모르겠다",
    "Q9) 혼자 있을때",
    "Q10) Question 10",
  ];

  const answer1 = [
    "바로 인스타에 자랑한다",
    "친구에게 양보한다",
    "귀찮은데 다움주에 한다",
    "내가 먼저 선곡 한다",
    "운동",
    "밥",
    "열어본다",
    "포기하고 나간다",
    "Answer9-1",
    "Answer10-1",
  ];
  const answer2 = [
    "친한 친구한테만 자랑한다",
    "내가 먹는다",
    "지금 미리 한다",
    "다른 친구가 부른 후 선곡한다",
    "독서",
    "빵",
    "열어보지 않는다",
    "시험이 끝날때까지 고민한다",
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
