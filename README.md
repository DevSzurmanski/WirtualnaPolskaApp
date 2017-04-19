# Wirtualna Polska App

React-Apollo stack.


## How to start

1. Clone the repository.
2. Install dependencies (npm)
3. Turn on CORS in your browser*
4. Use `npm start` in the project root directory
5. Enter in your browser: `localhost:3000`

## More about CORS

Temporary I use the proxy `https://cors-anywhere.herokuapp.com/` so you dont't need to make some changes in your browser. It's not safe and it's slower than just make a change in your browser, but it's the easiest way to handle that. If I have enough time, I'll make my own proxy in node.

## Errors

- Sometimes API respond with an empty array, where should be contests of the article. When that happen you'll see an information about it. 
- Sometimes API does other unexpected things probably depended on lunar phases, but almost all of them app treats like a network error. It displays a static data.
- React-bootstrap had some troubles with RWD. Changed `Row` with a div works better for lists.

## To-Do

- Make a CORS proxy
- Weather
- Tests