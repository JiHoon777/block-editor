import { IBlockEditorStore } from "../../IBlockEditorStore";
import {
  BASIC_BLOCK,
  BasicBlockType,
  IBasicBlock,
} from "../interfaces/IBasicBlock";
import { action, computed, makeObservable, observable } from "mobx";
import { BlockType } from "../interfaces/IBlock";

export abstract class DOBasicBlock implements IBasicBlock {
  blockEditor: IBlockEditorStore;
  private data: BASIC_BLOCK;

  protected constructor(data: BASIC_BLOCK, blockEditor: IBlockEditorStore) {
    this.data = data;
    this.blockEditor = blockEditor;

    makeObservable<this, "data">(this, {
      data: observable,

      setText: action,

      text: computed,
      blockType: computed,
      basicBlockType: computed,
    });
  }

  get text(): string {
    return this.data.text;
  }

  setText(text: string) {
    this.data.text = text;
  }

  get blockType(): BlockType.Basic {
    return this.data.blockType;
  }

  get basicBlockType(): BasicBlockType {
    return this.data.basicBlockType;
  }
}
