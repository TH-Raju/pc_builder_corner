import User from "../models/user";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
