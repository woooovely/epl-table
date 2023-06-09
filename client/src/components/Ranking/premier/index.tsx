import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./style";
import { plTeamNameMap } from "../../../constants/constants";

interface TeamData {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

interface Team {
  id: number;
  team: TeamData;
  crestUrl: string;
  position: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalDifference: number;
}

const PLRankLists = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/premierleague/rank";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { standings } = response.data;
        const premierLeague = standings.find((s: any) => s.type === "TOTAL");
        const premierLeagueTable = premierLeague?.table;
        if (premierLeagueTable) {
          const convertedTable = premierLeagueTable.map((team: Team) => ({
            ...team,
            team: {
              ...team.team,
              name: plTeamNameMap[team.team.name] || team.team.name,
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
    return <S.LoadingText>불러오는중...</S.LoadingText>
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
            <S.ListTr key={item.position}>
              <S.ListTd>
                <S.Rank>{item.position}</S.Rank>
              </S.ListTd>
              <S.ListTd>
                <S.TeamLogo src={item.team.crest} alt="팀 이미지" />
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

export default PLRankLists;
