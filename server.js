// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

var compression = require("compression");
var cors = require("cors");
const logger = require("morgan");
const sgMail = require('@sendgrid/mail');

require('dotenv').config();
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(compression());
app.use(logger("dev"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const CORS_ORIGIN = "http://localhost:3000";
app.use(cors({
    origin: [CORS_ORIGIN],
    credentials: true
}));

// ================================================================================
// ROUTER
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.post('/sendmail', ({ body },res) => {
        const username = body.name;
        const userEmail = body.email;
        const userMessage = body.message;
      
        const msg = {
          to: 'zgstowell@gmail.com',
          from: 'zgstowell@gmail.com',
          subject: `PORTFOLIO MESSAGE from ${username}`,
          text: `Hey Zac! You've received a message! From: ${username}, ${userEmail} || Message: ${userMessage}`,
          html: `Hey Zac! You've received a message!<br><br>From: ${username}<br>Email: ${userEmail}<br><br>Message: ${userMessage}`,
        };
        sgMail.send(msg).then(dat => {
            // console.log('message sent\n===========', dat)
            res.status(202).send('success');
        })
        .catch(err=>{
            console.error(err)
            res.status(500).send('unsuccess');
        });
})

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
        });