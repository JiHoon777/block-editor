import React from "react";

export function useDetectOutsideClick(
  onClick: (v: null) => void,
  ref: any,
  isModalOpen: boolean
) {
  React.useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target) && isModalOpen) {
        onClick(null);
      }
    };

    if (ref.current) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [onClick, ref, isModalOpen]);
}
