import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import PropTypes from 'prop-types';

import {fetchAll} from '../components/req';
import RenderedList from '../components/render_list';
class All extends Component{

static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      tileset: PropTypes.array,
    }).isRequired,
  } 

  render () {
    return(
   <RenderedList view={this.props} type="tileset" />
    )
}
}



    
 
 const ChannelsListWithData = graphql(fetchAll())(All);
 export default ChannelsListWithData;