import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ApproveBugDto {
  @ApiProperty({
    example: '5b10ac8d-82e9-4710-98b8-8f3209bdb5a1',
    description: 'Jira account id to reassign the issue to',
  })
  @IsNotEmpty()
  @IsString()
  jiraReassignTo: string;

  @ApiProperty({
    example: '31',
    description: 'Jira transition id to move the issue to a new status',
  })
  @IsNotEmpty()
  @IsString()
  jiraNewStatus: string;
}
