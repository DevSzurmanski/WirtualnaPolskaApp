import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import _ from 'lodash';

export default (props) =>{
var {data} = props.data;
 if (data.loading) {
      return (
      <div className="loader"/>
      )
    }

    if (data.error) {
      console.log(data.error)
      return (<div>An unexpected error occurred</div>)
    }

// Delete duplicates and make an array with max 3 object's arrays to map with row
var uni = _.uniqBy(data.tileset, 'title');
var sampled = _.chunk(uni, 3);



    return (
  <div className="abc">
       <Grid>
           
               {sampled.map(arr => 
               <Row key={arr[0].title}>
                  { arr.map(data =>
                  <Col sm={6} md={4} key={data.title} >
<div className="animate-bottom">
                      <Link to={"/"+ data.url.replace(/\//g,"===")}>
            <div className='tile' style={{backgroundImage : `url(${data.img.url})`}} />
            <h4>{data.title}</h4>
              </Link>
              </div>
            </Col>
                   )}
               </Row>
               )}
            
     
      </Grid>
      
</div>
    )
  }

