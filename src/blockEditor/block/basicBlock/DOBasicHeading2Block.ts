import { DOBasicBlock } from "./DOBasicBlock";
import {
  BasicBlockType,
  BasicHeading1Block,
  BasicHeading2Block,
} from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicHeading2Block extends DOBasicBlock {
  constructor(data: BasicHeading2Block | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.Heading2,
        text: "",
      },
      blockEditor
    );
  }
}
