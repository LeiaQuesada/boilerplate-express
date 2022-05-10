# server.js

In the first two lines of the file myApp.js, you can see how easy it is to create an Express app object.

This object has several methods:

- app.listen(port). It tells your server to listen on a given port, putting it in running state.

In Express, routes takes the following structure:
app.METHOD(PATH, HANDLER).

- METHOD is an http method in lowercase.
- PATH is a relative path on
  the server (it can be a string, or even a regular expression).
- HANDLER is a
  function that Express calls when the route is matched.
  Handlers take the form
  function(req, res) {...}
  where req is the request object, and res is the response object

## Serve an HTML File

You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler.
Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type.
Then it will read and send the file.
This method needs an absolute file path.
We recommend you to use the Node global variable \_\_dirname to calculate the path like this:

absolutePath = \_\_dirname + relativePath/file.ext

## Serve Static Assets

An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images).

In Express, you can put in place this functionality using the middleware express.static(path), where the path parameter is the absolute path of the folder containing the assets.
Middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method app.use(path, middlewareFunction). The first path argument is optional. If you don’t pass it, the middleware will be executed for all requests.

To serve static assets from the public folder you can use the express.static() method as the middleware which takes the endpoint and the absolute path to the directory containing the static assets as arguments and exposes the files in that folder at the given endpoint. By default, if the endpoint is not passed to the method, the folder is exposed at the root endpoint i.e. / for the application.

The \_\_dirname variable is a string containing the absolute path to the root of your project which has to be concatenated with the folder containing the assets.
