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
write dummy auth and user Middlewares except /user/login
write dummy middleware for admin
Error handling using app.use('/user', (err, req, res, next)); always use this below the routes

Create a free cluster on mongodb atlas
install mongoose
connect your application to the database
call the connectDB function and connect to DB before starting the application

create a userSchema
create a User Modal
create /sigup api to add data to database
push some document to db using api call from postman
error handling using try catch

Diff bw json and JS object
add express.json() middle ware to app
make signup api to receive data from the end user (postman)

create Api to get user by emailId
crate api to get all the users
create a delete user API
diff bw patch and put api
create a patch api to update the user data