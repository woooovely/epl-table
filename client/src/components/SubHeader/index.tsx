import * as S from './style';

interface HeaderProps {
    title: string
    premier: string
    laliga: string
    serie: string
}

const SubHeader = ({ title, premier, laliga, serie }: HeaderProps) => {
    return (
        <>
          <S.HeaderContainer>
            <S.TextContainer>
                <S.PageTitle>{title}</S.PageTitle>
            </S.TextContainer>
            <S.MenuContainer>
                <S.Menu>
                    <S.LinkStyle to={premier}>프리미어리그</S.LinkStyle>
                </S.Menu>
                <S.Menu>
                    <S.LinkStyle to={laliga}>라리가</S.LinkStyle>
                </S.Menu>
                <S.Menu>
                    <S.LinkStyle to={serie}>세리에A</S.LinkStyle>
                </S.Menu>
            </S.MenuContainer>
          </S.HeaderContainer>
        </>
    )
}

export default SubHeader;