import { DOBasicBlock } from "./DOBasicBlock";
import { BasicBlockType, BasicHeading3Block } from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicHeading3Block extends DOBasicBlock {
  constructor(data: BasicHeading3Block | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.Heading3,
        text: "",
      },
      blockEditor
    );
  }
}
