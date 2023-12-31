const express = require('express');
let PARTY = require('../data/party-data');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(PARTY);
});

router.post('/', (req, res) => {
    const newChar = req.body;
        PARTY.push(newChar);
        res.sendStatus(200);
});

module.exports = router;