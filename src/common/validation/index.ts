import { registerDecorator, ValidationOptions } from 'class-validator';
import { SortItem } from '../transform';

export function IsValidSortArray(
  fields?: string[],
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsValidSortArray',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        message: ({
          value,
          property,
        }: {
          value: Partial<SortItem>[];
          property: string;
        }) => {
          const ele = value.find(
            (v) => !v.key || !v.order || (fields && !fields.includes(v.key)),
          );
          if (!ele.key || !ele.order) {
            return `${property} params error`;
          }
          return `${property} must be one of ${fields.join(', ')}`;
        },
        ...validationOptions,
      },
      validator: {
        validate(value: Partial<SortItem>[]) {
          return value.every((v) => {
            return v.key && v.order && fields && fields.includes(v.key);
          });
        },
      },
    });
  };
}
