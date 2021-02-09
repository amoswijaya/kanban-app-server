const {Task} = require('../models')
const authorize = (req, res, next) =>{
    Task.findOne({
        where:{
            id: +req.params.id
        }
    })
    .then((Task) => {
        if(!Task) throw  {name:'customError' ,code: 404 ,msg:'data not found'}
        if(req.decode.id != Task.UserId){
            throw {name:'customError' ,code: 401,msg:'cannot accses this Task'}
        }else{
            next()
        }
    }).catch((err) => {
        next(err)
    });
}

module.exports= authorize