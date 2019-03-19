import express from "express";
import db from "../public/javascripts/db";
import Request from '../public/javascripts/request';

const router = express.Router();

router.get("/Nb_plis_init", (req, res, next) => {

    db.query(Request.get10init_plis(), (err, row)=> {
        if(!err) {
            res.send(row);
        }
    });    
});

router.get("/Nb_plis_heure", (req, res, next) => {

    db.query(Request.getPlis_stack(), (err, row)=> {
        if(!err) {
            res.send(row);
        }
    });    
});

router.get("/defautLEA", (req, res, next) => {

    db.query(Request.getDefautLEA(), (err, row)=> {
        if(!err) {
            res.send(row);
        }
    });  
});

router.get("/defautTrLEA", (req, res, next) => {

    db.query(Request.getDefautTrLEA(), (err, row)=> {
        if(!err) {
            res.send(row);
        }
    });  
});

router.get("/StockLEA", (req, res, next) => {

    db.query(Request.getStockLEA(), (err, row)=> {
        if(!err) {
            res.send(row);
        }
    });  
});

module.exports = router;