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

export enum TabId {
  Overview = "overview",
  Activities = "activities",
  Investments = "investments",
  Transactions = "transactions",
  Sharing = "sharing"
}

export interface TabLinks {
  id: TabId;
  title: string;
  onClick: () => void;
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
      {items.map((item, i) => <a key={i} className={mergeClassNames(["tabItem", item.active && "tabItemActive"])} onClick={item.onClick}>{item.title}</a>)}
    </div>
);
  }

  const renderTruncated = (items: TabLinks[]) => {
    const firstThree = items.slice(0, 3);
    const moreItems = items.slice(3, items.length)
    const [showMore, setShowMore] = React.useState(false);
    return (
      <div className={mergeClassNames(["tabWrapper", "truncated"])}>
        {firstThree.map((item, i) => 
          <a key={i} className={mergeClassNames(["tabItem", item.active && "tabItemActive"])} onClick={item.onClick}>{item.title}</a>
        )}
        <a className={mergeClassNames(["tabItem", "more"])} onClick={() => setShowMore(!showMore)}>More</a>
        <div className={mergeClassNames(["moreDropdownWrapper", showMore && "moreActive"])}>
          <ul>
            {moreItems.map((more, i) => <li key={i} onClick={more.onClick}>{more.title}</li> )}
          </ul>
        </div>
       </div>
    );
  }

  const renderIcons = (items: TabLinks[]) => {
    return (
    <div className={"iconsWrapper"}>
      {items.map((item, i) => <a key={i} className={mergeClassNames(["tabItem", "iconItem", item.active && "tabItemActive"])} onClick={item.onClick}>{getIcon(item.id)}</a>)}
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
