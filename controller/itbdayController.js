
exports.index = function (req, res) {
    const {code} = req.body;
    if (code == "LET5EK5PL0R3Y0U12DR34M"){
        res.status(200).json({
            status: "success",
            meet: "https://meet.google.com/ggx-mrgx-qpu"
        });
    } else {
        res.status(400).json({
            status: "error",
            meet: "???"
        });
    }
};