const audioJobProcessor = require('./audioJobProcessor');
const imageJobProcessor = require('./imageJobProcessor');
const videoJobProcessor = require('./videoJobProcessor');
const pdfJobProcessor = require('./pdfJobProcessor');

const initializeQueueProcessors = () => {
    audioJobProcessor.initialize();
    imageJobProcessor.initialize();
    videoJobProcessor.initialize();
    pdfJobProcessor.initialize();
};

module.exports = { initializeQueueProcessors };