import express from 'express'
import morgan from 'morgan'

import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'
import { createRoles } from './libs/initialSetup.js'

const app = express();
createRoles()

app.use(morgan('dev'));
app.use(express.json())

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

export default app;