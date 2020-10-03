import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 20px;
  left: 30px;
`

const Logo = styled.span`
  font-weight: 900;
  font-size: 20px;
  margin-right: 10px;
`

const NaviationList = styled.ul`
  list-style: none;
  display: flex;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`

const Navigaton = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">HATTA</Link>
      </Logo>
    <NaviationList>
      <NavigationListItem>
        <Link to="/articles">articles</Link>
        </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">about</Link>
        </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">gallery</Link>
        </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">contact</Link>
        </NavigationListItem>
    </NaviationList>
  </NavigationWrapper>
)

export default Navigaton
