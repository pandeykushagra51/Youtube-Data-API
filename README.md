# fampay-project

Supported APIs
1) get request on root i.e "http://localhost:3000/"
   additional optional query parameter like pageNumber and limit can be added e.g. "http://localhost:3000/?query=sports&pageNumber=4&limit=5" url provide the 4th page      with 5 results
2) get request with path /search i.e  "http://localhost:3000/search?query=sports" search also require a query parameter named "query" as shown in example,
    optionally pageNumber and limit paramter can also be added e.g. "http://localhost:3000/search?query=sports&pageNumber=4&limit=3"
3) A post API supporting feature to add api key for youtube.
    To put post request specify the path as /addkey/{key} here key is the parameter containing actual value of key
In all get request default value of pageNumber and limit is 1,10 respectively.


Steps to clone and run by copying local repository

1) Run "git clone https://github.com/pandeykushagra51/fampay-project.git" in terminal
2) Move to directory in which project is cloned e.g run "cd fampay-project" in terminal
2) Run "npm install" in terminal
3) Run "npm start" in terminal and the server will run by default on port 3000, server can be started on differnt port by passing PORT=num in environment variable
    e.g "PORT=8080 npm start"
4) now go to browser or any API calling tool to create a get request


Steps to run docker file
1) Run "git clone https://github.com/pandeykushagra51/fampay-project.git" in terminal
2) move to directory in which project is cloned e.g run "cd fampay-project" in terminal
3) Run "docker build -t fampay ." in terminal
   here the docker file will be build with tag fampay(or any other that you want)
4) Run "docker run -p 8080:3000 -d fampay" to run in detached mode and forwarding port 8080 to 3000, note, now in url port number should be 8080
5) Now open browser and put the specified API request

Addition added features:
1) added full text search feature with scoring facility so that optimized search can be done
2) Added way to supplying multiple API keys


