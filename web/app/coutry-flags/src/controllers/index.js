const Flags = require("../models/Flag");

const index = (req, res) => {
    const flags = Flags.readFlags();

    res.render('flags/index.njk', { flags })
}
const readFlags = (req,res) => {
    const flags = Flags.readFlags();

    res.json(flags)
};

module.exports = { index, readFlags }