import express from 'express'
import route from '../routes/video'

const app = express()


app.use(route)


export default app



