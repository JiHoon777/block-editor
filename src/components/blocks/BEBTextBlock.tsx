import React, { SyntheticEvent } from "react";
import { DOBasicTextBlock } from "../../blockEditor/block/basicBlock/DOBasicTextBlock";
import styled from "styled-components";
import { text } from "stream/consumers";
import { BEBlockWrapper } from "./BEBlockWrapper";

interface IBEBTextBlockProps {
  block: DOBasicTextBlock;
}

export const BEBTextBlock: React.FC<IBEBTextBlockProps> = (props) => {
  const { block } = props;
  const textareaEl = React.useRef<HTMLDivElement | null>(null);

  const handleChange = React.useCallback(
    (e) => {
      if (!e.target.innerHTML) {
        return;
      }
      block.setText(e.target.innerHTML);
    },
    [block]
  );

  return (
    <div className={"flex w-full"}>
      <Input
        ref={textareaEl}
        className={
          "w-full m-w-full whitespace-pre-wrap break-words text-2xl focus:outline-none ring-0 focus:ring-0"
        }
        spellCheck
        contentEditable={true}
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: block.text }}
      />
    </div>
  );
};

const Input = styled.div``;
