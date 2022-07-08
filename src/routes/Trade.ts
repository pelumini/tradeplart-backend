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
router.get('/trade/newid', controller.readTrade);
router.get('/trades', controller.readAll);
router.get('/totaltrades', controller.readTotalTrades);
router.get('/totalclients', controller.readTotalClients);
router.get('/toptrades', controller.readTopTrades);
router.get('/rejectedTrades', controller.readRejectedTrades);
router.get('/cashbymonth', controller.readCashByMonth);

router.patch(
  '/update/:tradeId',
  ValidateJoi(Schemas.trade.update),
  controller.updateTrade
);
router.delete('/delete/:tradeId', controller.deleteTrade);

export = router;
