import React from 'react'
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { rhythm } from '../utils/typography';


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render () {
    return (
      <div>
        <Container
          style={{
            maxWidth: '100%',
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 10,
          }}
        >
          <MuiThemeProvider>
            {this.props.children}
          </MuiThemeProvider>
        </Container>
      </div>
    );
  },
});
