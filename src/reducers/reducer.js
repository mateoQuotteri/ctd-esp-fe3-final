export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DATA":
        return { ...state, data: action.payload };
        case "CHANGE_THEME":
          return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark'}        // case "ADD_FAVS":
        // return { ...state, favs: action.payload };
      default:
        throw new Error();
    }
  };