const express = require('express');
import tweetsRoutes from './src/routes/tweets'
import userRoutes from './src/routes/user'
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('api/tweets',tweetsRoutes);
app.use ('api/user', userRoutes);
