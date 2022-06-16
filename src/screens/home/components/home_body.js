import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150vh;
`;

const TitleContainer = styled.div`
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: black;
`;

export default function HomeBody() {
  return (
    <View>
      <TitleContainer>
        <Title>Body</Title>
      </TitleContainer>
    </View>
  );
}
