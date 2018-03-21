const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = "NDE1Mjc2OTYwMjc3NTk0MTIy.DWzkgg.tm65ZO_2zhaiSAmn37q077DML_8",
      fs = require("fs");
var dir = "reaction/";
var getImageUrls = require("get-image-urls");
var imgs= [];


fs.readdir(dir, (err, files) =>{
  console.log(dir);
  imgs = files;
});

client.on('ready', () => {
  console.log("Smutposter is online!");
});
client.on('message', message => {
  if (message.content === 'smutpost') {
    // getImageUrls("https://www.reddit.com/r/pics", function(err, images) {
    //   if (!err) {
    //       var num = Math.floor(Math.random() * images.length);
    //       message.channel.send(images[num].url);
    //
    //   }
    // })
    

    var num = Math.floor(Math.random() * imgs.length);
    console.log(num);
    console.log(imgs);
    message.channel.send("Here's some pron", {file: dir + imgs[num]});

  }
});

client.login(token);
