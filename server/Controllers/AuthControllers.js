const { json } = require("express");
const UserModel = require("../Models/UserModel");

const jwt = require("jsonwebtoken")

const createToken = (id) => {
   return jwt.sign({ id }, "shohan super secret key", {
      expiresIn: "1h"
   })
}

module.exports.register = async (req, res, next) => { };

module.exports.login = async (req, res, next) => {
   try {
      const { email, password } = req.body
      const user = await UserModel.create({ email, password })
      const token = createToken(user._id);
      res.cookie('jwt', token, {
         withCredentials: true,
         httponly: false
      })
      res.status(201).json({ user: user_id, created: true })
   } catch (error) {

   }
};