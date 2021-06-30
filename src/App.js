import React, { useState, useEffect } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
  "bfc2a1925eebf2ae729835af96fa0ce42e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
          console.log(articles);
        } else if (command === "highlight") {
          setActiveArticle((prev) => prev + 1);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg'
          alt='alan logo'
          className={classes.alanLogo}
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};
export default App;
