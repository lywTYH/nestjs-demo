import { LeanCloudModule } from './module';
import { LeancloudSchema } from './schema';

class LeancloudEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(partial: Partial<LeancloudEntity>) {
    Object.assign(this, partial);
  }
  // ACL
}

// id!: string;

// ACL?: RawACL | ACLBuilder;

// createdAt!: Date;

// updatedAt!: Date;

export { LeanCloudModule, LeancloudSchema, LeancloudEntity };
