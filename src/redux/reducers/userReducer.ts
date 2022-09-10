export interface ActionTypings {
  type: string;
  payload: object;
}

export const userReduer = (state = {}, action: ActionTypings): any => {
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
