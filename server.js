const express = require('express'); //express js
const hbs = require('hbs'); // handlebars
const fs = require('fs'); //file system


const port = process.env.PORT || 3000;

var app = express();


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs'); // sets view engine to hbs


app.use((req, res, next) => { //"next" will keep the app from progressing until next is called
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log); // tilde quotes only

  // Below code creates and updates server log

  // fs.appendFile('server.log', log + '\n', (err) => {
  //   if (err) {
  //     console.log('Cannot append file')
  //   }
  // });

  next();
});

// app.use((req, res, next) => { //without calling next this will render the maintenance page
//   res.render('maintenance.hbs')
// });

app.use(express.static(__dirname + '/public')); //Make sure to use double underscore. Dir name gets directory so we can move the whole project


app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => { // sets up get commands. req = request res = respond
  res.render('home.hbs', {
    welcomeMessage: 'Welcome to first node.js website',
    pageTitle: 'Welcome Page'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects Page'
  })
});

app.get('/reportPage', (req, res) => {
  res.render('reportPage.hbs', {
    pageTitle: 'Report a Problem'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
