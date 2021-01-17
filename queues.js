const Queue = require('bull');

const AUDIO_QUEUE = 'AUDIO_QUEUE';
const VIDEO_QUEUE = 'VIDEO_QUEUE';
const IMAGE_QUEUE = 'IMAGE_QUEUE';
const PDF_QUEUE = 'PDF_QUEUE';

const queueTypes = { AUDIO_QUEUE, VIDEO_QUEUE, IMAGE_QUEUE, PDF_QUEUE };

const queues = {};

const initializeQueues = () => {

    // various ways to initialize queues
    // or loop over if the same
    queues[VIDEO_QUEUE] = new Queue(AUDIO_QUEUE, 'redis://127.0.0.1:6379');
    queues[AUDIO_QUEUE] = new Queue(VIDEO_QUEUE, {redis: {port: 6379, host: '127.0.0.1', password: 'foobared'}}); // Specify Redis connection using object
    queues[IMAGE_QUEUE] = new Queue(IMAGE_QUEUE);
    queues[PDF_QUEUE] = new Queue(PDF_QUEUE);
}


const getQueue = (queueName) => queues[queueName];

module.exports = { 
    getQueue,
    initializeQueues,
    queueTypes
};