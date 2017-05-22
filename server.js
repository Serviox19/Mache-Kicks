const express = require('express');
const app = express();
const logger = require('morgan');
const PORT = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('*', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.listen(PORT, function(req, res) {
  console.log("Listening on PORT:" + PORT);
});
