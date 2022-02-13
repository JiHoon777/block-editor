import React from "react";
import { BlockEditorStore } from "../blockEditor/BlockEditorStore";
import { DOBasicTextBlock } from "../blockEditor/block/basicBlock/DOBasicTextBlock";
import { BEBTextBlock } from "../components/blocks/BEBTextBlock";
import { BlockType } from "../blockEditor/block/interfaces/IBlock";
import { BEBlockWrapper } from "../components/blocks/BEBlockWrapper";

interface IBlockEditorProps {}

export const BlockEditor: React.FC<IBlockEditorProps> = (props) => {
  const [blockEditor] = React.useState(new BlockEditorStore());

  const blocks = React.useMemo(() => {
    const render = blockEditor.blocks.map((block) => {
      if (block.blockType === BlockType.Basic) {
        if (block instanceof DOBasicTextBlock) {
          const b = block as DOBasicTextBlock;
          return <BEBTextBlock block={b} />;
        }
        return <div>{block.blockType}: 알수없는 타입입니다.</div>;
      } else if (block.blockType === BlockType.Inline) {
        return <div>{block.blockType}: 알수없는 타입입니다.</div>;
      } else {
        return <div>알수없는 타입의 Block 입니다.</div>;
      }
    });

    return render;
  }, [blockEditor.blocks]);

  const wrappedBlocks = React.useMemo(() => {
    const wrapped = blocks.map((c, index) => {
      const block = c.props.block;
      return (
        <BEBlockWrapper key={index} block={block}>
          {c}
        </BEBlockWrapper>
      );
    });

    return wrapped;
  }, [blocks]);

  return (
    <div className={"flex flex-col w-full max-w-screen-lg"}>
      {wrappedBlocks}
    </div>
  );
};
