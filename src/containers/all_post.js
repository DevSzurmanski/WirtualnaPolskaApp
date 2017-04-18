import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {gql, graphql} from 'react-apollo';
import {Grid, Row, Col} from 'react-bootstrap';


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
// Article validator - api sometimes responds with empty array
var art="";
if(this.props.data.article.body[0]){
      art = this.props.data.article.body[0].data;
} else{
     art="Api nie zwróciło treści artykułu. Aby się z nim zapoznać skorzystaj z przycisku z odnośnikiem do strony z artykułem"
    }
return (
        <Grid>
            <div className="animate-bottom">
        <Row>
    <Link to="/">
<Button bsStyle="primary">Wróć</Button>
</Link>
<a href={this.props.data.article.url}>
<Button bsStyle="success">Link do artykułu</Button>
</a>
</Row>
<Row className="image">
<img src={this.props.data.article.img.url} alt={this.props.data.article.title}/>
</Row>
<Row>
<Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1}>
<h1>{this.props.data.article.title}</h1>
{console.log(this.props.data.article)}
<h3>{art}</h3>
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
