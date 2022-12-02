import { React } from "react";
import { Link, Route } from "wouter";
import SideMenu from "./SideMenu";
import Profile from "./Profile";
import DogHomePage from "./DogHomePage";
import RickApi from "./RickApi";

import styled from "styled-components";

export default function App() {
  const SideBar = styled.div`
    height: 100%;
    width: 8em;
    position: fixed;
    border-right: 3px solid #001253;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: chocolate;
    padding-top: 20px;
  `;

  const SideItem = styled.li`
    padding: 2px 4px 3px 20px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
  `;

  const Container = styled.div`
    text-align: center;
  `;

  return (
    <>
      <Container>
        <SideBar>
          <SideItem>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/sample">Api</Link>
            </li>
          </SideItem>
        </SideBar>
        <Route path="/home" component={DogHomePage}></Route>
        <Route path="/profile" component={Profile} />
        <Route path="/sample" component={RickApi}></Route>
      </Container>
    </>
  );
}
