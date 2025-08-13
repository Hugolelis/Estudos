// crinado model
import express from 'express'
import exphbs from 'express-handlebars'
import { sequelize as conn } from './db/conn.js'

import { User } from './models/User.js'

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))
}).catch(e => {
    console.log(e)
})
