import { LeancloudSchema, LeancloudEntity } from '@/leancloud';

class TicketEntity extends LeancloudEntity {
  nid: number;
  title: string;
  content: string;
  contentHTML: string;
  categoryId: string;
  authorId: string;
  assigneeId?: string;
  groupId?: string;
  organizationId?: string;
  fileIds?: string[];
  files?: File[];
  status: number;
  replyCount?: number;
  unreadCount?: number;
  latestCustomerServiceReplyAt?: Date;
  firstCustomerServiceReplyAt?: Date;
  metaData?: Record<string, any>;
  constructor(partial: Partial<TicketEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}

const ticketSchema = new LeancloudSchema('ticket');
export { ticketSchema, TicketEntity };
