import styled from "styled-components";


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;


export const Head = styled.thead`
  background-color: #f2f2f2;
`;


export const Body = styled.tbody`
  background-color: #ffffff;
`;


export const TableTr = styled.tr`
  height: 50px;
`;


export const TableTh = styled.th`
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #dddddd;
`;


export const ListTr = styled.tr`
  height: 80px;
`;


export const ListTd = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #dddddd;
  :nth-child(2) {
    font-weight: bold;
  }
`;


export const TeamLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`;


export const TeamName = styled.span`
  margin-top: 5px;
`;
