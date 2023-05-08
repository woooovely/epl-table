import { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import thumbnail from "../../assets/svgs/thumbnail.svg";

interface News {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

const NewsLists = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/news";
      const response = await axios.get(url);

      if (response.status === 200) {
        const { items } = response.data;

        const parser = new DOMParser();
        const parsedItems = items.map((item: News) => ({
          ...item,
          title: parser.parseFromString(item.title, "text/html").body
            .textContent,
        }));

        setNews(parsedItems);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(news);

  if (isLoading) {
    return <h2>불러오는 중...</h2>;
  }

  return (
    <div>
      <S.Title>인기 급상승 뉴스</S.Title>
      <S.NewsItemBlock>
        {news?.map((item: News) => (
          <S.Thumbnail>
            <a href={item.originallink}>
              <S.Image src={thumbnail} alt="썸네일" />
            </a>
            <S.Detail>
              <S.NewsTitle>{item.title}</S.NewsTitle>
              {item.description}
            </S.Detail>
          </S.Thumbnail>
        ))}
      </S.NewsItemBlock>
    </div>
  );
};

export default NewsLists;
