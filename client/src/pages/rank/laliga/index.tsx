import * as S from './style';
import banner from '../../../assets/svgs/laliga_banner.svg';
import Header from '../../../components/Header';
import SubHeader from '../../../components/SubHeader';
import LaligaRankLists from '../../../components/Ranking/laliga';

const LaligaRank = () => {
    return (
        <div>
            <Header />
            <SubHeader title="라리가 팀순위" />
            <S.BannerImage src={banner} alt="배너" />
            <S.Text>스페인 라리가 산탄데르</S.Text>
            <S.Stick />
            <S.TableContainer>
                <LaligaRankLists />
            </S.TableContainer>
        </div>
    )
}

export default LaligaRank;