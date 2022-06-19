import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { PageNumAction } from "../../reducers/page_num_action";
import { TestResultResetAction } from "../../reducers/test_result_action";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 10px lightgrey;
`;

const Title = styled.a`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.doraemon};
  text-decoration: none;
`;

export default function Header() {
  const dispatch = useDispatch();
  return (
    <View>
      <Title
        href="#"
        onClick={() => {
          dispatch(PageNumAction(0));
          dispatch(TestResultResetAction());
        }}
      >
        도라에몽 성격 테스트
      </Title>
    </View>
  );
}
