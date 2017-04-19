import {gql} from 'react-apollo';

// Fetch "wszystkie"
export function fetchAll() {
    return (gql `
  query Query{
          tileset(t:[Article]) {
                  title,
                  url,
                  img{
                      url
                    }
            }
        }
 `)
};
// Fetch "tech, gwiazdy, wiadomosci"
export function fetchCategory(fetchData) {

    return (gql `
  query Query{
          articles(service:[${fetchData}], t:[Article]) {
                  title,
                  url,
                  img{
                      url
                    }
            }
        }
 `)
};
// Fetch single article
export function fetchPost() {
    return (gql `
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
 `)
};