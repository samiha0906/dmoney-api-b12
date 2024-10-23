const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection:`https://api.postman.com/collections/38882458-d74511dc-5605-4d35-8355-4182370908d4?access_key=${process.env.secretKey}`,
    collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
 