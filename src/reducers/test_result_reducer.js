function TestResultReducer(state = [], action) {
  switch (action.type) {
    case "TESTRESULT":
      return [...state, action.test_result];
    case "TESTRESULTRESET":
      return [];
    default:
      return state;
  }
}

export { TestResultReducer };
