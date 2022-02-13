import { DOBasicBlock } from "./DOBasicBlock";
import { BasicBlockType, BasicTodoListBlock } from "../interfaces/IBasicBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BlockType } from "../interfaces/IBlock";

export class DOBasicTodoListBlock extends DOBasicBlock {
  constructor(data: BasicTodoListBlock | null, blockEditor: IBlockEditorStore) {
    super(
      data ?? {
        blockType: BlockType.Basic,
        basicBlockType: BasicBlockType.TodoList,
        text: "",
      },
      blockEditor
    );
  }
}
