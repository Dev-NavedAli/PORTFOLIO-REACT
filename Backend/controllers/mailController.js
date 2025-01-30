import nodemailer from 'nodemailer';



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
        to:process.env.EMAIL_USER,
        subject: `PORTFOLIO CONTACT  name:${name}`,
        message:message
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);  
        }else{
            console.log('Mail send succesfully');
            res.redirect('/')
        }
    })
}

export {sendMail}