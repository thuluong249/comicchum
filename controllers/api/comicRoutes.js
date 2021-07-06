const router = require('express').Router();
const { Comic } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async(req, res) => {
    try {
        const newComic = await Comic.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComic);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const comicData = await Comic.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!comicData) {
            res.status(404).json({ message: 'No comic found with this id!' });
            return;
        }

        res.status(200).json(comicData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;