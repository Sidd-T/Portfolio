'use client'

import React, { createContext, useContext } from "react";

interface MenuContextProps {
  menuDataID: number;
  menuHandler: Function;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider: React.FC<MenuContextProps & { children: React.ReactNode }> = ({
  menuDataID,
  menuHandler,
  children,
}) => {
  return (
    <MenuContext.Provider value={{ menuDataID, menuHandler }}>
      {children}
    </MenuContext.Provider>
  );
};