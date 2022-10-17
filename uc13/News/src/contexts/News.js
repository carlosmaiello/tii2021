import React from 'react';

export const NewsContext = React.createContext();

export const NewsProvider = ({ children }) => {
    const [newsList, setNewsList] = React.useState([]);
    const [news, setNews] = React.useState(null);

    const listNews = () => {
        if (newsList.length == 0) {
            setNewsList([
                {
                    id: 1,
                    title: "Notícia 1",
                    subject: "Resumo da notícia 1",
                    content: "Conteúdo da notícia 1",
                    image: "https://via.placeholder.com/400/300"
                },
                {
                    id: 2,
                    title: "Notícia 2",
                    subject: "Resumo da notícia 2",
                    content: "Conteúdo da notícia 2",
                    image: "https://via.placeholder.com/400/300"
                },
                {
                    id: 3,
                    title: "Notícia 3",
                    subject: "Resumo da notícia 3",
                    content: "Conteúdo da notícia 3",
                    image: "https://via.placeholder.com/400/300"
                }
            ])
        }
    }
    // const createNews = ({ title, subject, content, image }) => {
    //     setNewsList([...newsList, { title, subject, content, image}])
    //  }
    // const updateNews = ({id, title, content, image}) => { }
    // const removeNews = (id) => { }
    const getNews = (id) => {
        setNews(newsList.find((news) => news.id == id));
    }

    return (
        <NewsContext.Provider value={{ newsList, news, listNews, getNews }}>
            {children}
        </NewsContext.Provider>
    )
}