CREATE DATABASE lea_rolpin;
USE lea_rolpin;

CREATE TABLE Production (id INT AUTO_INCREMENT, Equipe TINYTEXT, Date TEXT, Panneau INT, Volume FLOAT, Duree TEXT, TRS FLOAT, PRIMARY KEY (id));
CREATE TABLE DureeDefaut (id INT AUTO_INCREMENT, Heure TEXT, Poste TINYTEXT, Nom TEXT, FreqP INT, DureeP TEXT, PRIMARY KEY(id));
CREATE TABLE shift(id INT AUTO_INCREMENT, Equipe TINYTEXT, Heure TEXT, Recette TEXT, Placage INT, Panneau INT, Stack INT, Volume FLOAT, Rebuts INT, Duree TEXT, TRS FLOAT, PRIMARY KEY(id)),
CREATE TABLE DureeRArret(id INT AUTO_INCREMENT, Equipe TINYTEXT, Heure TEXT, Recette TEXT, Nom TEXT, FreqR INT, DureeR TEXT, PRIMARY KEY(id));
CREATE TABLE Moyenne_heure(Heure DATETIME, plis INT);
CREATE TABLE Moyenne_min(Heure DATETIME, plis INT);