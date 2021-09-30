/*
 * Maintainers note: This is a very hacky script to generate HTML from markdown.
 * It is heavily coupled to the directories and files around it.
 */
const showdown  = require('showdown');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        const files = await fs.promises.readdir(process.cwd() + '/blogs');
        for (const file of files) {
            const fullPath = path.join(process.cwd(), 'blogs', file);
            const stat = await fs.promises.stat(fullPath);
            const isFile = stat.isFile();
            if (isFile)
              createBlog(fullPath, file);
        }
    }
    catch(e) {
        console.error(e);
    }
})();

function createBlog(filePath, fileName) {
  fs.readFile(__dirname + '/style.css', function (err, styleData) {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        throw err; 
      }
      let text = data.toString();

      converter = new showdown.Converter({
        ghCompatibleHeaderId: true,
        simpleLineBreaks: true,
        ghMentions: true,
        tables: true
      });

      let preContent = `
      <html>
        <head>
          <title>` + fileName + `</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <div id='content'>
      `

      let postContent = `

          </div>
          <style type='text/css'>` + styleData + `</style>
        </body>
      </html>`;

      html = preContent + converter.makeHtml(text) + postContent

      converter.setFlavor('github');
      console.log(html);

      let filePath = process.cwd() + `/${fileName.replace(".md", "")}.html`;
      fs.writeFile(filePath, html, { flag: "w" }, function(err) {
        if (err) {
          console.log("File '" + filePath + "' already exists. Aborted!");
        } else {
          console.log("Done, saved to " + filePath);
        }
      });
    });
  });
}
