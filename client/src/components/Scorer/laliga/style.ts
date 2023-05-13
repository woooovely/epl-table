import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 500px;
  margin-top: 50px;
`;

export const Head = styled.thead`
  background-color: #f5f5f5;
`;

export const Body = styled.tbody``;

export const TableTr = styled.tr`
  background-color: white;
  font-weight: normal;
  font-family: 'Pretendard';
`;

export const TableTh = styled.th`
  padding: 10px;
  text-align: center;
  font-weight: normal;
  font-family: 'Pretendard';
  color: #989898;
`;

export const ListTr = styled.tr`
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ListTd = styled.td`
  padding: 10px;
  text-align: center;
  &:nth-child(1) {
    font-weight: normal;
  }
  &:nth-child(2) {
    display: flex;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
    font-weight: 600;
  }
  &:nth-child(3),
  &:nth-child(4) {
    align-items: center;
  }
  &:nth-child(5) {
    font-weight: normal;
    color: #002147;
  }
  &:nth-child(6),
  &:nth-child(7),
  &:nth-child(8) {
    font-weight: normal;
    color: #5b5b5b;
  }
`;

export const Rank = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const Points = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const WDL = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const GD = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const GF = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const GA = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const TeamLogo = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const TeamName = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
`;