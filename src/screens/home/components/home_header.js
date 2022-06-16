import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0px 2px 10px lightgrey;
`;

const TitleContainer = styled.div`
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: red;
`;

export default function HomeHeader() {
  return (
    <View>
      <TitleContainer>
        <Title>Header</Title>
      </TitleContainer>
    </View>
  );
}
