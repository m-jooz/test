import { BadRequestException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { extname, join } from 'node:path';
import { diskStorage } from 'multer';
import type { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'video/mp4',
  'video/webm',
];
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.mp4', '.webm'];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export const UPLOADS_DIR = join(process.cwd(), 'uploads');

export const multerOptions: MulterOptions = {
  storage: diskStorage({
    destination: UPLOADS_DIR,
    filename: (_req, file, callback) => {
      callback(
        null,
        `${randomUUID()}${extname(file.originalname).toLowerCase()}`,
      );
    },
  }),
  fileFilter: (_req, file, callback) => {
    const extension = extname(file.originalname).toLowerCase();
    if (
      !ALLOWED_EXTENSIONS.includes(extension) ||
      !ALLOWED_MIME_TYPES.includes(file.mimetype)
    ) {
      callback(
        new BadRequestException(
          'Only jpg, png, mp4, and webm files are allowed',
        ),
        false,
      );
      return;
    }
    callback(null, true);
  },
  limits: { fileSize: MAX_FILE_SIZE_BYTES },
};
