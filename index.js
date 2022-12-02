import express from 'express'
import { connectDB } from './Database/connectDB.js';
import { hostelRoutes } from './Routes/hostel.routes.js';
import { userRoutes } from './Routes/user.routes.js';
import cors from 'cors'
import { authMiddleware } from './Middleware/auth.middleware.js';

const app = express();
app.use(cors())
app.use(express.json())
app.use(authMiddleware)
app.use('/auth', userRoutes);
app.use('/',hostelRoutes)

app.listen(3020, async () => {
    await connectDB();
    console.log("result");
})
