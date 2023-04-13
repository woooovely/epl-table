import Header from '../../components/Header';
import * as S from './style';
import banner from '../../assets/svgs/banner.svg';

const Scorer = () => {
    return (
        <div>
            <Header />
            <S.Banner src={banner} alt="배너" />
            <S.Text>프리미어리그 득점 순위</S.Text>
            <S.Stick />
        </div>
    )
}

export default Scorer;