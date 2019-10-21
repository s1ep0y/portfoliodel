const express = require('express');
const pug = require('pug');
const projectRouter = require('./routes/project')
const pageRouter = require('./routes/pages')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
require('./db/mongoose')

const app = express();
const port =  process.env.PORT || 3000;

app.set('view engine', 'pug')
app.use('/static', express.static('static'));
app.use(express.json())
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(projectRouter)
app.use(pageRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});


myFunction()