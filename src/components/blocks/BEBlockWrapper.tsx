import React from "react";
import styled from "styled-components";
import { BLOCK_TYPE_DATA } from "../../blockEditor/block/interfaces/IBlock";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";

interface IBEBlockWrapperProps {
  block: BLOCK_TYPE_DATA;
}

export const BEBlockWrapper: React.FC<IBEBlockWrapperProps> = (props) => {
  const { block, children } = props;
  const [isHover, setIsHover] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);
  const refWrapper = React.useRef<HTMLDivElement | null>(null);

  useDetectOutsideClick(() => setIsSelected(false), refWrapper, isSelected);

  const handleMouseEnter = React.useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsHover(false);
  }, []);

  const wrapperStyle = React.useMemo(() => {
    if (isSelected) {
      return {
        background: "rgba(46, 170, 220, 0.2)",
      };
    }

    return {};
  }, [isSelected]);

  return (
    <Wrapper
      ref={refWrapper}
      className={classNames("flex w-full relative")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={wrapperStyle}
    >
      {children}
      {isHover && (
        <BlockOptionWrapper>
          <DotsVerticalIcon
            className={"w-4 h-4 cursor-pointer bg-grey"}
            onClick={() => setIsSelected(true)}
          />
        </BlockOptionWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: content-box;
  padding-left: 30px;
`;

const BlockOptionWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(50%) translateY(50%);
`;
