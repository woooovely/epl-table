import { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import {
  nationMap,
  seriePlayerNameMap,
  serieTeamNameMap,
} from "../../../constants/constants";

interface Scorer {
  player: {
    id: number;
    name: string;
    nationality: string;
  };
  team: {
    id: number;
    name: string;
    crest: string;
    website: string;
  };
  goals: number;
}

const SerieScorerLists = () => {
  const [scorers, setScorers] = useState<Scorer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/serie/scorer";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { scorers } = response.data;
        setScorers(scorers);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>불러오는중...</h2>;
  }

  console.log(scorers);

  return (
    <S.BoxContainer>
      <S.TableTitle>
        <S.Lists>순위</S.Lists>
        <S.Lists>선수명</S.Lists>
        <S.Lists>득점</S.Lists>
        <S.Lists>소속팀</S.Lists>
        <S.Lists>국적</S.Lists>
      </S.TableTitle>
      {scorers.map((item: Scorer, index: number) => (
        <S.Container key={item.player.id}>
          <S.Table>
            <S.Rank>{index + 1}</S.Rank>
            <S.Player>{seriePlayerNameMap[item.player.name]}</S.Player>
            <S.Goals>{item.goals}</S.Goals>
            <S.TeamContainer>
              <S.TeamLogo src={item.team.crest} alt="로고" />
              {serieTeamNameMap[item.team.name]}
            </S.TeamContainer>
            <S.Nation>{nationMap[item.player.nationality]}</S.Nation>
          </S.Table>
        </S.Container>
      ))}
    </S.BoxContainer>
  );
};

export default SerieScorerLists;
