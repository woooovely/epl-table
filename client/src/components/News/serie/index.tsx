import { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import thumbnail from '../../../assets/svgs/serie.svg'

interface News {
  title: string;
  originallink: string;
  description: string;
}

const SerieNewsLists = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/serie/news";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { items } = response.data;
        const parser = new DOMParser();

        const parsedItems = items.map((item: News) => ({
          ...item,
          title: parser.parseFromString(item.title, "text/html").body
            .textContent,
          description: parser.parseFromString(item.description, "text/html")
            .body.textContent,
        }));
        setIsLoading(false);
        setNews(parsedItems);
      }
    };
    fetchData();
  });

  console.log(news);

  if (isLoading) {
    return <h2>불러오는중...</h2>;
  }

  return (
    <div>
        <S.Title>인기 급상승 뉴스</S.Title>
        <S.NewsItemBlock>
            {news.map((item: News, index: number) => (
                <S.NewsLink href={item.originallink} key={index + 1}>
                    <S.Thumbnail>
                        <S.Image src={thumbnail} alt="썸네일" />
                        <S.Detail>
                            <S.NewsTitle>{item.title}</S.NewsTitle>
                            {item.description}
                        </S.Detail>
                    </S.Thumbnail>
                </S.NewsLink>
            ))}
        </S.NewsItemBlock>
    </div>
  )
};

export default SerieNewsLists
