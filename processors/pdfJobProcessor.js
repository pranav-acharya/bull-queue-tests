const Queue = require('../queues');

const initialize = () => {
    Queue.getQueue(Queue.queueTypes.PDF_QUEUE).process(function(job){
        // Processors can also return promises instead of using the done callback
        return pdfAsyncProcessor();
    });
}

module.exports = { initialize };