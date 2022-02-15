// 기본 블락의 타입들 정의
import { BlockType, IBlock } from "./IBlock";

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
export interface IBasicBlock extends IBlock {
  blockType: BlockType.Basic;
  basicBlockType: BasicBlockType;

  text: string;
}

// export interface BasicTextBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.Text;
// }
//
// export interface BasicHeading1Block extends IBasicBlock {
//   basicBlockType: BasicBlockType.Heading1;
// }
//
// export interface BasicHeading2Block extends IBasicBlock {
//   basicBlockType: BasicBlockType.Heading2;
// }
//
// export interface BasicHeading3Block extends IBasicBlock {
//   basicBlockType: BasicBlockType.Heading3;
// }
//
// export interface BasicTableBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.Table;
//   // Todo: Table 구현 할 때 알맞는 속성 추가!!
// }
//
// export interface BasicTodoListBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.TodoList;
// }
//
// export interface BasicBulletedListBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.BulletedList;
// }
//
// export interface BasicNumberedListBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.NumberedList;
// }
//
// export interface BasicToggleListBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.ToggleList;
// }
//
// export interface BasicQuoteBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.Quote;
// }
//
// export interface BasicDividerBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.Divider;
// }
//
// export interface BasicCalloutBlock extends IBasicBlock {
//   basicBlockType: BasicBlockType.Callout;
// }

// Todo: Table, Divider Type 은 IBasicBlock 으로 커버가 안 되니 다른 인터페이스 추가 필요
// Basic 타입의 Block 들은 IBasicBlock 타입의 abstract class 를 상속받으니 IBasicBlock 으로 커버 가능 할 듯?
// 아니면 나중에 주석처리된 인터페이스 살리자
export type BASIC_BLOCK = IBasicBlock;
