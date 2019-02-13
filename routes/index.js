import express from "express";
import db from "../public/javascripts/db";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Accueil', menuId:'home'});
});

router.get('/production', function(req, res, next) {
  res.render('production', {page:'Production', menuId:'production.html'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact', menuId:'contact.html'});
});

router.get('/propos', function(req, res, next) {
  res.render('propos', {page:'Propos', menuId:'propos.html'});
});

router.get('/defaut', function(req, res, next) {
  res.render('defaut', {page:'Défauts', menuId:'defaut.html'});
});

module.exports = router;
