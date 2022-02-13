import { DOBasicBlock } from "./DOBasicBlock";
import {
  BasicBlockType,
  BasicBulletedListBlock,
} from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicBulletedListBlock extends DOBasicBlock {
  constructor(
    data: BasicBulletedListBlock | null,
    blockEditor: IBlockEditorStore
  ) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.BulletedList,
        text: "",
      },
      blockEditor
    );
  }
}
