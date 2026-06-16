"use client";

import { createContext, useState, useContext } from "react";

const context = createContext();

export function MyProvider({ children }) {
  const [OpenBag, SetOpenBag] = useState(false);

  return (
    <context.Provider value={{ OpenBag, SetOpenBag }}>
      {children}
    </context.Provider>
  );
}

export function useMyContext() {
  return useContext(context);
}
