'use client';

import { createContext, useState } from 'react';

export const timeContext = createContext(null);

export default function ContextProvider({ children }) {
  const [date, setDate] = useState(new Date());
  return (
    <timeContext.Provider value={{ date, setDate }}>
      {children}
    </timeContext.Provider>
  );
}
