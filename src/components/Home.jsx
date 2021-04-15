import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useNewsFetch from 'hooks/useNewsFetch';
import { categories } from 'models/categories';
import TimeSticker from './TimeSticker';

const Home = () => {
  const history = useHistory();
  const { loading, news, selectCategory, onChangeSelectCategory, } = useNewsFetch();

  const NO_IMAGE = 'https://www.namdokorea.com/site/jeonnam/tour/images/noimage.gif';

  const handlePushToQuery = useCallback((name, path) => {
    onChangeSelectCategory(name);
    history.push(path);
  }, [history, onChangeSelectCategory]);

  return (
    <Container>
      <CategoryContainer>
        {
          categories.map(({ name, path }, idx) => (
            <CategoryItem
              key={idx}
              onClick={() => handlePushToQuery(name, path)}
              isSame={selectCategory === name}
            >
              {name}
            </CategoryItem>
          ))
        }
      </CategoryContainer>

      {
        loading ? <FixedContents>🤔 로딩중입니다 🤔</FixedContents>
        :
        <NewsContainer>
          {
            news.length > 0 ? news.map(({ title, url, urlToImage, publishedAt, description }, idx) => (
              <NewsItem
                key={idx}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <TimeSticker publishedAt={publishedAt} />
                <NewsImage src={urlToImage || NO_IMAGE} />

                <Contents>
                  <NewsTitle>{title}</NewsTitle>
                  <NewsContents>{description}</NewsContents>
                </Contents>
              </NewsItem>
            )) : <FixedContents>뉴스가 존재하지 않습니다.</FixedContents>
          }
        </NewsContainer>
      }
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const FixedContents = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.isSame && 'blue'};
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

const NewsContainer = styled.div`
  margin-top: 1rem;
`;

const Contents = styled.div`
  padding: 1rem;
`;

const NewsItem = styled.a`
  width: 100%;
  max-height: 170px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid black;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const NewsImage = styled.img`
  width: 230px;
  height: 100%;
  object-fit: cover;
  margin-right: 1rem;
`;

const NewsTitle = styled.div`
  font-weight: bold;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
`;

const NewsContents = styled.div`
  word-break: break-all;
  white-space: pre-wrap;
`;

export default Home;