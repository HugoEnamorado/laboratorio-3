const express = require('express');
const PORT = 80;
const app = express();

app.listen(PORT, function() {
     console.log(`My http server listening on port ${PORT} ...`)

});

app.get('/foo', function(req, res) {
    console.log('Helo, I am foo.');

});
