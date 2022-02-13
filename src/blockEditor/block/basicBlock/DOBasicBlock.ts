import { IBlockEditorStore } from "../../IBlockEditorStore";
import {
  BASIC_BLOCK,
  BasicBlockType,
  IDOBasicBlock,
} from "../interfaces/IBasicBlock";
import { computed, makeObservable, observable } from "mobx";
import { BlockType } from "../interfaces/IBlock";

export abstract class DOBasicBlock implements IDOBasicBlock {
  blockEditor: IBlockEditorStore;
  data: BASIC_BLOCK;

  protected constructor(data: BASIC_BLOCK, blockEditor: IBlockEditorStore) {
    this.data = data;
    this.blockEditor = blockEditor;

    makeObservable(this, {
      data: observable,

      text: computed,
      blockType: computed,
      basicBlockType: computed,
    });
  }

  get text(): string {
    return this.data.text;
  }

  get blockType(): BlockType {
    return this.data.blockType;
  }

  get basicBlockType(): BasicBlockType {
    return this.data.basicBlockType;
  }
}
