import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  styled,
  CircularProgress,
  Chip,
} from '@material-ui/core';
import { getPosts } from '../../api';
import styles from './ProjectList.module.css';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '30px 10px',
});
const ProjectList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setPosts(await getPosts());
    };

    fetchAPI();
  }, []);

  if (posts.length === 0) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={styles.items}>
      <div className={styles.container}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {posts.map((post) => (
            <Grid
              item
              xs={12}
              md={5}
              component={Card}
              key={post.id}
              className={styles.card}
            >
              <CardContent>
                <Typography variant="h2">{post.post_title}</Typography>
                <Divider component="li" />
                <img
                  className={styles.sectionimg}
                  src={post.post_heroimage}
                  alt="postimage"
                ></img>
                <Typography variant="body2" align="justify">
                  {post.post_shortext}
                </Typography>
                <MyButton href={`post/${post.id}`}>Read more...</MyButton>
                <MyButton href={post.post_github} target="noopener">
                  Github
                </MyButton>
                <div>
                  {post.post_tags.map((tag, i) => (
                    <Chip key={i} variant="outlined" size="small" label={tag} />
                  ))}
                </div>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProjectList;
