const Queue = require('../queues');

const initialize = () => {
    Queue.getQueue(Queue.queueTypes.VIDEO_QUEUE).process(function(job, done){

        // job.data contains the custom data passed when the job was created
        // job.id contains id of this job.
      
        // transcode video asynchronously and report progress
        job.progress(42);
        job.log('vdeio ayy');
        // call done when finished
        done();
      
        // or give a error if error
        done(new Error('error transcoding'));
      
        // or pass it a result
        done(null, { framerate: 29.5 /* etc... */ });
      
        // If the job throws an unhandled exception it is also handled correctly
        throw new Error('some unexpected error');
    });
}

module.exports = { initialize };