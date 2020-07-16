const Fond = require('../models/Fond');

exports.addFond = async (req, res) => {
    try {
        const {fondNumber, fondName} = req.body;
        const fond = new Fond({
            fondName,
            fondNumber
        });
        await fond.save();
        res.status(200).json({message: 'Фонд успішно додано'});
    } catch(e) {
        console.log(e)
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};
