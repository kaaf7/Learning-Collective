const app = require('express')();
app.get( '/',function(req,res){
res.send('Hi There')

});
app.listen();
