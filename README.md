# Wirtualna Polska App

React-Apollo stack.


## How to start

1. Clone the repository.
2. Install dependencies (npm)
3. Turn on CORS in your browser*
4. Use `npm start` in the project root directory
5. Enter in your browser: `localhost:3000`

## More about CORS

In this project I used WP's API in frontend and I had some issues with CORS. You can easy use a plugin to your browser or manually enable it and it will work. I will repair it soon, but I didn't want to use backend or proxies, so right now it works only with enabled CORS in the browser.

## Errors

Sometime API respond with an empty array, where should be contests of the article. When that happen you'll see an information about it. 

## To-Do

- Refactor
- Change some junky code like evals
- Beautify
- Make some magic with CORS
- Offline data
- Weather
