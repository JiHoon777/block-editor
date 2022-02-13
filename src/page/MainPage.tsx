import React from "react";
import { BlockEditor } from "../containers/BlockEditor";

interface IMainPageProps {}

export const MainPage: React.FC<IMainPageProps> = (props) => {
  return (
    <div
      className={
        "w-screen min-h-screen overflow-x-hidden overflow-y-auto flex justify-center p-3"
      }
    >
      <BlockEditor />
    </div>
  );
};
