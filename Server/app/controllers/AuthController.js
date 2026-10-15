const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const Usermodel = require("../model/usermodel");
const {JWT_SECRET} = require("../utils/constants.utils")

const AuthController = {
    async register(req, res){
        const body = req.body;
        const hashedPassword =  await bcrypt.hash(body.password, 10);
        try {
            await Usermodel.create({
                ...body,
                password: hashedPassword
            })
            res.status(201).send({
                message: "User registered successfully"
            });
        } catch (error) {
            res.status(500).send({
                message: error?.message || "something went wrong",
                error
            });
        }
    },
    async login(req, res) {
        const body = req.body;
        const [user] = await Usermodel.find({ email: body.email });
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        else {
            const isPasswordValid = await bcrypt.compare(body.password, user.password);
            if (!isPasswordValid) {
                return res.status(401).send({
                    message: "password is incorrect"
                });
            }else {
                const token = jwt.sign({
                    id: user._id,
                    email: user.email,
                    name: user.name
                }, JWT_SECRET)
                res.send({
                    message: "Login successful",
                    token
                });
            }
        }
    }
}

module.exports = AuthController