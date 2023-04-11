import * as S from './style';

const Header = () => {
    return (
        <>
          <S.HeaderContainer>
            <S.LogoText>EPL Table</S.LogoText>
            <S.CategoryContainer>
                <S.Categories>About</S.Categories>
                <S.Categories>Ranking</S.Categories>
                <S.Categories>Top Scorer</S.Categories>
            </S.CategoryContainer>
          </S.HeaderContainer>
        </>
    )
}

export default Header;