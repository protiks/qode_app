import express from 'express'
import bodyParser from 'body-parser'
import api from './routes/api'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const app = express()
const port = process.env.PORT || 3002
const swaggerDocument = YAML.load('./swagger.yaml')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', api)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

console.log('Starting server...')
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);
});
