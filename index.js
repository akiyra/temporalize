const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (message.content === '!rules1'){
        message.channel.send('Article 1 : tout comportement raciste, homophobe, sexiste et autres visant à porter atteinte à l intégrité physique ou moral d une personne est strictement interdit.');
    }
});

client.on('message', (message) => {
    if (message.content === '!rules2'){
        message.channel.send('Article 2 : Plusieurs salons (textuels ou vocaux) sont mis à disposition de tous afin d éviter de mélanger les sujets, vous serez donc priés d éviter le hors sujet et le flood.');
    }
});

client.on('message', (message) => {
    if (message.content === '!rules3'){
        message.channel.send('Article 3 : Le langage SMS est lui aussi interdit, il peut arriver que nous abrègions un mot, mais merci de respecter un minimum votre langue.');
    }
});

client.on('message', (message) => {
    if (message.content === '!rules4'){
        message.channel.send('Article 4 : Il est aussi strictement interdit d avoir recourt à une quelconque pub sans l accord d Akiyra');
    }
});

client.on('message', (message) => {
    if (message.content === '!rules5'){
        message.channel.send('Article 5 : Le partage d images contenant de la pornographie, la promotion de substances illicites, ou autres choses interdites et bien évidemment prohibé.');
    }
});

client.on('message', (message) => {
    if (message.content === '!rules6'){
        message.channel.send('Article 6 : Interdiction formelle de contacter un membre de l équipe afin de le recruter, si un de nos membres veut rejoindre votre projet il en est libre, mais merci de ne pas les "déranger".');
    }
});

client.on('message', (message) => {
    if (message.content === '!rules7'){
        message.channel.send('Article 7 : Le vol de ressources est strictement interdit, les ressources de temporalize sont exclusive à temporalize, de même pour les ressources postées par les membres sur #vos-créations elles appartiennent à la personne qui les crée.');
    }
});

client.on('message', (message) => {
    if (message.content === '!rules8'){
        message.channel.send('Article 8 : S il vient de quelques manière que ce soit à avoir un problème dans les permissions, veuillez savoir qu il est strictement interdit de mentionner "everyone" et "here", et ceci sous peine de ban.');
    }
});

client.login('NzQxMTkxMjY4Mjc2ODk1Nzg1.Xyz-KQ.JmYHf9bM3pCoR3_PiI3QHHnWH1k');