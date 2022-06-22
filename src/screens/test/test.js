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
  // page number를 redux-state 에서 받아옴
  const { page_num } = useSelector((state) => {
    return { page_num: state.page_num.page_num };
  });

  const dispatch = useDispatch();

  // questions 13개를 list형태로 저장
  const question = [
    "Q1) 누구나 부러워하는 물건을 갖게되었다.",
    "Q2) 친구랑 피자를 먹다 한조각이 남았다.",
    "Q3) 과제가 2주 남았다.",
    "Q4) 친구들이랑 노래방을 갔다.",
    "Q5) 운동 vs 독서",
    "Q6) 좋아하는 음식은?",
    "Q7) 문앞에 정체 모를 상자가 있다.",
    "Q8) 시험 중 마지막 한문제를 모르겠다",
    "Q9) 점심시간 학교 밖에서 점심을 먹으려한다",
    "Q10) 지금 내 방은?",
    "Q11) 친구와 밥을 먹은 후 내가 결제했다",
    "Q12) 애인이 우울해서 머리를 잘랐다고 연락왔다",
    "Q13) 인터넷에 찾아 요리를 하고있다.",
    "Q14) 주말에 친구가 갑자기 놀자고 부른다",
  ];

  // button1 list
  const answer1 = [
    "바로 인스타에 자랑한다",
    "친구에게 양보한다",
    "귀찮은데 다움주에 한다",
    "내가 먼저 선곡 한다",
    "운동",
    "역시 한국인은 밥",
    "열어본다",
    "포기하고 나간다",
    "자주 가던 맛있는 식당을 간다",
    "잘 정리되어있다",
    "카카오 정산하기할게~",
    "사진 보내봐",
    "레시피에 나온대로 정확히 맞춘다",
    "귀찮으니 다음에...",
  ];

  // button2 list
  const answer2 = [
    "친한 친구한테만 자랑한다",
    "내가 먹는다",
    "지금 미리 한다",
    "다른 친구가 부른 후 선곡한다",
    "독서",
    "그래도 빵",
    "열어보지 않는다",
    "시험이 끝날때까지 고민한다",
    "새로운 식당을 도전해본다",
    "난장판이다",
    "다음엔 너가 사~",
    "무슨 일 있어?",
    "내 감을 믿고 넣는다",
    "바로 나간다",
  ];

  // when button1 clicked, action
  function clickAnswerButton1() {
    // page number 변화를 redux-state에 dispatch함
    dispatch(PageNumAction(page_num + 1));

    // test result 결과들을 redux-state에 dispatch함
    dispatch(TestResultAction(1));
  }

  // when button2 clicked, action
  function clickAnswerButton2() {
    // page number 변화를 redux-state에 dispatch함
    dispatch(PageNumAction(page_num + 1));

    // test result 결과들을 redux-state에 dispatch함
    dispatch(TestResultAction(0));
  }

  return (
    <View>
      <Header />
      <TestProgress value={((page_num - 1) / 14) * 100} />
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
