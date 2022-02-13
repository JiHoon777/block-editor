// 기본 블락의 타입들 정의
import { BlockType, IDOBlockType } from "./IBlock";

export enum BasicBlockType {
  Text = "Text",
  Heading1 = "Heading1",
  Heading2 = "Heading2",
  Heading3 = "Heading3",
  Table = "Table",
  TodoList = "TodoList",
  BulletedList = "BulletedList",
  NumberedList = "NumberedList",
  ToggleList = "ToggleList",
  Quote = "Quote",
  Divider = "Divider",
  Callout = "Callout",
  // Page = 'Page',
  // LinkToPage = "LinkToPage",
}

/**
 * DOBasicBlockType 의 Public Interface 정의
 * */
export interface IDOBasicBlock extends IDOBlockType {
  blockType: BlockType.Basic;
  basicBlockType: BasicBlockType;

  text: string;
}

export interface IDOBasicTextBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Text;
}

export interface IDOBasicHeading1Block extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Heading1;
}

export interface IDOBasicHeading2Block extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Heading2;
}

export interface IDOBasicHeading3Block extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Heading3;
}

export interface IDOBasicTableBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Table;
  // Todo: Table 구현 할 때 알맞는 속성 추가!!
}

export interface IDOBasicTodoListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.TodoList;
}

export interface IDOBasicBulletedListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.BulletedList;
}

export interface IDOBasicNumberedListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.NumberedList;
}

export interface IDOBasicToggleListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.ToggleList;
}

export interface IDOBasicQuoteBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Quote;
}

export interface IDOBasicDividerBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Divider;
}

export interface IDOBasicCalloutBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Callout;
}

export type BASIC_BLOCK =
  | IDOBasicTextBlock
  | IDOBasicHeading1Block
  | IDOBasicHeading2Block
  | IDOBasicHeading3Block
  | IDOBasicTableBlock
  | IDOBasicTodoListBlock
  | IDOBasicBulletedListBlock
  | IDOBasicNumberedListBlock
  | IDOBasicToggleListBlock
  | IDOBasicQuoteBlock
  | IDOBasicDividerBlock
  | IDOBasicCalloutBlock;
