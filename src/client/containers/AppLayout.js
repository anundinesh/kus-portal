import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import Paper from 'material-ui/Paper';

import AppBar from './AppBar';
import AppMenu from './AppMenu';
import ModalsLayout from './ModalsLayout/index';
import NotFound from './NotFound';
import ServersPage from './ServersPage/index';
import ProgressBar from '../components/ProgressBar';
import MiniDrawer from '../containers/MiniDrawer';
import Dashboard from '../containers/Dashboard';
import PredictiveAnalyst from '../containers/PredictiveAnalyst';
import MarketingAnalyst from '../containers/MarketingAnalyst';
import SupplyChain from '../containers/SupplyChain';
import DataEngineer from '../containers/DataEngineer';







export class AppLayout extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  };

  render() {
    const {loading} = this.props;

    return (
      <section>
        <MiniDrawer>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/users" name="home-users" component={NotFound} />
            <Route exact path="/predictive-analyst" name="predictive-analyst" component={PredictiveAnalyst} />
            <Route exact path="/data-engineer" name="data-engineer" component={DataEngineer} />
            <Route exact path="/supply-chain" name="supply-chain" component={SupplyChain} />
            <Route exact path="/marketing-analyst" name="marketing-analyst" component={MarketingAnalyst} />

            <Redirect to="/" />
          </Switch>
        </MiniDrawer>

        <ModalsLayout />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading')
  };
}

export default connect(mapStateToProps)(AppLayout);
