const ErrorResponse=require('../utils/errorResponse');

const errorHandler = (err,req,res,next)=>{
  let error={...err};
  console.log(err.message);
  res.status(err.statusCode || 500).json({
    success:false,
    error:err.message || 'internal server error'
  })
}
module.exports=errorHandler