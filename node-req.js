const express = require ('express');

const app = express();
app.use();

app.get('/currenttime', function (req, res){
    res.send('<h1> '+ new Date().toISOString()+' </h1>');}/* annonym function*/ );  //localhist:3000/currenttime
    app.listen(3000);

app.get('/', function(req, res){ 
    res.send('<form action=""/store-user><label> Your Name /label><input type="text" name="username"></form>')});

 app.post('/store-user', function(req, res){
    const userName= req.body.username;
    console.log(userName);
    res.send('<h1>  user name stored </h1>');

 })
 app.listen(3000);//localhist:3000
