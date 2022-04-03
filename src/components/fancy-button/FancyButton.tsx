import { forwardRef } from 'react';
import logProps from '../HOC/LogProps';

type FancyButtonType = {
  children: string;
}

const FancyButton = forwardRef<HTMLButtonElement, FancyButtonType>(
  (props, ref)  => {
    return (
      <button
        ref={ref}
        className="fancy-button"
      >
        {props.children}
      </button>
    );
  } 
);

export default logProps(FancyButton);