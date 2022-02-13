import { DOBasicBlock } from "./DOBasicBlock";
import {
  BasicBlockType,
  BasicNumberedListBlock,
} from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicNumberedListBlock extends DOBasicBlock {
  constructor(
    data: BasicNumberedListBlock | null,
    blockEditor: IBlockEditorStore
  ) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.NumberedList,
        text: "",
      },
      blockEditor
    );
  }
}
