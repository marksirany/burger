USE burgers_db;

-- https://www.mysqltutorial.org/mysql-datetime/ --
INSERT INTO burgers
    (burger_name, devoured, createdAt, updatedAt)
VALUES
    ("Taco Burger", false, now(), now());

INSERT INTO burgers
    (burger_name, devoured, createdAt, updatedAt)
VALUES
    ("Veggie", false, now(), now());

INSERT INTO burgers
    (burger_name, devoured, createdAt, updatedAt)
VALUES
    ("Turkey Burger", true, now(), now());