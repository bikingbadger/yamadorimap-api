db.createUser({
  user: 'yamaadmin',
  pwd: 'yama123',
  roles: [
    {
      role: 'readWrite',
      db: 'yamadb',
    },
  ],
});

// Need to actually create the collection or the DB is not created
//db = new Mongo().getDB('yamadb');
db = db.getSiblingDB('yamadb');

db.createCollection('users', { capped: false });
db.createCollection('coordinates', { capped: false });
