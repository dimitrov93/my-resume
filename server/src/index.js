const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/initDB');
const app = express();
// const cors = require("cors");
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');

const cors = require('./middlewares/corseMiddleware');

const headerRoute = require('./routes/header');

app.use((req,res) => {
    res.send('Resume server is running!')
})

app.use((req, res, next) => {
    console.log(`METHOD: ${req.method} >> PATH: ${req.path}`);
    next();
})

app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(auth)

app.use('/api/header', headerRoute)

// app.use("/api/auth", authRoute)
// app.use("/api/users", userRoute)
// app.use("/api/tasks", taskRoute);
// app.use("/api/messages", messageRoute);


dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
