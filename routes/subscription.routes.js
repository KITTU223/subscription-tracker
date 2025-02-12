import { Router } from "express";
import  authorize  from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:'Get all subscriptions'}));

subscriptionRouter.get('/:id',(req,res)=>res.send({title:'Get subscriptions details'}));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id',(req,res)=>res.send({title:'Update subscriptions'}));

subscriptionRouter.delete('/:id',(req,res)=>res.send({title:'Delete subscriptions'}));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',(req,res)=>res.send({title:'Cancel subscriptions'}));

subscriptionRouter.get('/upcoming-renewals', (req,res)=>res.send({title:'Get upcoming renewals'}))


export default subscriptionRouter;