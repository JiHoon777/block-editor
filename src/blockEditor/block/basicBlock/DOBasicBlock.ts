import { BlockType } from "../interfaces/IBlock";
import { IBlockEditorStore } from "../../IBlockEditorStore";
import { BASIC_BLOCK, IDOBasicBlock } from "../interfaces/IBasicBlock";
import { computed, makeObservable } from "mobx";

export abstract class DOBasicBlock implements IDOBasicBlock {
  blockType: BlockType.Basic = BlockType.Basic;
  blockEditor: IBlockEditorStore;

  // data 는 이미 있는 data 를 받아오는 경우, 새로 생성하는 경우가 있으므로
  // 해당 클래스를 상속 받을 때 상속받은 클래스에서 data 처리하자
  abstract data: BASIC_BLOCK;

  protected constructor(blockEditor: IBlockEditorStore) {
    this.blockEditor = blockEditor;

    makeObservable(this, {
      text: computed,
      basicBlockType: computed,
    });
  }

  get text() {
    return this.data.text;
  }

  get basicBlockType() {
    return this.data.basicBlockType;
  }
}
