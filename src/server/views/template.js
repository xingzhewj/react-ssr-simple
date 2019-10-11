export default `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%- title %></title>
    <script>window._INITIAL_STATE=<%- initialState %></script>
</head>
<body>
    <div id="root"><%- htmlMarkup %></div>
    <script type="text/javascript" src="client.js"></script>
</body>
</html>`;