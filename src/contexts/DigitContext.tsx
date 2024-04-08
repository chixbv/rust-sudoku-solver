import { createContext, useMemo, useState } from "react";

import { buildSquareArray } from "../utils/ArrayFunctions";

interface ContextValuesType {
  currentDigits: Array<Array<string>>;
  selectedCells: Array<HTMLElement>;
}

type DigitContextType = [
  ContextValuesType,
  (context: ContextValuesType) => void,
];

const defaultContext: ContextValuesType = {
  currentDigits: buildSquareArray(9, ""),
  selectedCells: [],
};

const DigitContext = createContext<DigitContextType>([
  defaultContext,
  () => {},
]);

const DigitProvider = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<DigitContextType[0]>(defaultContext);

  const DigitContextValue = useMemo<DigitContextType>(
    () => [context, setContext],
    [context, setContext],
  );

  return (
    <DigitContext.Provider value={DigitContextValue}>
      {children}
    </DigitContext.Provider>
  );
};

export { DigitContext, DigitProvider };
