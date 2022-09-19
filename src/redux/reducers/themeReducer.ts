interface Themeaction {
  payload: object;
  type: string;
}

export const themeReducer = (
  state = {
    theme: "dark",
  },
  action: Themeaction
): any => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export interface Theme {
  theme: string;
}
