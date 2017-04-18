import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import PropTypes from 'prop-types';

import {fetchCategory} from '../components/req';
import RenderedList from '../components/render_list';
class Wiadomosci extends Component{

static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      articles: PropTypes.array,
    }).isRequired,
  } 

  render () {
    return(
   <RenderedList view={this.props} type={"articles"}/>
    )
}
}



    
 
 const WiadomosciWithData = graphql(fetchCategory("Wiadomosci"))(Wiadomosci);
 export default WiadomosciWithData;