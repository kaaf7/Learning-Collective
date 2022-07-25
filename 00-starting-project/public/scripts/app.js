const fs = require('fs'); // required for reading the data in the JSON file and it is called filesystem+

const path = require('path');

const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();


// using the method set for setting the views using the below 2 lines to unlock the templating feature
// using 'views' and 'views' engine are names undertood by express and then adding a path to the folder where the templates are
const  ejsPath = path.join(__dirname, 'public');
app.set('views', ejsPath);
// setup the view engin using ejs package and then we replace .html with .ejs
app.set('view engine', 'ejs');



//middleware
app.use(express.static('public'));// to get static data from one main folder caled public to make thing easier

app.use(express.urlencoded({ extended: false}));// make sure to check this online again??


app.get('/', function(req, res){
    //const htmlFilePath = path.join(__dirname, 'public', 'index.html')
    //res.sendFile(htmlFilePath);
    //now we will use render() method for ejs
     res.render('index');

});


app.get('/restaurants', function(req, res){
//const htmlFilePath = path.join(__dirname,'public', 'restaurants.html');
//res.sendFile(htmlFilePath);
// added in restaurant.ejs to fetch the data in form of dynamic data and place into this variable <%= numberOfrestaurant %>  
const filePath = path.join(__dirname,'public', 'restaurants.json')
const readData = fs.readFileSync(filepath);
const parsedRestaurantsName = JSON.parse(readData);
// the parsedRestaurantsName.length   is the value we want  numbeOfRestaurant which is array length
res.render('restaurants',{numberOfrestaurant: parsedRestaurantsName.length  } ); });


app.post('/restaurants');

app.get('/confirm', function(req, res){



const htmlFilePath = path.join(__dirname, 'public', 'confirm.html')
res.sendFile(htmlFilePath);

})

app.post('/confirm');

app.get('/recommend',function(req, res){

    const htmlFilePath = path.join(__dirname, 'public', 'recommend.html')
    res.sendFile(htmlFilePath);
})

//this is the method to post the data from the form in to our JSON file
app.post('/public/recommend', function(req,res){

    const restaurantName = req.body;
    const filePath= path.join(__dirname,'data', 'restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants= JSON.parse(fileData); 
    storedRestaurants.push(restaurantName);
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
    res.redirect('http://127.0.0.1:5500/views/confirm');
})


app.post('/recommand', function(req,res){

    const restaurantName = req.body; // take the date from the form body
    const filePath = path.join(__dirnamem, 'dataFile', 'json.json'); // connecting paths
    const fileData = fs.readFileSync(filePath);
    const storedFileRestaurant = JSON.parse(fileData); // read the existing json file
    storedFileRestaurant.push(restaurantName);
    fs.writeFileSync(filepath, JSON.stringify(storedFileRestaurant));

});



app.post ('/directory', function(req, res){

const enteredData = req.body;
const newPath = path.join(__dirname, 'datafolder', 'data.json');
const readData = fs.readFileSync(newPath);
readData.push(enteredData);
fs.writeFileSync(newpath,JSON.stringify(readData));



})



app.post('/recommend', function(req,res){

    const restaurantName= req.body;
    const filepath = path.join(__dirname, 'data', 'jasonfile.json');
    const fileData= fs.readFileSync(filepath);
    const storedRestaurant = JSON.parse(fileData);
    storedRestaurant.push(restaurantName);



})


app.post('recommend', function(req,res){

const recRestaurants = req.body;
const filepath = path.join ( __dirname, 'data', ' restaurant.json');
const fileData = fs.readFileSync(filepath);
const storedData = JSON.parse(fileData);
storedData.push(restaurantName);
fs.writeFileSync(filepath, JSON.stringify(storedRestaurants));

})







// app.post('recommend', function(req, res){
//  const restaurantName = req.body;
//  const filePath = path.join(__dirname, 'public', 'restaurants.json');

//  const fileData = fs.readFileSync(filePath);
//  const storedRestaurant = JSON.parse(fileData);

// storedRestaurant.push(restaurantName);

// fs.writeFileSync(filePath,JSON.stringify(storedRestaurant));

// res.redirect('/confirm');


// });
app.get ('/about', function(req, res){
    const htmlFilePath= path.join(__dirname,'public', 'about.html')
    res.sendFile(htmlFilePath);

})
app.post('about');
app.listen(3000);