--database name inventory
--table name items

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	object_name VARCHAR(100) NOT NULL,
	color VARCHAR(30) NOT NULL,
	size VARCHAR(30) NOT NULL
);
