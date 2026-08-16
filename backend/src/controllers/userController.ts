import type { Request, Response} from "express";

export const registerUser = async ( req: Request, res: Response ) => {
    try {

        const { username, email, password } = req.body;

        res.status(201).json({
            message: "User registered successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}

export const userLogin = async (req: Request , res: Response ) => {
    try {
        const { email, password } = req.body;

        res.status(200).json({
            message: 'User logged in succesfully'
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
}