import React from "react";
import { BlockEditorStore } from "../blockEditor/BlockEditorStore";

interface IBlockEditorProps {}

export const BlockEditor: React.FC<IBlockEditorProps> = (props) => {
  const [blockEditor] = React.useState(new BlockEditorStore());

  return (
    <div className={"flex flex-col w-full max-w-screen-lg"}>sdssdsdsdsd</div>
  );
};
