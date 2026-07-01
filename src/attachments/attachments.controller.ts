import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AttachmentsService } from './attachments.service';
import { multerOptions } from './multer.config';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';

@ApiTags('attachments')
@ApiBearerAuth()
@Controller('attachments')
export class AttachmentsController {
  constructor(private readonly attachmentsService: AttachmentsService) {}

  @Post(':testRunId')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  @ApiOperation({
    summary: 'Upload an image or video attachment for a test run',
  })
  upload(
    @Param('testRunId', ParseUUIDPipe) testRunId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('A file is required');
    }
    return this.attachmentsService.create(testRunId, file);
  }

  @Get(':testRunId')
  @ApiOperation({ summary: 'List attachments for a test run' })
  findByTestRun(@Param('testRunId', ParseUUIDPipe) testRunId: string) {
    return this.attachmentsService.findByTestRun(testRunId);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete an attachment (owner of the test run only)',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.attachmentsService.remove(id, user.id);
  }
}
