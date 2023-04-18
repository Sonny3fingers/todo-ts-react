import {
  createContext,
  useReducer,
  ChangeEvent,
  ReactElement,
  useCallback,
  useContext,
} from "react";

type StateType = {
  count: number;
  text: string;
};

export const initState: StateType = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.INPUT_TEXT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  }, []);
  const decrement = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  }, []);
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.INPUT_TEXT, payload: e.target.value });
  }, []);

  return { state, increment, decrement, changeHandler };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

type UseCounterTextHookType = {
  text: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    changeHandler,
  } = useContext(CounterContext);
  return { text, changeHandler };
};
