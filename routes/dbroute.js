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

router.get("/defautTrLEA", (req, res, next) => {

    db.query(Request.getDefautTrLEA(), (err, row)=> {
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

router.get("/TotalProd", (req, res, next) => {

    db.query(Request.getProdinTotal(), (err, row) =>{ 
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

router.get("/TempsArretProd",(req, res, next) => {

    db.query(Request.getTempsArretProd(), (err, row) =>{
        if(!err){
            res.send(row);
        }
    });
});

router.get("/TempsArretRecette",(req, res, next) => {

    db.query(Request.getTempsArretRecette(), (err, row) =>{
        if(!err){
            res.send(row);
        }
    });
});


module.exports = router;