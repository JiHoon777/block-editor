// 노션과 같은 기본 블락, 인라인 블락 같은 타입들 정의
import { BASIC_BLOCK } from "./IBasicBlock";

export enum BlockType {
  Basic = "Basic",
  Inline = "Inline",
}

/**
 * BlockType 들의 Public Interface 정의
 * */
export interface IBlock {
  blockType: BlockType;
}

export type BLOCK_TYPE_DATA = BASIC_BLOCK;
