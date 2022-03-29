const bcrypt = require('bcrypt')
const { Router } = require('express')
const express = require('express')
const router = express.Router()


require("../database/Connection")
const User = require('../schema/loginSchema')

router.get('/', async (req, res) => {
    res.send('welcome to aarvi sweets....')
})

router.post('/signup', async (req, res) => {
    // res.send('signin stuff')

    const { name, email, phone, password, cpassword } = req.body

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(402).send('all fields are necessary')
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            res.send('user already exist!')
        } else if (password != cpassword) {
            res.send('password mismatch!')
        } else {
            const user = new User({ name, email, phone, password, cpassword })
            await user.save()

            res.send('signup successfully!')
        }

    } catch (error) {
        console.error();
    }
})

router.post('/signin', async (req, res) => {
    
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).send('all field are necessary')
        }

        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            if (!isMatch) {
                return res.status(400).send('invalid credential!')
            } else {
                const { name } = userLogin
                res.status(200).send(`welcome ${name}`)
            }

        } else {
            return res.status(400).send('user not exist!')
        }

    } catch (error) {
        console.error();
    }

})

module.exports = router