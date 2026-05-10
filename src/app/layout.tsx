"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Sidebar from "@/components/Sidebar"; // Import Sidebar
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const getMenuID = (path:string) => {
    
    let menuID = 0;
    if (path === '/analog-synth') {
      menuID = 1;
    }

    return menuID;
  }

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const path = usePathname();
  const [menuDataID, setMenuDataID] = useState<number>(getMenuID(path))

  useEffect(() => {
    menuHandler(getMenuID(path))
  }, [path])

  const menuHandler = (menuID:number) => {
    setMenuDataID(menuID);
  }

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Check for small screen width on component mount
  useEffect(() => {
    const isSmall = window.innerWidth <= 640;
    setIsSmallScreen(isSmall);
    if (!isSmall) {
      document.getElementById('navbarToggler').click();
    }
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <MenuProvider menuDataID={menuDataID} menuHandler={menuHandler}>
            <NavbarProvider navbarOpen={navbarOpen} navbarToggleHandler={navbarToggleHandler}>
              <div className="flex min-h-screen min-w-screen">
                {/* Sidebar */}
                <div className={`flex ${navbarOpen ? 'sm:w-1/2 lg:w-2/6' : 'w-0'} transition-all duration-300`}>
                  <Sidebar navbarOpen={navbarOpen} />
                </div>
                
                {/* Main content section */}
                <div id="all-content" className={`bg-[url(/images/light-wood.jpg)] dark:bg-[url(/images/charred-timber.jpg)] flex flex-col w-full transition-all  ${navbarOpen ? 'sm:w-1/2 lg:w-4/6 duration-700' : 'duration-300'}`}>
                  <Header navbarOpen={navbarOpen} navbarToggleHandler={navbarToggleHandler} />

                  {/* Main content */}
                  <main
                    className={`w-full self-end bg-[url(/images/light-wood.jpg)] dark:bg-[url(/images/charred-timber.jpg)]`}
                  >
                    {children}
                  </main>

                  {/* Footer */}
                  <Footer />
                </div>
              </div>

              {/* Scroll to Top button */}
              <ScrollToTop />
            </NavbarProvider>
          </MenuProvider>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { NavbarProvider } from "@/context/NavbarContext";import { MenuProvider } from "@/context/MenuContext";

