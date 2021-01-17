const Queues = require('../queues');
const { setQueues, BullAdapter } = require('bull-board');

const initialize = () => {
    const bullBoardQueues = Object.values(Queues.queueTypes).map(
        queueName => new BullAdapter(Queues.getQueue(queueName))
    );
    setQueues(bullBoardQueues);
};

module.exports = { initialize }