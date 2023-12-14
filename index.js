require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const router = require('./routes/users.js');
const logRequest = require('./middleware/logs.js');

const app = express();

app.use(logRequest);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);


app.listen(PORT, () => {
    console.log(`Server berhasil di running di ${PORT}`);
});