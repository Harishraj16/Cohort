const fs = require('fs')

function readAndProcessFile(file_name){
    fs.readFile(file_name, 'utf8' , (err,data) => {
        if(err){
            console.error('Error reading file:', err);
            return;
        }

        console.log('File Contents: ' + data);
    });
}

const file_name = 'text.txt'

readAndProcessFile(file_name);