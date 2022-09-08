export interface Action {
  type: string;
  payload: object;
}

export const userReduer = (state = {}, action: Action): any => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
