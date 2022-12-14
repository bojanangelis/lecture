async function login(req, res, callback){
    try {
        const user = await User.findOne({email: req.body.email})
        const isMatch = await User.comparePassword(req.body.password)
        if(!isMatch) return res.status(401).send('Incorrect password')
        else{
            const payload = {id: user._id, email: user.email}
            const jwt = await jwt.sign(payload, config.secret, {},)
        }
        user.token = token
        const success = await user.save()
        res.json({token})
    } catch(err) {
        return callback(err)
    }
}