CREATE TABLE users(
email VARCHAR(255) PRIMARY KEY,
	created_at TIMESTAMP DEFAULT NOW()
);



INSERT INTO user(email) VALUES('sharat.sajjan@gmail.com')