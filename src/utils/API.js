import axios from "axios";
import sgMail from '@sendgrid/mail';


export default {
    getRepos: function(){
        return axios.get("https://api.github.com/users/the-medium-place/repos")
    },

    sendMail: function(input){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'zgstowell@gmail.com',
      from: input.userEmail,
      subject: `from ${input.username}`,
      text: input.userMessage,
      html: `<strong>${input.userMessage}</strong>`,
    };
    console.log(msg)
    sgMail.send(msg).catch(err=>console.log(err));
    }
};