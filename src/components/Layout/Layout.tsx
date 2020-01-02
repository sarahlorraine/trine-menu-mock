import * as React from 'react';
import { FunctionComponent } from 'react';
import "./layout.scss"

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <div className="layout">
      {props.children}
    </div>
    )
}

export default Layout;
