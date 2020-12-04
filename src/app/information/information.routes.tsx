import { makeStyles, Paper, Typography } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { Loading, NotFound } from '../components';
import { AboutAllies } from './components/about/about-allies';
import { AboutHC } from './components/about/about-hc';
import { AboutRules } from './components/about/about-rules';
import { FleetCarriers } from './components/about/fleetCarriers';
import { ShipReviews } from './components/guides/shipReviews';
import { docsList } from './components/docs/info-docs-list';
import { guidesList } from './components/guides/info-guides-list';
import { InfoSection } from './components/info-section';
import { toolsList } from './components/tools/info-tools-list';
import { InfoUSCLinks } from './components/info-usclinks';
import { Infographic } from './components/docs/infographic';
const ShipBuilds = lazy(() => import('./components/guides/shipBuilds'));

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  header: {
    textAlign: 'center',
  },
  paper: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  uscLinks: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  specialButton: {
    display: 'flex',
    flexDirection: 'column',
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
}));

export const Information = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={path}>
            <Typography variant='h2' className={classes.header}>
              USC Data Archive
            </Typography>
            <InfoUSCLinks />
            <Paper className={classes.paper}>
              <Typography variant='subtitle1'>
                New Players look to the{' '}
                <span className={classes.secondary}> blue buttons </span>for
                helpful tips in getting started with the Guides, Tools, and
                Documentation below.
              </Typography>
            </Paper>
            <InfoSection
              id='guides'
              key='guides'
              header='Guides'
              buttons={guidesList}
            />
            <InfoSection
              id='tools'
              key='tools'
              header='Tools'
              buttons={toolsList}
            />
            <InfoSection
              id='docs'
              key='docs'
              header='Documentation'
              buttons={docsList}
            />
          </Route>
          <Route path={`${path}/about/rules`}>
            <AboutRules />
          </Route>
          <Route path={`${path}/about/hc`}>
            <AboutHC />
          </Route>
          <Route path={`${path}/about/allies`}>
            <AboutAllies />
          </Route>
          <Route path={`${path}/about/fc`}>
            <FleetCarriers />
          </Route>
          <Route path={`${path}/builds`}>
            <ShipBuilds />
          </Route>
          <Route path={`${path}/reviews`}>
            <ShipReviews />
          </Route>
          <Route path={`${path}/cave`}>
            <Infographic img='cave-johnson' />
          </Route>
          <Route path={`${path}/stationmap`}>
            <Infographic img='station-map' />
          </Route>
          <Route path={`${path}/fss`}>
            <Infographic img='fss' />
          </Route>
          <Route path={`${path}/scoopable`}>
            <Infographic img='scoopable' />
          </Route>
          <Route path={`${path}/coriolis`}>
            <Infographic img='coriolis' />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
