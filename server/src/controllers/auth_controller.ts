// src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user_model';

// Register User
export const registerUser = async (req: Request, res: Response) => {
    const { fname, lname, gender, email, password } = req.body;

    // Basic input validation
    if (!fname || !lname || !gender || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            fname,
            lname,
            gender,
            email,
            password: hashedPassword,
            isOnline: true, // Set isOnline to true on registration
        });

        await user.save();

        res.json({ message: 'User registered successfully' });
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).json({ message: 'Server error' });
        } else {
            console.error('Unexpected error:', err);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

// Login User
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Basic input validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        user.isOnline = true; // Set isOnline to true on login
        await user.save();

        res.json({ message: 'User logged in successfully' });
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).json({ message: 'Server error' });
        } else {
            console.error('Unexpected error:', err);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

// Logout User
export const logoutUser = async (req: Request, res: Response) => {
    const { email } = req.body;

    // Basic input validation
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        user.isOnline = false; // Set isOnline to false on logout
        await user.save();

        res.json({ message: 'User logged out successfully' });
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).json({ message: 'Server error' });
        } else {
            console.error('Unexpected error:', err);
            res.status(500).json({ message: 'Server error' });
        }
    }
};
