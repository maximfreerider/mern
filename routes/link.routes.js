const {Router} = require('express');
const Link = require('../models/Link');
const router = Router();

router.post(
  '/generate',
  async (req, res) => {
    try {
      
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуй снова'});
    }
  })

router.get('/', async (req, res) => {
  try {
      const links = await Link.find({ owner: null }) // ?????
      res.json(links);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуй снова'});
  }
})

router.get('/:id', async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
    res.json(link);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуй снова'});
  }
})
module.exports = router;
