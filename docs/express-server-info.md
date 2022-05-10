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
