const express = require('express');
let CHARACTER = require('../data/character-data');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(CHARACTER);
});

router.post('/', (req, res) => {
    const newChar = req.body;
    if (CHARACTER.length < 1) {
        newChar.id = 1;
    } else{
        const lastId = CHARACTER[CHARACTER.length -1].id;

        newChar.id = lastId + 1;
    }
        CHARACTER.push(newChar);
        res.sendStatus(200);
});

module.exports = router;