export default {
  port: process.env.PORT || 5002,
  jwtSecret: process.env.JWTSECRET || 'secret',
  mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/api-prod-mongodb-1',
  openIAKey: process.env.OPEN_IA_API_KEY
}
