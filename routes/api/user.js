const express = require('express');

const router = express.Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
	try {
		const user = await User.findById(req.session.user._id);
		if (!user) {
			return res.status(400).json('unauthorized');
		}

		return res.json({email: user.email, id: user._id});
	} catch (error) {
		res.status(400).json(error);
	}
});


module.exports = router;
