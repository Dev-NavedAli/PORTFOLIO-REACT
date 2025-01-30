import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS 
    }
})

const sendMail = (req,res)=>{
    const {name,email,message} = req.body;

    const mailOptions = {
        from:email,
        to:process.env.EMAIL_RECIPIENT,
        subject:`Message form ${name}`,
        text:`Name:${name}\n Email:${email}\n Message:${message}`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);  
        }else{
            res.json({success:true,message:`Mail send succesfully`})
            console.log(`Mail send succesfully`);
        }
    })
}

export {sendMail}