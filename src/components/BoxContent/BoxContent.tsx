import * as React from 'react';
import { FunctionComponent } from 'react';
import "./boxContent.css"

interface BoxConetntProps {}

const BoxContent: FunctionComponent<BoxConetntProps> = (props) => {
  return <div className="content">{props.children}</div>
}

export default BoxContent;
