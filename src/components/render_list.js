import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import _ from 'lodash';

export default (props) =>{
 if (props.view.data.loading) {
      return (
      <div className="loader"/>
      )
    }

    if (props.view.data.error) {
      console.log(props.data.data.error)
      return (<div>An unexpected error occurred</div>)
    }
// Type depended on site needed to read data from other requests
var dataWithType = `props.view.data.${props.type}`;

// Delete duplicates and make an array with max 3 object's arrays to map with row
var uni = _.uniqBy(eval(dataWithType), 'title');
var sampled = _.chunk(uni, 3);



    return (
  <div className="abc">
       <Grid>
           
               {sampled.map(arr => 
               <Row key={arr[0].title} className="row-eq-height">
                  { arr.map(single =>
                  <Col sm={6} md={4} key={single.title} >
<div className="animate-bottom divWrapper" >
                      <Link to={"/wszystkie/"+ single.url.replace(/\//g,"===")}>
            <div className='tile' style={{backgroundImage : `url(${single.img.url})`}} />
            <div className="title">
            <h4>{single.title}</h4>
            </div>
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

