"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = exports.UPLOADS_DIR = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const node_path_1 = require("node:path");
const multer_1 = require("multer");
const ALLOWED_MIME_TYPES = [
    'image/jpeg',
    'image/png',
    'video/mp4',
    'video/webm',
];
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.mp4', '.webm'];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
exports.UPLOADS_DIR = (0, node_path_1.join)(process.cwd(), 'uploads');
exports.multerOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: exports.UPLOADS_DIR,
        filename: (_req, file, callback) => {
            callback(null, `${(0, node_crypto_1.randomUUID)()}${(0, node_path_1.extname)(file.originalname).toLowerCase()}`);
        },
    }),
    fileFilter: (_req, file, callback) => {
        const extension = (0, node_path_1.extname)(file.originalname).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(extension) ||
            !ALLOWED_MIME_TYPES.includes(file.mimetype)) {
            callback(new common_1.BadRequestException('Only jpg, png, mp4, and webm files are allowed'), false);
            return;
        }
        callback(null, true);
    },
    limits: { fileSize: MAX_FILE_SIZE_BYTES },
};
//# sourceMappingURL=multer.config.js.map