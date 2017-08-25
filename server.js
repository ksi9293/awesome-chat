var express = require('express');
var app = express();

app.set('views', `./views`);
app.set(`view engine`, `jade`);


app.locals.pretty = true;

app.listen(80, function()
{
    console.log(`Connected, 80 port!`);
});

app.get(`/topic/new`,function(req, res){
    res.render(`new`);
});

app.post(`/topic`, function(req, res){
    var args = [];
    args = req.accepts();
    for(var i = 0; i < args.length; i++)
        {
        res.send(`HI ${args[i]} POST`);    
        }
});