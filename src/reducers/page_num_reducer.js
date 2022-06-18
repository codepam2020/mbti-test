function PageNum(state = initialState, action) {
  switch (action.type) {
    case "PAGENUM":
      return {
        page_num: action.page_num,
      };
    default:
      return state;
  }
}

const initialState = {
  page_num: 0,
};

export { PageNum };
