import * as React from 'react';
import { FunctionComponent } from 'react';
import "./boxContent.scss"

interface BoxContentProps {}

const BoxContent: FunctionComponent<BoxContentProps> = (props) => {
  return <div className="content">{props.children}</div>
}

export default BoxContent;
