import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MyNavbar from '../components/navbar';

injectTapEventPlugin();

export default class Index extends React.Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <MyNavbar />
          <h1>Hello from index</h1>
        </div>
      </DocumentTitle>
    );
  }
}
