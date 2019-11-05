const jwt = require("jsonwebtoken");

module.exports = (req,res, next)=>{
    const authHeader = req.get("Authorization");
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(" ")[1]; // separate Bearer and the token value
    if(!token || token ===""){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, "somesupersecretkey");
    } catch (err){
        req.isAuth = false;
        return nexxt();
    }
    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
}