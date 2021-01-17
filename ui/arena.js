const Arena = require('bull-arena');
const Queue = require('bull');
const Queues = require('../queues');

const getArenaConfig = () => {
    const queueNames = Object.values(Queues.queueTypes);
    const arena = Arena({ 
        Bull: Queue,
        queues: queueNames.map(name => ({ type: 'bull', name, hostId: 'localhost' })),
        disableListen: false,
        basePath: '/'
    });
    return arena;
}

module.exports = { getArenaConfig }