import { DOBasicBlock } from "./DOBasicBlock";
import { BasicBlockType, BasicHeading1Block } from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicHeading1Block extends DOBasicBlock {
  constructor(data: BasicHeading1Block | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.Heading1,
        text: "",
      },
      blockEditor
    );
  }
}
