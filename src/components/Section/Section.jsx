import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Grid,
  Typography,
  Button,
  styled,
  IconButton,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './Section.module.css';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '30px 0',
});

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      color: 'black',
    },
  })
);

const Section = ({ Heading, Text, image = '', imagealt = '' }) => {
  const classes = useStyles();
  return (
    <div className={styles.items}>
      <div className={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h3" gutterBottom>
                    {Heading}
                  </Typography>
                  <div className={styles.text}>
                    <Typography variant="body1" gutterBottom align="justify">
                      {Text}
                    </Typography>
                  </div>
                  <Grid item xs={12}>
                    <a
                      href="https://www.linkedin.com/in/marcel-schmager-5714549a/"
                      target="noopener"
                    >
                      <IconButton aria-label="upload picture" component="span">
                        <LinkedInIcon
                          className={classes.icon}
                          fontSize="large"
                        />
                      </IconButton>
                    </a>
                    <a href="https://github.com/tobeje" target="noopener">
                      <IconButton aria-label="upload picture" component="span">
                        <GitHubIcon className={classes.icon} fontSize="large" />
                      </IconButton>
                    </a>
                  </Grid>
                </Grid>

                <Grid container justify="center" item xs={12} md={4}>
                  <Grid container item xs={12}>
                    <img
                      className={styles.sectionimg}
                      src={image}
                      alt={imagealt}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MyButton href="contact">Kontakt</MyButton>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Section.propTypes = {
  Heading: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  image: PropTypes.string,
  imagealt: PropTypes.string,
};

Section.defaultProps = {
  image: '',
  imagealt: '',
};

export default Section;
