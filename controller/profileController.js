const user = require('../model/user');

// Get all profiles
exports.getProfiles = async (req, res, next) => {
    try {
        const{_id} = req.user;
        const profile = await user.findById(_id);

        if (profile.role !== 'admin') {
            const publicProfiles = await user.find({ visablity: 'public' });
            return res.json(publicProfiles);
        }

        const allProfiles = await user.find({});
        res.json(allProfiles);
    } catch (error) {
        next(error);
    }
}

// Update profile such that i can updata my profile pic and bio name and email and password and phone
exports.updateProfile = async (req, res, next) => {
    try {
        const {_id} = req.user;
        const { name, email, password, phone, bio, profilePic } = req.body;

        const updatedProfile = await user.findByIdAndUpdate(_id, { name, email, password, phone, bio, profilePic }, { new: true });

        res.json(updatedProfile);
    }
    catch (error) {
        next(error);
    }
}

exports.updateVisibility = async (req, res, next) => {
    try {
        const {_id}  = req.user;
        const { visablity } = req.body;

        const updatedProfile = await user.findByIdAndUpdate(_id, { visablity }, { new: true });

        res.json(updatedProfile);
    } catch (error) {
        next(error);
    }
}

exports.myprofile = async (req, res, next) => {
    try {
      const user = req?.user;
  
    //   if (!user) {
    //     return res.status(401).json({ error: 'Not authorized' });
    //   }
  
      res.json(user);
    } catch (error) {
      next(error);
    }
  }