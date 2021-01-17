var BullQueueConnection = require('bull');
const QueueTypes = require('./queues').queueTypes;

// if the queues are running in the same process, they can reuse the Queue connections
var videoQueue = new BullQueueConnection(QueueTypes.VIDEO_QUEUE, 'redis://127.0.0.1:6379');
var audioQueue = new BullQueueConnection(QueueTypes.AUDIO_QUEUE, {redis: {port: 6379, host: '127.0.0.1', password: 'foobared'}}); // Specify Redis connection using object
var imageQueue = new BullQueueConnection(QueueTypes.AUDIO_QUEUE);
var pdfQueue = new BullQueueConnection(QueueTypes.PDF_QUEUE);

var name = process.argv[2];

if (!name) {
   console.error('please provide an arg');
   process.exit();
}

const jobCount = process.argv[3] ? parseInt(process.argv[3]) : 10;

for(var i=0; i<jobCount; i++) {
   videoQueue.add({name, video: `http://example.com/${name}_${i}.mov`});
   audioQueue.add({name, audio: `http://example.com/${name}_${i}.mp3`});
   imageQueue.add({name, image: `http://example.com/${name}_${i}.tiff`});
   // can also add a type of job to the queue like the belowing
   // queue.add(job_type, {});
   // videoQueue.add(`${name}_${i}`, {name, video: `http://example.com/${name}_${i}.mov`});
   // audioQueue.add(`${name}_${i}`, {name, audio: `http://example.com/${name}_${i}.mp3`});
   // imageQueue.add(`${name}_${i}`, {name, image: `http://example.com/${name}_${i}.tiff`});
   // this will require job processor to process job types as we;;
}
