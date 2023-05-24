import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import * as S from "./style";
import banner from '../../../assets/svgs/laliga_banner.svg';
import LaligaNewsLists from '../../../components/News/laliga';
import useTitle from '../../../hook/title';

const LaligaNews = () => {
    const titleUpdater = useTitle('불러오는 중...')
    setTimeout(() => titleUpdater('프리메라리가 뉴스 - EPL Table'))

  return (
    <S.Container>
      <Header />
      <SubHeader
        title="프리메라리가 소식"
        premier="/pl/news"
        laliga="/laliga/news"
        serie="/serie/news"
      />
      <S.BannerImage src={banner} alt="배너" />
      <S.NewsContainer>
        <LaligaNewsLists />
      </S.NewsContainer>
    </S.Container>
  );
};

export default LaligaNews;
