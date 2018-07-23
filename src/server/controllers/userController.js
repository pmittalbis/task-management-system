import bodyParser from 'body-parser';
import express from 'express';
import multer from 'multer';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import User from '../models/userModel';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage });
const router = express.Router();
router.use(cookieParser());
var sessionVar;

router.get('/AuthUser', (req, res) => {
  console.log("In auth user..");
  if (!sessionVar.user) {
    console.log("AuthUser not found === ", sessionVar);
    res.status(401).send();
  } else {
    console.log("AuthUser === ", sessionVar.user);
    res.send(sessionVar.user);
  }
});

router.get('/GetUser/:id', (req, res) => {
  const users = User.findOne({_id: req.params.id}, (err, record) => {
    if (err) { res.send("Error in fetching user!") }
    if (record) {
      res.send(record);
    } else {
      res.send("User not found!");
    }
  });
});

router.get('/GetUsers', (req, res) => {
  const users = User.find({}, (err, records) => {
    if (err) { res.send("Login Failed!") }
    if (records) {
      res.send(records);
    } else {
      res.send("Unable to fetch users!");
    }
  });
});

router.post('/Login', (req, res) => {
  const AuthUser = User.findOne({ email: req.body.email, password: req.body.password }, (err, record) => {
    if (err) { res.send("Login Failed!") }
    if (record) {
      sessionVar  = req.session
      sessionVar.user = record;
      res.send(record);
    } else {
      res.send("Username or password does not match!");
    }
  })
});

router.get('/Logout', (req, res) => {
  console.log("In logout");
  if (!sessionVar.user) {
    res.status(401).send();
  } else {
    sessionVar.user = null;
    res.status(200).send();
  }
});

router.post('/Signup', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    profilePic: null,
  });
  const existingUser = User.findOne({ email: req.body.email }, (err, user) => {
    if (err) { res.send(err); }
    if (user) {
      res.send("User with this email alredy exists.");
    } else {
      newUser.save((err, response) => {
        if (err) { console.log("Unable to Signup at the moment!"); }
        console.log(response);
        res.send(response);
      });
    }
    return console.log(user);
  });
});

router.put('/UploadProfile/:id', upload.single('image'), (req, res) => {
  console.log(req.params.id);
  User.findOneAndUpdate({_id: req.params.id}, {$set: {profilePic: req.file.path}}, {new: true}, (err, record) => {
    if (err) { res.send(err) }
    else {
      console.log(record);
      res.send(record);
    }
  })
});

export default router;
