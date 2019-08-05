CREATE DATABASE lea_rolpin;
CREATE USER 'db_lea'@'127.0.0.1' IDENTIFIED BY 'db_lea';
CREATE USER 'lea-server'@'127.0.0.1' IDENTIFIED BY 'lea-server';
GRANT ALL PRIVILEGES ON lea_rolpin.* TO 'db_lea'@'127.0.0.1';
GRANT ALL PRIVILEGES ON lea_rolpin.* TO 'lea-server'@'127.0.0.1';
USE lea_rolpin;

CREATE TABLE Production (id INT AUTO_INCREMENT, Equipe TINYTEXT, Date TEXT, Panneau INT, Volume FLOAT, Duree TEXT, TRS FLOAT, PRIMARY KEY (id));
CREATE TABLE DureeDefaut (id INT AUTO_INCREMENT, Heure TEXT, Poste TINYTEXT, Nom TEXT, FreqP INT, DureeP TEXT, PRIMARY KEY(id));
CREATE TABLE shift(id INT AUTO_INCREMENT, Equipe TINYTEXT, Heure TEXT, Recette TEXT, Placage INT, Panneau INT, Stack INT, Volume FLOAT, Rebuts INT, Duree TEXT, TRS FLOAT, PRIMARY KEY(id)),
CREATE TABLE DureeRArret(id INT AUTO_INCREMENT, Equipe TINYTEXT, Heure TEXT, Recette TEXT, Nom TEXT, FreqR INT, DureeR TEXT, PRIMARY KEY(id));
CREATE TABLE Moyenne_heure(Heure DATETIME, plis INT);
CREATE TABLE Moyenne_min(Heure DATETIME, plis INT);