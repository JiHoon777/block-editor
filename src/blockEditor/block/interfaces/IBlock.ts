// 노션과 같은 기본 블락, 인라인 블락 같은 타입들 정의
import { IDOBasicBlock } from "./IBasicBlock";

export enum BlockType {
  Basic = "Basic",
}

/**
 * BlockType 들의 Public Interface 정의
 * */
export interface IDOBlockType {
  blockType: BlockType;
}

export type DOBlockTypes = IDOBasicBlock;
