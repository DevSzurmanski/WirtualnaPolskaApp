import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {gql, graphql} from 'react-apollo';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class AllPost extends Component{
      static contextTypes = {
    router: PropTypes.object
  };


render() {
if(this.props.data.loading){
    return (
    <div className="loader"/>
    );
} 
if(this.props.data.error){
return(
    <div> Error</div>
)}
var {article} = this.props.data;
return (
        <Grid>
            <div className="animate-bottom">
        <Row>
    <Link to="/">
<Button bsStyle="primary">Wróć</Button>
</Link>
<a href={article.url}>
<Button bsStyle="success">Link do artykułu</Button>
</a>
</Row>
<Row className="image">
<img src={article.img.url} />
</Row>
<Row>
<Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1}>
<h1>{article.title}</h1>
<h3>{article.body[0].data}</h3>
</Col>
</Row>
</div>
</Grid>
);
}
}



const fetchPost = gql`
  query Query($id: String!){
          article(url:$id){
              title,
              body(t: Plain){
                  data
              },
              img{
                  url
              },
              url
          }
        }
 `;
 const AllPostFetched = graphql(fetchPost, {
     options: (ownProps) => (
      
         {
variables: {
    id: `"${ownProps.params.id.replace(/===/g,"/")}"`
}
     })
 })(withRouter(AllPost));
 export default AllPostFetched;
