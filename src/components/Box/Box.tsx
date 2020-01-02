import * as React from 'react';
import { FunctionComponent } from 'react';
import "../Layout/layout.scss"

interface BoxProps {}

const Box: FunctionComponent<BoxProps> = (props) => {
  return (
      <div className="box">{props.children}</div>
    )
}

export default Box;
