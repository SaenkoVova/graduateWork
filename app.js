const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const LoadRoute = require('./routes/load.route');


const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/load', LoadRoute);

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    }
    catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();
