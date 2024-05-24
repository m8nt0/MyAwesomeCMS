module.exports = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    dbUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/your_db',
  };
  