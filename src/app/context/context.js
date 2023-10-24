'use client';

import { createContext, useState } from 'react';

export const timeContext = createContext(null);

export default function ContextProvider({ children }) {
  const [time, setTime] = useState(new Date());
  return (
    <timeContext.Provider value={{ time, setTime }}>
      {children}
    </timeContext.Provider>
  );
}
