import Header from "../../../components/Header";
import SubHeader from "../../../components/SubHeader";
import * as S from "./style";
import banner from '../../../assets/svgs/serie_banner.svg'
import SerieNewsLists from '../../../components/News/serie';
import useTitle from '../../../hook/title';

const SerieNews = () => {
    const titleUpdater = useTitle('불러오는 중...')
    setTimeout(() => titleUpdater('세리에A 뉴스 - EPL Table'))

  return (
    <S.Container>
      <Header />
      <SubHeader
        title="세리에A 소식"
        premier="/pl/news"
        laliga="/laliga/news"
        serie="/serie/news"
      />
      <S.BannerImage src={banner} alt="배너" />
      <S.NewsContainer>
        <SerieNewsLists />
      </S.NewsContainer>
    </S.Container>
  );
};

export default SerieNews;
