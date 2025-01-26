const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

const login = async (req,res)=>{};

const register = async (req,res)=>{
    const {name, email, password , phone  , state , Role} = req.body;
    
    if(!name || !email || !password || !phone || !state || !Role){
        return res.status(422).json({error:"All fields are required"});
    }

    try {
    
    const hashedNumber = await bcrypt.hash(phone, process.env.HASHING_SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, process.env.HASHING_SALT_ROUNDS);

    const userData = {
        name,
        email,
        password: hashedPassword,
        phone: hashedNumber,
        state,
        Role
    };

    //ccreate a new user
    //save the user in the database
    //return the user data

    } catch (error) {
        console.log('error in register route : ',error);
        return res.status(500).json({error:"Internal server error"});
    }
};

module.exports = {login, register};