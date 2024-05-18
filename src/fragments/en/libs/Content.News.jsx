import { useState } from "react";
import { Grid, Divider } from "@mui/material";

import {
  newsEn as news,
  opinionsEn as opinions,
} from "../../../constants/siteConstants";

import Title from "../../../ui/Title";
import ArticleDetail from "../../../ui/ArticleDetail";
import CardArticle from "../../../ui/Card.Article";

const ContentNews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState("");
  const handleToggle = (article) => {
    isOpen ? setContent(null) : setContent(article.content);
    isOpen ? setTitle("") : setTitle(article.title);
    setIsOpen((curr) => !curr);
  };
  return (
    <>
      <Grid container className="mb-[4rem] flex flex-col items-center">
        <Grid item className="w-[85dvw]">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1 className="text-center">Updates Articles</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              I have taken sometime to write a few articles and post some
              updates for my personal work and life. I have decided to post
              those as a way to share everything I feel with everyone.
            </p>
          </Grid>
        </Grid>
        <Grid container className="flex flex-col">
          <Grid item>
            <Grid container className="projects my-5 !px-[1rem]">
              {news.map((article) => (
                <Grid item key={article.title}>
                  <CardArticle
                    article={article}
                    handleClick={() => handleToggle(article)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="w-[30%]">
          <Divider className="divider" />
        </Grid>
        <Grid item className="w-[85dvw]">
          <Grid container className="p-4">
            <Grid item className="w-full">
              <Title divider className="text-center">
                <h1 className="text-center">Opinion Articles</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <p>
              Below there are some articles with some thoughts and opinions I
              wish to share with the community.
            </p>
          </Grid>
          <Grid container className="flex flex-col">
            <Grid item>
              <Grid container className="projects my-5 !px-[1rem]">
                {opinions.map((article) => (
                  <Grid item key={article.title}>
                    <CardArticle
                      article={article}
                      handleClick={() => handleToggle(article)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ArticleDetail
        handleToggle={handleToggle}
        open={isOpen}
        content={content}
        title={title}
      />
    </>
  );
};

export { ContentNews };
