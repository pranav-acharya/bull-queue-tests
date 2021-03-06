const Queue = require('../queues');
const initialize = () => {
    Queue.getQueue(Queue.queueTypes.IMAGE_QUEUE).process(function(job, done){
        // transcode image asynchronously and report progress
        job.progress(42);
        job.log('image ayy');
        // call done when finished
        done();
    
        // or give a error if error
        done(new Error('error transcoding'));
    
        // or pass it a result
        done(null, { width: 1280, height: 720 /* etc... */ });
    
        // If the job throws an unhandled exception it is also handled correctly
        throw new Error('some unexpected error');
    });
}

module.exports = { initialize };