const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/artgallery")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    });

const RegistrationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});
const RegisterSchema = new mongoose.Schema({
    adminID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const ALoginSchema = new mongoose.Schema({
    adminID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const detailsSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });
  const details1Schema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });
  

const Registration = mongoose.model("reg_custs", RegistrationSchema);
const Login = mongoose.model("login_custs", LoginSchema);
const details = mongoose.model("details", detailsSchema);
const Register=mongoose.model("registers", RegisterSchema);
const ALogin=mongoose.model("adlogins", ALoginSchema);
const details1=mongoose.model("details1", details1Schema);
module.exports = { Registration, Login,details,Register,ALogin,details1};
