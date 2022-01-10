import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { SortItem, transformSort } from '@/common/transform';
import { IsValidSortArray } from '@/common/validation';

export class FindAllTicketDto {
  @IsOptional()
  @IsValidSortArray([
    'status',
    'createdAt',
    'updatedAt',
    'latestCustomerServiceReplyAt',
  ])
  @Transform(transformSort)
  orderBy?: SortItem[];
}
