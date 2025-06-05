import { createContext, useEffect, useReducer } from "react";

import Reducer from "./reducer";
import { globalUseContextStateAttributes, initialStateAttributes, layoutAttributes } from "../utilities/typedec";

const intialState: initialStateAttributes = {
  user: null,
  users: [],
  isToastState: { state: false, text: "" },
};

export const GlobalUseContext = createContext<globalUseContextStateAttributes>({
  state: intialState,
  dispatch: () => {},
});

export const GlobalUseContextProvider = ({ children }: layoutAttributes) => {
  const [state, dispatch] = useReducer(Reducer, { ...intialState });

  return (
    <GlobalUseContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalUseContext.Provider>
  );
};
