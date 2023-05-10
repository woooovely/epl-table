import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./style";
import { plTeamNameMap } from '../../../constants/constants'
import { playerNameMap } from '../../../constants/constants'
import { nationMap } from '../../../constants/constants'

interface Scorer {
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    position: string;
    shirtNumber: number | null;
    lastUpdated: string;
  };
  team: {
    id: number;
    name: string;
    crest: string;
    website: string
  };
  goals: number;
}

const ScorerTable = () => {
  const [scorers, setScorers] = useState<Scorer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/premierleague/scorers";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { scorers } = response.data;
        setScorers(scorers);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(scorers);

  if (isLoading) {
    return <h2>로딩중...</h2>;
  }

  return (
    <S.Table>
      <S.Head>
        <S.Tr>
          <S.ColumnTitle>순위</S.ColumnTitle>
          <S.ColumnTitle>선수명</S.ColumnTitle>
          <S.ColumnTitle>득점</S.ColumnTitle>
          <S.ColumnTitle>소속팀</S.ColumnTitle>
          <S.ColumnTitle>국적</S.ColumnTitle>
        </S.Tr>
      </S.Head>
      <S.Body>
        {scorers.map((item: Scorer, index: number) => (
          <S.Tr key={item.player.id}>
            <S.Td>{index + 1}</S.Td>
            <S.Td>{playerNameMap[item.player.name]}</S.Td>
            <S.Td>{item.goals}</S.Td>
            <S.Td>
              <S.TeamLogo src={item.team.crest} alt="팀" />
              <S.TeamName>
                <S.TeamLink href={item.team.website}>
                  {plTeamNameMap[item.team.name]}
                </S.TeamLink>
              </S.TeamName>
            </S.Td>
            <S.Td>{nationMap[item.player.nationality]}</S.Td>
          </S.Tr>
        ))}
      </S.Body>
    </S.Table>
  );
};

export default ScorerTable;
