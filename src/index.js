const {Command, flags} = require('@oclif/command')

var fs = require('fs')
class SimpleWebCommand extends Command {
  async run() {
    fs.writeFile('index.html', '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>Home</title>\n\t<link rel="stylesheet" href="./src/css/style.css">\n</head>\n<body>\n\t<h1 id="title">Thanks for using start-web!</h1>\n\t<script src="./src/js/script.js">\n</script>\n</body>\n</html>', () => {
      this.log('File made')
    })
    fs.mkdir('./src', () => {
      this.log('src folder made')
    })
    fs.mkdir('./src/css', () => {
      this.log('css folder made')
    })
    fs.mkdir('./src/js', () => {
      this.log('js folder made')
    })
    fs.writeFile('./src/css/style.css', '@import "https://fonts.googleapis.com/css?family=Ubuntu:300,300italic,regular,italic,500,500italic,700,700italic";\n\n* {\n\tmargin: 0;\n\tpadding: 0\n}\nbody {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: Ubuntu\n}\n\nh1 {\n\tcursor: default;\n}', () => {
      this.log('File made')
    })
    fs.writeFile('./src/js/script.js', 'let title = document.getElementById("title");\ntitle.addEventListener("mouseover",function(e){\n\te.target.style.color="green"\n})\n\ntitle.addEventListener("mouseleave",function(e){\n\te.target.style.color="black"\n});', () => {
      this.log('File made')
    })
  }
}

SimpleWebCommand.description = `Describe the command here
...
Extra documentation goes here
`

SimpleWebCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SimpleWebCommand
