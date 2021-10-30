const { Router } = require('express');
const controller = require('./video.controller');
const router = Router();

router.route('/').get(controller.getAll).post(controller.createOne);

router.route('/heart').post(controller.heartOne);

router.route('/shop').post(controller.shopOne);
module.exports = router;
