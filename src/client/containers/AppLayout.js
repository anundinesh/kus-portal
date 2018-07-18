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
import Dashboard from '../containers/Dashboard';
import MiniDrawer from '../containers/MiniDrawer';

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
            <Route exact path="/" component={ServersPage} />
            <Route exact path="/users" name="home-users" component={NotFound} />
            <Route exact path="/dashboard" name="dashboard" component={Dashboard} />
            <Route exact path="/miniDrawer" name="miniDrawer" component={MiniDrawer} />

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
