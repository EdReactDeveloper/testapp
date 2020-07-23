const express = require('express');

const router = express.Router();
const List = require('../../models/List');
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
	const {query} = req.query
	
	try {
		const list = await List.findOne({ userId: req.session.user._id });
		if(query){
			const updatedList = await list.queryList(query)
			return res.json(parseList(updatedList))
		}

		return res.json(parseList(list.list));
	} catch (error) {
		res.status(400).json(error);
	}
});

router.post('/add', [ check('email', 'enter a valid email').isEmail() ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const payload = req.body;
	
	try {
		const list = await List.findOne({ userId: req.session.user._id });
		const updatedList = await list.addItem(payload);

		return res.json(parseList(updatedList.list));
	} catch (error) {
		res.status(400).json(error);
	}
});

router.post('/remove/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const list = await List.findOne({ userId: req.session.user._id });
		const updatedList = await list.removeItem(id);
		return res.json(parseList(updatedList.list));
	} catch (error) {
		res.status(400).json(error);
	}
});

router.post('/update', [ check('email', 'enter a valid email').isEmail() ], async (req, res) => {
	const payload = { ...req.body };
	try {
		const list = await List.findOne({ userId: req.session.user._id });
		const updatedList = await list.updateItem(payload);
		return res.json(parseList(updatedList.list));
	} catch (error) {
		res.status(400).json(error);
	}
});

function parseList(payload){
	return payload.map(item =>{
		return {...item.toObject(), email: item.mail}
	}
		)
}

module.exports = router;
