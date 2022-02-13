import { IBlockEditorStore } from "./IBlockEditorStore";
import { DOBasicTextBlock } from "./block/basicBlock/DOBasicTextBlock";
import { action, makeObservable, observable } from "mobx";
import { BLOCK_TYPE_DATA } from "./block/interfaces/IBlock";

export class BlockEditorStore implements IBlockEditorStore {
  blocks: BLOCK_TYPE_DATA[] = [];

  constructor() {
    this.blocks = [new DOBasicTextBlock(null, this)];

    makeObservable(this, {
      blocks: observable,

      addBlockAtTheEnd: action,
    });
  }

  addBlockAtTheEnd(block: BLOCK_TYPE_DATA) {
    this.blocks.push(block);
  }
}
