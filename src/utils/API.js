import axios from "axios";
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.REACT_APP_SENDGRID_API_KEY;

export default {
  getRepos: function () {
    return axios.get("https://api.github.com/users/the-medium-place/repos")
  },

  getRepoLanguages: function (repoName) {
    return axios.get(`https://api.github.com/repos/the-medium-place/${repoName}/languages`)
  },

  getRepoReadme: function (repoName) {
    return axios.get(`https://api.github.com/repos/the-medium-place/${repoName}/contents`)
  },

  getReadmeContent: function (readmeURL) {
    return axios.get(readmeURL)
  },

  sendMail: function (input) {
    sgMail.setApiKey(API_KEY);
    const msg = {
      to: 'zgstowell@gmail.com',
      from: 'zgstowell@gmail.com',
      subject: `from ${input.username}`,
      text: input.userMessage,
      html: `<strong>NAME: ${input.username} <br> EMAIL: ${input.userEmail} <br> MESSAGE: ${input.userMessage}</strong>`,
    };
    console.log(msg)
    // sgMail.send(msg).catch(err => console.log(err));

    //ES6
    sgMail
      .send(msg)
      .then(() => { }, error => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }
      });
    //ES8
    // (async () => {
    //   try {
    //     await sgMail.send(msg);
    //   } catch (error) {
    //     console.error(error);

    //     if (error.response) {
    //       console.error(error.response.body)
    //     }
    //   }
    // })();
  }


}