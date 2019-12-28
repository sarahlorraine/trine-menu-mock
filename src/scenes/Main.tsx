import * as React from "react";
import TopBar from '../components/TopBar/TopBar';
import Layout from '../components/Layout/Layout';
import { hot } from 'react-hot-loader';
import "./main.css";
import BoxContent from "../components/BoxContent/BoxContent";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import Box from "../components/Box/Box";

export interface MainProps { firstName: string; lastName: string; }

export const Main = (props: MainProps) => {
return (
    <>
    <Layout>
    <TopBar />
    <HeaderBlock background="purple" headerText={"Dashboard"}/>
      <Box>
        <h1>Welcome {props.firstName} {props.lastName}!</h1>
        <BoxContent>
          <ul>
            <li>Prototype 1</li>
            <li>Prototype 2</li>
            <li>Prototype 3</li>
          </ul>
        </BoxContent>
      </Box>
      
    </Layout>
    </>
  );
}

export default hot(module)(Main);