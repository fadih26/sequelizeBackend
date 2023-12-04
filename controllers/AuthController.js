import db from '../models/index.js';
import { generateToken } from '../utils/jwt.js';
const {UserModel} = db
export const signup = async (req, res) => {
    const { name, email, password,role } = req.body;
    try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Create new user
        const user = await UserModel.create({ name, email, password,role });

   

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ where: { email } });
        if (!user || !user.validPassword(password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(user);

        // Set token in HTTP-only cookie
        res.cookie('token', token, { httpOnly: true,secure: true,
        sameSite: 'None',}).json({status:200, message: 'Login successful'}).status(200)
        
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loggedInUser = (req,res) =>{

        res.json({ user: req.user });
   
}

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message:'Logged out'});
}