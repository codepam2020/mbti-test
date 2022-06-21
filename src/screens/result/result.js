import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { useSelector } from "react-redux";
import {
  setMBTI,
  setCharacter,
  setCharacterSrc,
} from "./components/set_my_character";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CharacterImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const CharacterImage = styled.img`
  display: flex;
  width: ${({ theme }) => theme.size.result_character_width}%;
`;

const ResultTextTitle = styled.div`
  font-size: ${({ theme }) => theme.size.result_text_title}px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResultText = styled.div`
  font-size: ${({ theme }) => theme.size.result_text}px;
`;

export default function Result() {
  // test result 결과들을 redux-state 에서 받아옴
  const { test_result } = useSelector((state) => {
    return { test_result: state.test_result };
  });

  // set_my_character.js 에서 import한 function
  const myCharacter = setCharacter(test_result);
  const myMBTI = setMBTI(test_result);

  return (
    <View>
      <Header />
      <CharacterImageContainer>
        <CharacterImage src={setCharacterSrc(myCharacter)} />
      </CharacterImageContainer>
      <ResultTextTitle>{myCharacter}</ResultTextTitle>
    </View>
  );
}
