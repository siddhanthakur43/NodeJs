Create A Repository
Iniatialize the project (git init)
package.json, package-lock.json, node_modules
install the express
create a server
listen to port 3000
write request handlers for /test, /hello
install nodemon and add scripts to package.json
dependencies
-g use
diff bw caret and tilde 

Play with routes and route handlers ex. /, /hello, /test
order of routes matters
test api calls in postman
write logic to handle all api call get,put,post, delete


handling mutiple route handlers
next()
next functions and error also with res.send();
app.use('/user', [rh1, rh2], rh3, rh4)
what is middlewares? 
how express js handles request behind the scenes
write dummt auth and user Middlewares except /user/login