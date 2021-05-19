require('dotenv').config()
const app = require('./app');
require('./databases');


// starting server
const main = async () => {
    await app.listen(app.get('port'));
    console.log(`Server starting on the port ${app.get('port')}`);
}

main();