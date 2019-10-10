
import Koa from 'koa'
import api from './routes/api'
const app = new Koa()

// routes
app.use(api.routes(), api.allowedMethods())

app.listen(3001)
console.log('Server listening on localhost:3001')