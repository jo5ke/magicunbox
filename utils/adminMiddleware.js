const accessLevelCheck = (req, res, next) => {
    if(req.user){
        if(req.user.accessLevel !== 2) {
            res.redirect('/')
        } else {
            next();
        }
    }else{
        res.redirect('/#login')
    }
}

module.exports = accessLevelCheck