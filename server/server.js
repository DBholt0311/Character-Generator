const express = require('express');
const characterRouter = require('./router/character-router');

// Create server
const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(express.static('server/public'));

//express routes
app.use('/characters', characterRouter);

// Start server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});