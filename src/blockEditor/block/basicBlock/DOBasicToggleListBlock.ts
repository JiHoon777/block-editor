import { DOBasicBlock } from "./DOBasicBlock";
import {
  BasicBlockType,
  BasicToggleListBlock,
} from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicToggleListBlock extends DOBasicBlock {
  constructor(
    data: BasicToggleListBlock | null,
    blockEditor: IBlockEditorStore
  ) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.ToggleList,
        text: "",
      },
      blockEditor
    );
  }
}
