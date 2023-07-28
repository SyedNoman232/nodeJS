/*---- core module----

basic feature in the programing language called core modules
e.g  file system(fs),Buffer,HTTP, console

these are two types of module 

1) global module
 e.g ; console
       file name

2) non golbal module
 e.g; fs file system (need to import)
      buffer
 */

      const fs = require('fs');
      console.log("__filename");
      fs.writeFileSync("example.txt","some code")
 