import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import * as S from "./style";
import banner from '../../../assets/svgs/serie_banner.svg'
import SerieRankLists from '../../../components/Ranking/serie';

const SerieRank = () => {
  return (
    <div>
      <Header />
      <SubHeader
        title="세리에A 팀 순위"
        premier="/pl/rank"
        laliga="/laliga/rank"
        serie="/serie/rank"
      />
      <S.BannerImage src={banner} alt="배너" />
      <S.Text>이탈리아 세리에A</S.Text>
      <S.Stick />
      <S.TableContainer>
        <SerieRankLists />
      </S.TableContainer>
    </div>
  );
};

export default SerieRank;
