# fampay-project

Supported APIs
1) get request on root i.e "http://localhost:3000/"
   additional optional query parameter like pageNumber and limit can be added e.g. "http://localhost:3000/?query=sports&pageNumber=4&limit=5" url provide the 4th page      with 5 results
2) get request with path /search i.e  "http://localhost:3000/search?query=sports" search also require a query parameter named "query" as shown in example,
    optionally pageNumber and limit paramter can also be added e.g. "http://localhost:3000/search?query=sports&pageNumber=4&limit=3"


steps to clone and run by copying local repository

1) run "git clone https://github.com/pandeykushagra51/fampay-project.git" in terminal
2) run "npm install" in terminal
3) run "npm start" in terminal and the server will run by default on port 3000, server can be started on differnt port by passing PORT=num in environment variable
    e.g "PORT=8080 npm start"
4) now go to browser or Postman to create a get request


