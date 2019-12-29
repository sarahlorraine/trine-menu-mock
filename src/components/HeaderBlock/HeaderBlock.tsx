import * as React from 'react';
import { FunctionComponent } from 'react';
import "./headerBlock.css";

interface HeaderBlockProps {
    background?: "purple"; // Add more options
    headerText: React.ReactNode;
}

const mergeClassNames = (classNames: string[]) => {
    return classNames.join(' ');
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
