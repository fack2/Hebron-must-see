BEGIN;

  drop table if exists places, guides, users, arabic_words
  CASCADE;

create table places
(
  id serial primary key,
  name varchar(100) not null,
  type text not null,
  image1 text not null,
  image2 text,
  image3 text,
  description text,
  availability text not null,
  price text not null,
  reviews text,
  address text not null
);


create table users
(
  user_id serial primary key,
  name varchar(100) not null,
  email text not null,
  password text not null
);


create table guides
(
  id serial primary key,
  type text not null,
  photo text not null,
  description text not null,
  availability text not null,
  phone text not null,
  age text not null,
  reviews text not null,
  user_id INTEGER,
    FOREIGN KEY
    (user_id) REFERENCES users (user_id)
);


create table arabic_words
(
  id serial primary key,
  arabic text not null,
  english text not null,
  pronunciation text not null
);


COMMIT;