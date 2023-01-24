const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: "public/passport_files",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const uploader = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const supportedFile = /jpg|png|pdf|jpeg/;
        const extension = path.extname(file.originalname);

        if (supportedFile.test(extension)) {
            cb(null, true)
        }
        else {
            cb(new Error("Only jpg, png, pdf, and jpeg supported!"))
        }
    },
    limits: {
        fileSize: 1000000
    }
});

module.exports = uploader;