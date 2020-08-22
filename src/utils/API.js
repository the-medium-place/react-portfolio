import axios from "axios";
import sgMail from '@sendgrid/mail';


export default {
    getRepos: function(){
        return axios.get("https://api.github.com/users/the-medium-place/repos")
    },

    sendMail: function(input){
    sgMail.setApiKey('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');
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