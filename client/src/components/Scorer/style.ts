import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 100px;
  background-color: #f5f5f5;
`;

export const Head = styled.thead`
`;

export const Tr = styled.tr`
  background-color: white;
`;

export const ColumnTitle = styled.th`
  color: #989898;
  padding: 10px;
`;

export const Body = styled.tbody`
`;

export const Td = styled.td`
  border-bottom: 1px solid #f2f2f2;
  padding: 10px;
  :nth-child(4) {
    display: flex;
  }
  :nth-child(2) {
    width: 195px;
    font-weight: 620;
  }
  :last-of-type {
    width: 100px;
  }
`;

export const TeamLogo = styled.img`
  width: 25px;
  height: 25px;
`

export const TeamName = styled.span`
  padding-left: 10px;
  width: 130px;
`
