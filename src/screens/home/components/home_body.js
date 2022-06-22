import React from "react";
import styled from "styled-components";
import PageButton from "../../components/button";
import { useDispatch } from "react-redux";
import { PageNumAction } from "../../../reducers/page_num_action";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 10px;
`;

const Text = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.size.normal_text}px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`;

const Image = styled.img`
  width: 96%;
`;

export default function HomeBody() {
  const dispatch = useDispatch();

  return (
    <View>
      <TextContainer>
        <Text>테스트는 약 5분 정도 소요됩니다.</Text>
        <Text>정직하게 답변해주세요.</Text>
      </TextContainer>
      <ImageContainer>
        <Image src="https://firebasestorage.googleapis.com/v0/b/doraemon-mbti-test.appspot.com/o/doraemon.png?alt=media&token=987bbfd5-4ab1-4dbb-baf7-d5509a86f1af" />
      </ImageContainer>
      <PageButton
        title="테스트 시작"
        onClick={() => {
          dispatch(PageNumAction(1));
        }}
      />
    </View>
  );
}
