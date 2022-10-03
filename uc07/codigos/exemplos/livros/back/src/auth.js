const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (!req.headers.authorization)
        res.status(401).send("Token não informado");

    const token = req.headers.authorization.substring(4);
    const verified = jwt.verify(token, 'chavesecreta');
    req.usuario_id = verified.usuario_id;
    
    next();
}