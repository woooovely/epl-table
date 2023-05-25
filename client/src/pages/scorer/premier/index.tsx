import Header from "../../../components/Header";
import * as S from "../premier/style";
import banner from "../../../assets/svgs/banner.svg";
import ScorerTable from "../../../components/Scorer/premier/index";
import SubHeader from "../../../components/SubHeader";

const PremierScorer = () => {
  return (
    <div>
      <Header />
      <SubHeader
        title="프리미어리그 득점왕 순위"
        premier="/pl/scorer"
        laliga="/laliga/scorer"
        serie="/serie/scorer"
      />
      <S.Banner src={banner} alt="배너" />
      <S.Text>프리미어리그 득점 순위</S.Text>
      <S.Stick />
      <S.TableContainer>
        <ScorerTable />
      </S.TableContainer>
    </div>
  );
};

export default PremierScorer;
