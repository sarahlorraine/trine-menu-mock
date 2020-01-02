import * as React from 'react';
import { FunctionComponent } from 'react';
import "./mobileWrapper.css"

const MobileWrapper: FunctionComponent = (props) => {
  return (
    <div className="mobileWrapper">
      {props.children}
    </div>
    )
}

export default MobileWrapper;
