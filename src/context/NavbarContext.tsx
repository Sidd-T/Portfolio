'use client'

import React, { createContext, useContext } from "react";

interface NavbarContextProps {
  navbarOpen: boolean;
  navbarToggleHandler: () => void;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export const NavbarProvider: React.FC<NavbarContextProps & { children: React.ReactNode }> = ({
  navbarOpen,
  navbarToggleHandler,
  children,
}) => {
  return (
    <NavbarContext.Provider value={{ navbarOpen, navbarToggleHandler }}>
      {children}
    </NavbarContext.Provider>
  );
};