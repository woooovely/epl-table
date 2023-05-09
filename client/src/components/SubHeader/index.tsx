import * as S from './style';

interface HeaderProps {
    title: string
}

const SubHeader = ({ title }: HeaderProps) => {
    return (
        <>
          <S.HeaderContainer>
            <S.TextContainer>
                <S.PageTitle>{title}</S.PageTitle>
            </S.TextContainer>
            <S.MenuContainer>
                <S.Menu>
                    <S.LinkStyle to="/pl/rank">프리미어리그</S.LinkStyle>
                </S.Menu>
                <S.Menu>
                    <S.LinkStyle to="/laliga/rank">라리가</S.LinkStyle>
                </S.Menu>
                <S.Menu>
                    <S.LinkStyle to="/serie/rank">세리에A</S.LinkStyle>
                </S.Menu>
            </S.MenuContainer>
          </S.HeaderContainer>
        </>
    )
}

export default SubHeader;