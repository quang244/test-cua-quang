const path = require('path')
const express = require('express')
const morgan = require('morgan')                  // quan sat thay doi gui ve sever
const abc = require('express-handlebars');
// const { join } = require('path')
const port = 3000
const app = express()                             



app.use(morgan('combined'))           

app.engine('.hbs' ,abc.engine({
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join (__dirname,'resources/views') )
//hoac viet //
// app.set('views', './src/resources/views')


app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`dang chay tren cong ${port}`)
})