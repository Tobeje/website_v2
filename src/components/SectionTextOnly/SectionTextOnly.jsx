import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography } from '@material-ui/core';
import styles from './SectionTextOnly.module.css';

const Section = ({ Heading, Text }) => {
  return (
    <div className={styles.items}>
      <div className={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h3" gutterBottom>
                    {Heading}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {Text}
                  </Typography>
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
};

export default Section;
