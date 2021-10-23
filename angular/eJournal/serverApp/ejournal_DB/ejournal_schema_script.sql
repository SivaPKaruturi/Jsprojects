CREATE database ejournal;
use ejournal;

/*USER TABLE*/
CREATE TABLE user(
user_id INT NOT NULL AUTO_INCREMENT, 
firstName NVARCHAR(64) NOT NULL,
lastName NVARCHAR(64),
email NVARCHAR(320) NOT NULL,
photoUrl text,
google_id NVARCHAR(128) NOT NULL,
PRIMARY KEY (user_id));