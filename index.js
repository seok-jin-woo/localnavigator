const express = require('express'); 
const app = express();              

app.get('/', (req, res) => {    
  return res.render('index', {title: "제목", max: 5});  
});


app.listen(3001, () => {       
  console.log('Server started at http://localhost:3001');

  app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');         


});