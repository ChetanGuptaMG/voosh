const Joi = require('joi');

// Joi schema for user registration
const userRegistrationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  role: Joi.string()
});
// Joi schema for user profile update
const userProfileUpdateSchema = Joi.object({
    username: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    phone: Joi.string(),
    bio: Joi.string(),
    profilePic: Joi.string()
});

module.exports = {
  userRegistrationSchema,
  userProfileUpdateSchema,
};
