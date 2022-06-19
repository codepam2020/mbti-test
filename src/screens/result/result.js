import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { useSelector } from "react-redux";

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function Result() {
  const { test_result } = useSelector((state) => {
    return { test_result: state.test_result };
  });
  return (
    <View>
      <Header />
      <p>{test_result}</p>
    </View>
  );
}
