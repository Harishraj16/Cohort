// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require('fs');

function read_write(file_name,content){
    fs.readFile(file_name,'utf8',(err,data)=>{
        if(err){
            console.error('Error reading file: ', err);
        } else{

            console.log('File content (Before): ' + data);

            const updated = data + content;

            fs.writeFile(file_name,updated,'utf8',(err) => {
                if(err){
                    console.error('Error writing to file: ',err);
                    return;
                }

                console.log('File has been written successfully!');

                console.log('File content(After): ' + updated);
            });
        }
    });
}

const file_name = 'text.txt';
const Content_to_be_added = ", Now I'm striving Hard!"
read_write(file_name,Content_to_be_added);