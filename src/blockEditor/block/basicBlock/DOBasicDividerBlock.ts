import { DOBasicBlock } from "./DOBasicBlock";
import { BasicBlockType, BasicDividerBlock } from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicDividerBlock extends DOBasicBlock {
  constructor(data: BasicDividerBlock | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.Divider,
        text: "",
      },
      blockEditor
    );
  }
}
