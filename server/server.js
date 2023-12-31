const express = require('express');
const partyRouter = require('./router/party-router');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

app.use('/party', partyRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});