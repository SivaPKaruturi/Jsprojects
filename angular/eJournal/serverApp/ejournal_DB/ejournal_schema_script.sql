CREATE database ejournal;
use ejournal;

/*USER TABLE*/
CREATE TABLE user(
user_id INT NOT NULL AUTO_INCREMENT, 
firstName NVARCHAR(64) NOT NULL,
lastName NVARCHAR(64),
email NVARCHAR(320) NOT NULL,
photoUrl TEXT,
google_id NVARCHAR(128) NOT NULL,
PRIMARY KEY (user_id));

/*GRATITUDE TABLE*/
CREATE TABLE gratitude(
gratitude_id INT NOT NULL AUTO_INCREMENT, 
emojiid INT,
happiness TEXT,
amazing TEXT,
gratitudedate DATE NOT NULL,
PRIMARY KEY (gratitude_id));

/*REMINDER TABLE*/
CREATE TABLE reminder(
reminder_id INT NOT NULL AUTO_INCREMENT,
title NVARCHAR(128) NOT NULL,
notetype INT NOT NULL,
startdate DATE,
enddate DATE,
eventtime TIME,
preferredtime TIME,
description TEXT,
createddate DATE NOT NULL,
updateddate DATE NOT NULL,
PRIMARY KEY (reminder_id));
