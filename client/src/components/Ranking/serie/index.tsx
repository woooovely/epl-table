import { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { serieTeamNameMap } from "../../../constants/constants";

interface TeamData {
  id: number;
  name: string;
  crest: string;
}

interface Team {
  team: TeamData;
  position: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  goalDifference: number;
  points: number;
}

const SerieRankLists = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/serie/rank";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { standings } = response.data;
        const serie = standings.find((s: any) => s.type === "TOTAL");
        const serieTable = serie?.table;
        if (serieTable) {
          const convertedTable = serieTable.map((team: Team) => ({
            ...team,
            team: {
              ...team.team,
              name: serieTeamNameMap[team.team.name] || team.team.name,
            },
          }));
          setTeams(convertedTable);
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, [teams]);

  if (isLoading) {
    return <h2>불러오는중...</h2>;
  }

  console.log(teams);

  return (
    <div>
      <S.Table>
        <S.Head>
          <S.TableTr>
            <S.TableTh>순위</S.TableTh>
            <S.TableTh>클럽</S.TableTh>
            <S.TableTh>경기수</S.TableTh>
            <S.TableTh>승</S.TableTh>
            <S.TableTh>무</S.TableTh>
            <S.TableTh>패</S.TableTh>
            <S.TableTh>득실차</S.TableTh>
            <S.TableTh>승점</S.TableTh>
          </S.TableTr>
        </S.Head>
        <S.Body>
          {teams.map((item: Team) => (
            <S.ListTr key={item.team.id}>
              <S.ListTd>{item.position}</S.ListTd>
              <S.ListTd>
                <S.TeamLogo src={item.team.crest} alt="팀 로고" />
                <S.TeamName>{item.team.name}</S.TeamName>
              </S.ListTd>
              <S.ListTd>{item.playedGames}</S.ListTd>
              <S.ListTd>{item.won}</S.ListTd>
              <S.ListTd>{item.draw}</S.ListTd>
              <S.ListTd>{item.lost}</S.ListTd>
              <S.ListTd>{item.goalDifference}</S.ListTd>
              <S.ListTd>{item.points}</S.ListTd>
            </S.ListTr>
          ))}
        </S.Body>
      </S.Table>
      <br />
      <br />
    </div>
  );
};

export default SerieRankLists;
