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

export interface BasicTextBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Text;
}

export interface BasicHeading1Block extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Heading1;
}

export interface BasicHeading2Block extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Heading2;
}

export interface BasicHeading3Block extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Heading3;
}

export interface BasicTableBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Table;
  // Todo: Table 구현 할 때 알맞는 속성 추가!!
}

export interface BasicTodoListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.TodoList;
}

export interface BasicBulletedListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.BulletedList;
}

export interface BasicNumberedListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.NumberedList;
}

export interface BasicToggleListBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.ToggleList;
}

export interface BasicQuoteBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Quote;
}

export interface BasicDividerBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Divider;
}

export interface BasicCalloutBlock extends IDOBasicBlock {
  basicBlockType: BasicBlockType.Callout;
}

export type BASIC_BLOCK =
  | BasicTextBlock
  | BasicHeading1Block
  | BasicHeading2Block
  | BasicHeading3Block
  | BasicTableBlock
  | BasicTodoListBlock
  | BasicBulletedListBlock
  | BasicNumberedListBlock
  | BasicToggleListBlock
  | BasicQuoteBlock
  | BasicDividerBlock
  | BasicCalloutBlock;
