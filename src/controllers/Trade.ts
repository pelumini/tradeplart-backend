import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Trade from '../models/Trade';

const createTrade = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  const trade = new Trade({
    _id: new mongoose.Types.ObjectId(),
    name,
  });
  return trade
    .save()
    .then((trade) => res.status(201).json({ trade }))
    .catch((error) => res.status(500).json({ error }));
};

const readTrade = (req: Request, res: Response, next: NextFunction) => {
  const tradeId = req.params.tradeId;
  return Trade.findById(tradeId)
    .then((trade) =>
      trade
        ? res.status(200).json({ trade })
        : res.status(404).json({ message: 'not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Trade.find()
    .then((trades) => res.status(200).json({ trades }))
    .catch((error) => res.status(500).json({ error }));
};

const readTotalTrades = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ totalTrades: '23' });
};

const readTotalClients = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ totalClients: '6' });
};

const readTopTrades = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send([
    { tradeId: '34333', value: '7097.00' },
    { tradeId: '34337', value: '673773.91' },
  ]);
};

const readRejectedTrades = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    tradeId: '34333',
    cptyName: 'A CounterParty Inc',
    ticketStatus: 'Rejected',
    isin: '7',
    error: 'Rejected: Market Data Outdated',
  });
};

const readCashByMonth = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json([
    {
      name: 'Repo',
      data: [5, 5, 7, 9, 10, 11, 23, 12, 13, 14, 15, 20],
      color: 'Red',
      type: 'Repo',
    },
    {
      name: 'Reverse Repo',
      data: [500, 80, 13, 14, 15, 20, 800, 90, 10, 11, 23, 1],
      color: 'Blue',
      type: 'Reverse Repo',
    },
    {
      name: 'Sell Buy',
      data: [1001, 300, 9, 9009, 5, 5, 700, 0, 45, 10, 11, 23],
      color: 'Green',
      type: '7',
    },
    {
      name: 'Buy Sell',
      data: [89, 9009, 5, 511, 700, 10, 191, 233, 77, 77, 500, 1],
      color: 'Yellow',
      type: 'Repo',
    },
  ]);
};

const updateTrade = (req: Request, res: Response, next: NextFunction) => {
  const tradeId = req.params.tradeId;
  return Trade.findById(tradeId)
    .then((trade) => {
      if (trade) {
        trade.set(req.body);
        return trade
          .save()
          .then((trade) => res.status(201).json({ trade }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: 'not found' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteTrade = (req: Request, res: Response, next: NextFunction) => {
  const tradeId = req.params.tradeId;
  return Trade.findByIdAndDelete(tradeId)
    .then((trade) =>
      trade
        ? res.status(201).json({ trade, message: 'Deleted' })
        : res.status(404).json({ message: 'not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createTrade,
  readTrade,
  readAll,
  readTotalTrades,
  readTotalClients,
  readTopTrades,
  readRejectedTrades,
  readCashByMonth,
  updateTrade,
  deleteTrade,
};
