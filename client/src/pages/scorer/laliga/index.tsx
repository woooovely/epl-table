import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import * as S from "./style";
import banner from '../../../assets/svgs/laliga_banner.svg'
import LaligaScorerLists from '../../../components/Scorer/laliga';
import useTitle from '../../../hook/title';

const LaligaScorer = () => {
  const titleUpdater = useTitle('불러오는 중...')
  setTimeout(() => titleUpdater('프리메라리가 득점왕 순위 - EPL Table'))

  return (
    <div>
      <Header />
      <SubHeader
        title="프리메라리가 득점왕 순위"
        premier="/pl/scorer"
        laliga="/laliga/scorer"
        serie="/serie/scorer"
      />
      <S.Banner src={banner} alt="배너" />
      <S.Text>라리가 득점 순위</S.Text>
      <S.Stick />
      <S.TableContainer>
        <LaligaScorerLists />
      </S.TableContainer>
    </div>
  );
};

export default LaligaScorer
