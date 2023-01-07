import { FC, ReactNode } from "react";
import "../styles/globals.css";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body className="dark:bg-black bg-white text-black dark:text-white">{children}</body>
    </html>
  );
};

export default Layout;
