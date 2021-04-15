import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { parse } from 'query-string';
import { getNewsList } from 'api';

const useNewsFetch = () => {
  const { search } = useLocation();
  const { category } = parse(search);

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [selectCategory, setSelectCategory] = useState(category || '코로나');

  const onChangeSelectCategory = useCallback((selectCategory) => {
    setSelectCategory(selectCategory);
  }, []);

  const requestNewsFetch = useCallback(async () => {
    try {
      setLoading(true);
      const { status, articles } = await getNewsList(selectCategory);
      
      if (status === 'ok') {
        setNews(articles);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [selectCategory]);

  useEffect(() => {
    requestNewsFetch();
  }, [requestNewsFetch, selectCategory]);

  return {
    loading,
    selectCategory,
    onChangeSelectCategory,
    news,
  };
}

export default useNewsFetch;