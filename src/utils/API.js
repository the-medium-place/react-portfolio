import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

// const API_KEY = process.env.REACT_APP_SENDGRID_API_KEY;

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
    return axios.post("http://localhost:8080/sendmail", input);
  }


}