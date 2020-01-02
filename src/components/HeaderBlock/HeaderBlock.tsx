import * as React from 'react';
import { FunctionComponent } from 'react';
import { mergeClassNames } from '../helpers';

import "./headerBlock.scss";

interface HeaderBlockProps {
    headerText: React.ReactNode;
    background?: "purple" | "yellow";
}

const HeaderBlock: FunctionComponent<HeaderBlockProps> = ({ headerText, background, children }) => {
  return (
    <div className={mergeClassNames(["headerWrapper", background])}>
        <h1>{headerText}</h1>
        {children}
        </div>
    )
}

export default HeaderBlock;
