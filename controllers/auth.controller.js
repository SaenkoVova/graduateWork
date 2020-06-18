const { validationResult } = require("express-validator");
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const ObjectID = require('mongoose').Types.ObjectId;

exports.getUser = async (req, res) => {
  try {
      const payload = req.body;
      let decoded = jwt.verify(payload.token, config.get('jwtSecret'));
      if (decoded.userId) {
          const user = await User.findOne({_id: ObjectID(decoded.userId)});
          await res.json({token: payload.token, userId: user.id, firstName: user.firstName, secondName: user.secondName, connectionDate: user.connectionDate});
      }
  }  catch (e) {
      res.status(500).json({message: "Щось пішло не так, спробуйте знову"});
  }
};

exports.signUp = async (req, res) => {
    console.log(req.body);
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні данні при реєстрації'
            })
        }
        const {firstName, secondName, email, password} = req.body;
        const candidate = await User.findOne({email});

        if(candidate) {
            return res.status(400).json({ message: 'Користувач уже існує' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({firstName, secondName, email, password: hashedPassword, bookmarks: [] });
        await user.save();
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        );
        await res.json({token,
            userId: user.id,
            firstName: user.firstName,
            secondName: user.secondName,
            connectionDate: user.connectionDate});
    }
    catch (e) {
        console.log(e)
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};

exports.signIn = async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні данні при вході'
            })
        }
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({message: 'Користувача не знайдено'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Некоректний пароль'});
        }
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        );

        await res.json({token,
            userId: user.id,
            firstName: user.firstName,
            secondName: user.secondName,
            connectionDate: user.connectionDate});
    }
    catch (e) {
        res.send(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};
