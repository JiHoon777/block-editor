import { DOBasicBlock } from "./DOBasicBlock";
import {
  BasicBlockType,
  BasicHeading3Block,
  BasicTableBlock,
} from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicTableBlock extends DOBasicBlock {
  constructor(data: BasicTableBlock | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.Table,
        text: "",
      },
      blockEditor
    );
  }
}
