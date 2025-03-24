"use client";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, X } from "lucide-react";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full sticky z-50 top-0">
      <div className="flex items-center justify-between p-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="font-bold text-xl">LP {`<Dev>`}</div>
        {isDesktop ? (
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors inline-block py-2 px-1"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button className="p-2 rounded-md hover:bg-gray-200">
                  <Menu className="h-6 w-6" />
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-2xl">Navigation</DrawerTitle>
                  <DrawerDescription>
                    Access all sections of our website.
                  </DrawerDescription>
                </DrawerHeader>

                <div className="px-4 py-2">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="block p-2 rounded hover:bg-gray-100 text-lg transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <DrawerFooter>
                  <DrawerClose asChild>
                    <button className="w-full flex items-center justify-center gap-2 p-2 border rounded-md hover:bg-gray-100">
                      <X className="h-4 w-4" />
                      Close Menu
                    </button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
