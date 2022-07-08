import express from 'express';
import controller from '../controllers/Trade';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

//  router.get('/totaltrades', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/totalclients', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/toptrades', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/rejectedTrades', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/cashbymonth', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/trades', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/bondlist', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/counterparties', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );
//  router.get('/ccy', (req, res, next) =>
//    res.status(200).json({ hello: 'world' })
//  );

router.post(
  '/create',
  ValidateJoi(Schemas.trade.create),
  controller.createTrade
);
router.get('/get/:tradeId', controller.readTrade);
router.get('/', controller.readAll);
router.patch(
  '/update/:tradeId',
  ValidateJoi(Schemas.trade.update),
  controller.updateTrade
);
router.delete('/delete/:tradeId', controller.deleteTrade);

export = router;
