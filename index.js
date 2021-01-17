const app = require('express')()
const { router } = require('bull-board')
const { initializeQueueProcessors } = require('./processors');
const { initializeQueues } = require('./queues');

const { getArenaConfig } = require('./ui/arena');
const { initialize } = require('./ui/bullBoard');

initializeQueues();
initializeQueueProcessors();

const port = 3000;

// dummy endpoint
app.get('/', (req, res) => { res.send('Hello World!') });

// bull board
initialize();
app.use('/board', router);

// arena
app.use('/arena', getArenaConfig());

// run server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// run addJobs abc to add jobs to the queue

