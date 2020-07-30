import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BuildIcon from '@material-ui/icons/Build';
import CountUp from 'react-countup';
import cx from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={styles.items}>
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <TrendingUpIcon
                style={{
                  color: 'rgba(0, 0, 255, 0.5)',
                  width: '50px',
                  height: '50px',
                }}
              />
              <Typography variant="h4">Erfahrung</Typography>
              <Typography variant="h5">
                <CountUp end={10} redraw>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                Jahre
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Als Erfolgreicher Fenster, Türen und Garagen Bauer
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <ThumbUpIcon
                style={{
                  color: 'rgba(0, 255, 0, 0.5)',
                  width: '50px',
                  height: '50px',
                }}
              />
              <Typography variant="h4">Zufriedene Kunden</Typography>
              <Typography variant="h5">
                <CountUp end={100} redraw>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Unsere Kunden sind Zufrieden mit unsere Qualität
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <BuildIcon
                style={{
                  color: 'rgba(255, 238, 0, 0.5)',
                  width: '50px',
                  height: '50px',
                }}
              />
              <Typography variant="h4">Abgeschlossene Projekte</Typography>
              <Typography variant="h5">
                <CountUp end={100} redraw>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Wir schließen unsere Projekte schnellst möglich zur besten
                Qualität ab
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cards;
