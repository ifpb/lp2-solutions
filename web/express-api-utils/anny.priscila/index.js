const express = require('express');
const app = express();
app.use(express.json());

function Lcase (t) {
    return t.toLowerCase();
};

function Ucase (t) {
    return t.toLowerCase();
}

app.post('/lowercase', (req, res) => {
    const {input} = req.corpo;
    const resultado = {
        action: 'lowercase',
        input: 'input',
        output: Lcase(input)
    };
    res.json(resultado);
});

app.post('/uppercase', (req,res) => {
    const {input} = req.corpo;
    const resultado = {
        action: 'uppercase',
        input: 'input',
        output: Ucase(input)

    };
    res.json(resultado);
})

app.listen(3000);