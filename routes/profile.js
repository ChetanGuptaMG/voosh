const express = require('express');
const router = express.Router();

const controller = require('../controller/profileController');
const checkAuth = require('../middleware/checkAuth');

// Profile routes
router.get('/getProfile', checkAuth, controller.getProfiles);
router.put('/updateProfile', checkAuth, controller.updateProfile);
router.put('/visibility', checkAuth, controller.updateVisibility);
router.get('/myprofile',checkAuth, controller.myprofile);

module.exports = router;
