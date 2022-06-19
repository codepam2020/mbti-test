export const TestResultAction = (test_result) => ({
  type: "TESTRESULT",
  test_result: test_result,
});

export const TestResultResetAction = () => ({
  type: "TESTRESULTRESET",
});
