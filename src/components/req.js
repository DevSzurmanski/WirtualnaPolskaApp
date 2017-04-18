import React from 'react';
import {gql, graphql} from 'react-apollo';


export function  fetchAll() { 
    return(
    gql`
  query Query{
          tileset(t:[Article]) {
                  id,
                  title,
                  url,
                  img{
                      url
                    },
                  body(t:[Plain]) {
                     data,
      
              }
            }
        }
 `)
}
export function  fetchCategory(fetchData) { 
   
    return(
    gql`
  query Query{
          article(service:[${fetchData}], t:[Article]) {
                  id,
                  title,
                  url,
                  img{
                      url
                    },
                  body(t:[Plain]) {
                     data,
      
              }
            }
        }
 `)
}