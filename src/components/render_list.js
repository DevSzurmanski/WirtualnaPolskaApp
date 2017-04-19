import React from 'react';
import {Grid, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import _ from 'lodash';

import {staticTileset, staticTech, staticGwiazdy, staticWiadomosci} from './staticData/data';

export default(props) => {

  if (props.view.data.loading) {
    return (<div className="loader"/>);
  }

  // if any errror (internet connection or anything) just take static data for single category
  var staticOrDynamic = "";
  if (props.view.data.error) {
    var isError = 'Brak połączenia z serwerem. Załadowano dane statyczne.';
    switch (props.forStatic) {
      case 'tileset':
        staticOrDynamic = staticTileset;
        break;
      case 'tech':
        staticOrDynamic = staticTech;
        break;
      case 'gwiazdy':
        staticOrDynamic = staticGwiazdy;
        break;
      case 'wiadomosci':
        staticOrDynamic = staticWiadomosci;
        break;
      default:
        break;
    }
  } else {
    staticOrDynamic = props.view.data;
  };

  // Checking type of data structure
  var dataWithType = "";
  var properData = (type) => {
    if (type === 'tileset') {
      dataWithType = staticOrDynamic.tileset;
      return dataWithType;
    } else {
      dataWithType = staticOrDynamic.articles;
      return dataWithType;
    }
  };

  // Delete duplicates and make an array with max 3 object's arrays to map with row
  var uni = _.uniqBy(properData(props.forStatic), 'title');
  var sampled = _.chunk(uni, 3);

  return (
    <div className="abc">
      <Grid>
        <div className="isError">{isError}</div>
        {sampled.map(arr => 
          <div key={arr[0].title}>
          {arr.map(single => 
            <Col sm={6} md={4} key={single.title}>
            <div className="animate-bottom divWrapper">
              <Link to={"/posts/" + single.url.replace(/\//g, "===")}>
                <div className='tile' style={{backgroundImage: `url(${single.img.url ? single.img.url : 'noimg.png'})`}}/>
                <div className="title">
                  <h4>{single.title}</h4>
                </div>
              </Link>
            </div>
          </Col>
          )}
        </div>
        )}
      </Grid>
    </div>
  );
};
