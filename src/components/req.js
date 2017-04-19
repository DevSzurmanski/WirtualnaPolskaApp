import {gql} from 'react-apollo';


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
          articles(service:[${fetchData}], t:[Article]) {
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
export function fetchPost(){
  return( gql`
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
 `
  )
}