export interface ActionTypings {
  type: string;
  payload: object;
}

export const themeReducer = (
  state = {
    theme: "dark",
  },
  action: ActionTypings
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
