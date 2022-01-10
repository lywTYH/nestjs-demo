import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { CountInterceptor } from '@/common/interceptor/response';

import { FindAllQuery } from './dto';
import { TicketService } from './service';

@UseInterceptors(CountInterceptor)
@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Get()
  findAll(
    @Query()
    query: FindAllQuery,
  ) {
    console.log(456);
    return {
      data: [],
    };
  }
}

// updatedAt-desc
// updatedAt-desc
// orderBy: 'updatedAt-desc',
// router.get(
//   '/',
//   sort('orderBy', ['status', 'createdAt', 'updatedAt', 'latestCustomerServiceReplyAt']),
//   parseRange('createdAt'),
//   include,
//   async (ctx) => {
//     const currentUser = ctx.state.currentUser as User;
//     const params = findTicketsSchema.validateSync(ctx.query);
//     const sort = ctx.state.sort as SortItem[] | undefined;
//     const categoryIds = new Set(params.categoryId);
//     if (params.rootCategoryId) {
//       categoryIds.add(params.rootCategoryId);
//       const subCategories = await CategoryManager.getSubCategories(params.rootCategoryId);
//       subCategories.forEach((c) => categoryIds.add(c.id));
//     }
//     const query = Ticket.queryBuilder();
//     if (params.where) {
//       query.setRawCondition(params.where);
//     }
//     if (params.authorId) {
//       query.where('author', '==', User.ptr(params.authorId));
//     }
//     if (params.assigneeId) {
//       addPointersCondition(query, 'assignee', params.assigneeId, User);
//     }
//     if (params.groupId) {
//       addPointersCondition(query, 'group', params.groupId, Group);
//     }
//     if (categoryIds.size) {
//       query.where('category.objectId', 'in', Array.from(categoryIds));
//     }
//     if (params.status) {
//       query.where('status', 'in', params.status);
//     }
//     if (params['evaluation.star']) {
//       query.where('evaluation.star', '==', params['evaluation.star']);
//     }
//     if (params.createdAtFrom) {
//       query.where('createdAt', '>=', params.createdAtFrom);
//     }
//     if (params.createdAtTo) {
//       query.where('createdAt', '<=', params.createdAtTo);
//     }
//     if (sort) {
//       sort.forEach(({ key, order }) => query.orderBy(key, order));
//     }
//     if (params.includeAuthor) {
//       query.preload('author');
//     }
//     if (params.includeAssignee) {
//       query.preload('assignee');
//     }
//     if (params.includeGroup) {
//       if (!(await currentUser.isCustomerService())) {
//         ctx.throw(403);
//       }
//       query.preload('group');
//     }
//     if (params.includeFiles) {
//       query.preload('files');
//     }
//     if (params.includeUnreadCount) {
//       query.preload('notifications', {
//         onQuery: (query) => {
//           return query.where('user', '==', currentUser.toPointer());
//         },
//       });
//     }

//     query.skip((params.page - 1) * params.pageSize).limit(params.pageSize);

//     let tickets: Ticket[];
//     if (params.count) {
//       const result = await query.findAndCount(currentUser.getAuthOptions());
//       tickets = result[0];
//       ctx.set('X-Total-Count', result[1].toString());
//     } else {
//       tickets = await query.find(currentUser.getAuthOptions());
//     }

//     if (params.includeCategoryPath) {
//       await Promise.all(tickets.map((ticket) => ticket.loadCategoryPath()));
//     }

//     ctx.body = tickets.map((ticket) =>
//       new TicketListItemResponse(ticket).toJSON({
//         includeMetaKeys: _.compact(params.includeMetaKeys),
//       })
//     );
//   }
// );
