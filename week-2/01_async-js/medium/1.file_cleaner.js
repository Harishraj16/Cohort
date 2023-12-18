// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```



const fs = require('fs');

function cleanfile(file_name){
    fs.readFile(file_name,'utf8',(err,data)=>{
        if(err){
            console.error("Error reading file: ",err);
            return;
        }

        const cleanedData = data.replace(/\s+/g, ' ');

        fs.writeFile(file_name,cleanedData,'utf8',(err)=>{
            if(err){
                console.error("Error writing file: ",err);
                return;
            } else{
                console.log("File cleaned Successfully.");
            }
            console.log("Content: "+ cleanedData);
        });
    });
}


const file_name = 'text.txt';
cleanfile(file_name);