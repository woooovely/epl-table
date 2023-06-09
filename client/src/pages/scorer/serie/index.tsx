import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import * as S from "./style";
import banner from '../../../assets/svgs/serie_banner.svg';
import SerieScorerLists from '../../../components/Scorer/serie';
import useTitle from '../../../hook/title';

const SerieScorer = () => {
  const titleUpdater = useTitle('불러오는 중...')
  setTimeout(() => titleUpdater('세리에A 득점왕 순위 - EPL Table'))

  return (
    <div>
      <Header />
      <SubHeader
        title="세리에A 득점왕 순위"
        premier="/pl/scorer"
        laliga="/laliga/scorer"
        serie="/serie/scorer"
      />
      <S.Banner src={banner} alt="배너" />
      <S.Text>세리에A 득점 순위</S.Text>
      <S.Stick />
      <S.TableContainer>
        <SerieScorerLists />
      </S.TableContainer>
    </div>
  );
};

export default SerieScorer;
