import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background-color: white;
`

export const LogoText = styled.p`
  font-family: 'Premier League';
  font-size: 25px;
`

export const CategoryContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 521px;
`

export const Categories = styled.li`
  font-size: 15px;
`

export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`