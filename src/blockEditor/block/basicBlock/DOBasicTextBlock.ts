import { DOBasicBlock } from "./DOBasicBlock";
import { BasicBlockType, BasicTextBlock } from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicTextBlock extends DOBasicBlock {
  constructor(data: BasicTextBlock | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        basicBlockType: BasicBlockType.Text,
        blockType: BlockType.Basic,
        text: "",
      },
      blockEditor
    );
  }
}
