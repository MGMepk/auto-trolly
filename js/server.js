import app from './app.js';
import dotenv from "dotenv";

dotenv.config();

const _port = process.env.PORT || 3000;
app.listen(_port);

console.log(`Run on port ${_port}`);
console.log(`Server on http://localhost:${_port}`);