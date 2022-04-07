import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import router from 'express'
const app =router.Router()

const {user} =  new PrismaClient()

app.get('/',async (req: Request, res: Response) => {
    try{
        const users = await user.findMany({
            select:{
                username:true,
                post :true
            }
            
        })

     res.json(users)
    }
   catch(error){
     console.log(error)
   }

 })
 
 app.post('/',async(req: Request,res: Response)=>{
     try{
        
         const newuser = await user.create({
             data:{
                 username:req.body.username,
             }
         })
         res.json(newuser);

     }
     catch(error){

         console.log(error)
     }

 })


module.exports=app