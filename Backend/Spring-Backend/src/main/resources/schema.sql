CREATE TABLE chat_users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(100) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE chat(
    chat_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    user_id INTEGER REFERENCES chat_users(user_id)
);

CREATE TABLE party(
    chat_id INTEGER REFERENCES chat(chat_id),
    user_id INTEGER REFERENCES chat_users(user_id)
);

CREATE TABLE messages(
    message_id SERIAL PRIMARY KEY,
    chat_id INTEGER REFERENCES chat(chat_id),
    user_id INTEGER REFERENCES chat_users(user_id),
    message VARCHAR(200),
    date_create TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS message_status(
    message_id INTEGER PRIMARY KEY,
    user_id INTEGER REFERENCES chat_users(user_id),
    is_read BOOLEAN
);