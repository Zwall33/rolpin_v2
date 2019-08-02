import express from "express";
import db from "../public/javascripts/db";
import Request from '../public/javascripts/request';

const router = express.Router();

router.get("/InitAverageHour", (req, res, next) => {

    db.query(Request.getInitAverageHeure(), (err, row)=> {
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

router.get("/ShiftProd", (req, res, next) => {

    db.query(Request.getProdinShift(), (err, row) => {
        if(!err){
            res.send(row);
        }
    });
});

router.get("/AverageHour",(req, res, next) => {

    db.query(Request.getAverageHeure(), (err, row) =>{
        if(!err){
            res.send(row);
        }
    });
});

router.get("/AverageMin",(req, res, next) => {

    db.query(Request.getAverageMin(), (err, row) =>{
        if(!err){
            res.send(row);
        }
    });
});

router.get("/TempsArret",(req, res, next) => {

    db.query(Request.getTempsArret(), (err, row) =>{
        if(!err){
            res.send(row);
        }
    });
});

router.get("/Prod",(req, res, next) => {

    db.query(Request.getProduction(), (err, row) =>{
        if(!err){
            res.send(row);
        }
    });
});


module.exports = router;