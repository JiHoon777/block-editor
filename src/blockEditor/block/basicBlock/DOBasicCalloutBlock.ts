import { DOBasicBlock } from "./DOBasicBlock";
import { BasicBlockType, BasicCalloutBlock } from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicCalloutBlock extends DOBasicBlock {
  constructor(data: BasicCalloutBlock | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.Callout,
        text: "",
      },
      blockEditor
    );
  }
}
