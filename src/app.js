const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");
const app = express();
const User = require("./models/register");
const {
  localStorage
} = require("node-localstorage");
// var localStorage = new LocalStorage('./scratch');
var bodyParser = require('body-parser');
const {
  check,
  validationResult
} = require('express-validator');
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
  res.render("index");
});
app.get('/Register', (req, res) => {
  res.render("Register");
});
app.get('/Login', (req, res) => {
  res.render("login");
});
app.get('/home', (req, res) => {
  res.render("home");
});
app.get('/About', (req, res) => {
  res.render("About");
});
app.get('/Avatar', (req, res) => {
  res.render("Avatar");
});
app.get('/Text', (req, res) => {
  res.render("TextToSpeech");
});
app.get('/Voice', (req, res) => {
  res.render("CloneVoice");
});
app.get('/Video', (req, res) => {
  res.render("GenerateVideo");
});


app.post('/Register', async (req, res) => {
  try {
    const password = req.body.pswd;
    const c_password = req.body.c_pswd;
    if (password === c_password) {
      const registerUser = new User({
        name: req.body.txt,
        email: req.body.email,
        password: req.body.pswd
      })
      const registered = await registerUser.save();
      res.status(201).render("index");
    } else {
      res.send("Password and confirmed password are not a match");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});


app.post('/Avatar', async (req, res) => {
  try {
    const emaill = req.body.email;
    const avatar = req.body.avatar;
    console.log(emaill);
    console.log(avatar);
    await User.updateOne({
      email: emaill
    }, {
      $set: {
        avatar: avatar
      }
    });
    res.status(201).render("home");
  } catch (error) {
    res.status(400).send("Invalid Email");
  }
});


app.post('/Login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.pswd;
    const userEmail = await User.findOne({
      email: email
    });
    if (userEmail.password === password) {

        const data={
          mail:userEmail.email,
        name:userEmail.name,
        avatar:userEmail.avatar,
        embedding:userEmail.embedding,

      }
      const datajson=JSON.stringify(data);
      res.redirect('/home?myVariable=' + datajson);
      // res.status(201).render("home");
    } else {
      res.send("Incorrect Password");
    }
  } catch (error) {
    res.status(400).send("Invalid Email");
  }
});

app.post('/Voice', async (req, res) => {
  try {
    const mail=req.body.usermail;
    const embedding=[{"sana":[1.2,1.3,1.4]},{"sara":[1.2,1.2,1.2]}];
    await User.updateOne({email:mail},{$set:{embedding:embedding}});
    const datajson=JSON.stringify(embedding);
    res.redirect('/Voice?myVariable=' + datajson);
    // res.status(200).render('home');
    // res.send(res.body.usermail);

  } catch (error) {
    res.status(400).send("Not Good");
  }
});




app.post('/LogOut', async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(400).send("Invalid Email");
  }
});


app.listen(port, () => {
  console.log('Server is running at port no ' + port);
})
