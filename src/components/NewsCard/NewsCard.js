import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import useStyles from "./styles";
const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
  activeArticle,
}) => {
  if (urlToImage == null) {
    urlToImage =
      "https://cdn5.vectorstock.com/i/1000x1000/82/99/breaking-news-logo-template-vector-20608299.jpg";
    console.log(urlToImage);
  }
  const classes = useStyles();
  return (
    <Card
      className={classNames(
        classes.card,
        activeArticle === index ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classes.media} image={`${urlToImage}`} />
        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {new Date(publishedAt).toDateString()}
          </Typography>

          <Typography
            className={classes.title}
            variant='body2'
            color='textSecondary'
            component='h2'
          >
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant='h5'>
          {title}
        </Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' content='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary'>
          Learn More
        </Button>
        <Typography variant='h5' color='textSecondary'>
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
