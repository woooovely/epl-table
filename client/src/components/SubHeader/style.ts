import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 58px;
  background-color: black;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TextContainer = styled.div``;

export const PageTitle = styled.p`
  font-size: 23px;
  font-weight: 650;
  color: white;
  margin-right: 190px;
`

export const MenuContainer = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Menu = styled.li`
  font-size: 15px;
  color: white;
`

export const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
`