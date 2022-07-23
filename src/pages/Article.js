import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import articleContent from "../pages/article-content"
import Articles from '../components/Articles'
import CommentsList from '../components/CommentsList';
import { AddCommentForm } from '../components/AddCommentForm';

const Article = () => {

    const { name } = useParams();
    const article = articleContent.find((article) => {
        if (article.name === name) {
            return article;
        };
    });

    const [articleInfo, setArticleInfo] = useState({ comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json();
            console.log(body.comments);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) {
        return (
            <>
                <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900 text-center'>
                    Article {name} doesn't exist.
                </h1>
            </>
        )
    }
    const otherArticle = articleContent.filter(article => article.name !== name)
    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
                {article && article.title}
            </h1>
            {article && article.content.map((paragraph, index) => {
                return (<p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>);
            })}

            <CommentsList comments={articleInfo.comments} />

            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            
            <hr />
            <h1 className='sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900'>Other Articles</h1>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticle} />
            </div>
        </>
    );
};

export default Article;