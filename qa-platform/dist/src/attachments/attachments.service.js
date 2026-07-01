"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentsService = void 0;
const common_1 = require("@nestjs/common");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_js_1 = require("../../generated/prisma/enums.js");
const multer_config_1 = require("./multer.config");
let AttachmentsService = class AttachmentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async assertTestRunExists(testRunId) {
        const testRun = await this.prisma.testRun.findUnique({
            where: { id: testRunId },
        });
        if (!testRun) {
            throw new common_1.NotFoundException(`Test run with id ${testRunId} not found`);
        }
        return testRun;
    }
    async create(testRunId, file) {
        await this.assertTestRunExists(testRunId);
        const type = file.mimetype.startsWith('video')
            ? enums_js_1.AttachmentType.VIDEO
            : enums_js_1.AttachmentType.IMAGE;
        return this.prisma.attachment.create({
            data: {
                testRunId,
                fileUrl: `/uploads/${file.filename}`,
                type,
            },
        });
    }
    async findByTestRun(testRunId) {
        await this.assertTestRunExists(testRunId);
        return this.prisma.attachment.findMany({
            where: { testRunId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async remove(id, userId) {
        const attachment = await this.prisma.attachment.findUnique({
            where: { id },
            include: { testRun: { select: { executedBy: true } } },
        });
        if (!attachment) {
            throw new common_1.NotFoundException(`Attachment with id ${id} not found`);
        }
        if (attachment.testRun.executedBy !== userId) {
            throw new common_1.ForbiddenException('Only the owner of the test run may delete this attachment');
        }
        await this.prisma.attachment.delete({ where: { id } });
        const filename = attachment.fileUrl.replace(/^\/uploads\//, '');
        await node_fs_1.promises.unlink((0, node_path_1.join)(multer_config_1.UPLOADS_DIR, filename)).catch(() => undefined);
        return { id };
    }
};
exports.AttachmentsService = AttachmentsService;
exports.AttachmentsService = AttachmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttachmentsService);
//# sourceMappingURL=attachments.service.js.map