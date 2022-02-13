import { DOBasicBlock } from "./DOBasicBlock";
import { BasicBlockType, BasicQuoteBlock } from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicQuoteBlock extends DOBasicBlock {
  constructor(data: BasicQuoteBlock | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.Quote,
        text: "",
      },
      blockEditor
    );
  }
}
