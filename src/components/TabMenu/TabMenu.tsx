import * as React from 'react';
import { FunctionComponent } from 'react';
import { mergeClassNames } from '../helpers';

import "./tabMenu.css"

interface TabMenuProps {
  links: TabLinks[];
  mobilePrototype: PrototypeType;
}

export enum PrototypeType {
  Original = "original",
  DropDown = "dropdown",
  Trunc = "trunc",
  Icons = "icons"
}

export interface TabLinks {
  id: "overview" | "activities" | "investments" | "transactions" | "sharing";
  title: string;
  route: string;
  active: boolean;
}

const TabMenu: FunctionComponent<TabMenuProps> = ({links, mobilePrototype}) => {
  
  const renderItems = (prototype: PrototypeType, links: TabLinks[]) => {
    switch (prototype) {
      case PrototypeType.Original: {
        return renderTabs(links);
      };
      case PrototypeType.DropDown: {
        return renderDropDown(links);
      };
      case PrototypeType.Icons: {
        return renderIcons(links);
      };
      case PrototypeType.Trunc: {
        return renderTruncated(links);
      };
      default: return renderTabs(links);
    }
  }

  const renderTabs = (items: TabLinks[]) => {
    return (
    <div className={"tabWrapper"}>
      {items.map((item, i) => <a key={i} className={mergeClassNames(["tabItem", item.active && "tabItemActive"])} href={item.route}>{item.title}</a>)}
    </div>
);
  }

  const renderTruncated = (items: TabLinks[]) => {
    return (
      <div className={"tabWrapper"}>
        {items.map((item, i) => {
        <a key={i} className={mergeClassNames(["tabItem", item.active && "tabItemActive"])} href={item.route}>{item.title}</a>})}
       </div>
    );
  }

  const renderIcons = (items: TabLinks[]) => {
    return (
    <div className={"iconsWrapper"}>
      {items.map((item, i) => <a key={i} className={mergeClassNames(["tabItem", "iconItem", item.active && "tabItemActive"])} href={item.route}>{getIcon(item.id)}</a>)}
    </div>
    );
  }

  const getIcon = (id: string) => {
    return <p><img className="icon" width="25px" src={`../../public/assets/images/${id}-icon.png`} /></p>
  }

  const renderDropDown = (items: TabLinks[]) => {
    return (
    <div className="selectWrapper">
      <select className={"selectBox"}>
        {links.map((item, i) => <option key={i}>{item.title}</option>)}
      </select>
    </div>)
  }

  return (
    <div className="tabBlock">
        {renderItems(mobilePrototype, links)}
    </div>
    )
}

export default TabMenu;
