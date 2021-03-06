// const Unit = require('./unit');
const Edge = require('./edge');
const Node = require('./node')

// Create nodes...
let joe = new Node('person');
joe.set('name', 'Joe');

let minecraft = new Node('game');
minecraft.set('name', 'Minecraft');

// Create edge...
let likes = new Edge('likes');

// link 'em!
likes.link(joe, minecraft);

// add more nodes...
let notch = new Node('person', { name: 'Notch' });
let created = new Edge('created').link(notch, minecraft);


// Add even more nodes
let mojang = new Node('company', { name: 'Mojang' });
let microsoft = new Node('company', { name: 'Microsoft' });
let jennifer = new Node('person', { name: 'Jennifer' });

new Edge('founded').link(notch, mojang);
new Edge('acquired').link(microsoft, mojang);
new Edge('purchased').link(jennifer, minecraft);
new Edge('prints_money_for').link(minecraft, microsoft);

console.log(joe);
// console.log(likes);