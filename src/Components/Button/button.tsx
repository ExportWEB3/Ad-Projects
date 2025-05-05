

import React from 'react';
import { CustomButtonAttributes } from '../../utilities/typedec';


export function Button (props: CustomButtonAttributes) {
    const {
        btnText,
        className,
        onClick,
        type,
        disabled,
    } = props;


    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (onClick) {
          onClick(event);
        }
      };


  return (
    <button
        type={type}
        className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
        onClick={handleClick}
        disabled={disabled}
        >
        {btnText}
        </button>
  );
};

