import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=> res.send({title:'GET All Users'}));

userRouter.get('/:id',(req,res)=> res.send({title:'GET Users Details'}));

userRouter.post('/',(req,res)=> res.send({title:'Create New Users'}));

userRouter.put('/:id',(req,res)=> res.send({title:'Update User'}));

userRouter.delete('/:id',(req,res)=> res.send({title:'Delete Users'}));

export default userRouter;