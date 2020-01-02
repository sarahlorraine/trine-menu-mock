import * as React from "react";
import TopBar from '../components/TopBar/TopBar';
import Layout from '../components/Layout/Layout';
import { hot } from 'react-hot-loader';
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import Box from "../components/Box/Box";
import TabMenu, { PrototypeType, TabLinks, TabId } from "../components/TabMenu/TabMenu";

import "./main.css";
import '../globals/fonts.css';
import { mergeClassNames } from "../components/helpers";
import MobileWrapper from "../components/MobileWrapper/MobileWrapper";

export interface MainProps { firstName: string; lastName: string; }

export const Main = (props: MainProps) => {
  const tabs: TabLinks[] = [
    {
      id: TabId.Overview,
      title: "Overview",
      onClick: () => {},
      active: true,
    },
    {
      id: TabId.Activities,
      title: "Activities",
      onClick: () => {},
      active: false,
    },
    {
      id: TabId.Investments,
      title: "Investments",
      onClick: () => {},
      active: false,
    },
    {
      id: TabId.Transactions,
      title: "Transactions",
      onClick: () => {},
      active: false,
    },
    {
      id: TabId.Sharing,
      title: "Sharing",
      onClick: () => {},
      active: false,
    },
  ];

  const [state, setState] = React.useState<PrototypeType>(PrototypeType.Original);

return (
    <MobileWrapper>
      <Layout>
      <TopBar />
      <HeaderBlock background="purple" headerText="Menu prototype"/>
      <TabMenu links={tabs} mobilePrototype={state}/>
        <Box>
          <h2>Welcome!</h2>
          <span className="subtext">Please select a menu type</span>
            <ul className="selectorUl">
              <li><a className={mergeClassNames(["proTypeItem", state === PrototypeType.Original && "proTypeItemActive"])} onClick={() => setState(PrototypeType.Original)}>Original</a></li>
              <li><a className={mergeClassNames(["proTypeItem", state === PrototypeType.DropDown && "proTypeItemActive"])} onClick={() => setState(PrototypeType.DropDown)}>Dropdown</a></li>
              <li><a className={mergeClassNames(["proTypeItem", state === PrototypeType.Trunc && "proTypeItemActive"])} onClick={() => setState(PrototypeType.Trunc)}>Truncated</a></li>
              <li><a className={mergeClassNames(["proTypeItem", state === PrototypeType.Icons && "proTypeItemActive"])} onClick={() => setState(PrototypeType.Icons)}>Icons</a></li>
            </ul>
        </Box>
      </Layout>
    </MobileWrapper>
  );
}

export default hot(module)(Main);