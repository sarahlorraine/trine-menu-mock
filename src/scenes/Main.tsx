import * as React from "react";
import TopBar from '../components/TopBar/TopBar';
import Layout from '../components/Layout/Layout';
import { hot } from 'react-hot-loader';
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import Box from "../components/Box/Box";
import TabMenu, { PrototypeType, TabLinks } from "../components/TabMenu/TabMenu";

import "./main.css";
import '../globals/fonts.css';
import { mergeClassNames } from "../components/helpers";

export interface MainProps { firstName: string; lastName: string; }

export const Main = (props: MainProps) => {
  const tabs: TabLinks[] = [
    {
      id: "overview",
      title: "Overview",
      route: "",
      active: true,
    },
    {
      id: "activities",
      title: "Activities",
      route: "",
      active: false,
    },
    {
      id: "investments",
      title: "Investments",
      route: "",
      active: false,
    },
    {
      id: "transactions",
      title: "Transactions",
      route: "",
      active: false,
    },
    {
      id: "sharing",
      title: "Sharing",
      route: "",
      active: false,
    },
  ];

  const [state, setState] = React.useState<PrototypeType>(PrototypeType.Original);

return (
    <>
    <Layout>
    <TopBar />
    <HeaderBlock background="purple" headerText={"Menu prototype"}/>
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
    </>
  );
}

export default hot(module)(Main);