import { TransformFnParams } from 'class-transformer';

export interface SortItem {
  key: string;
  order: 'asc' | 'desc';
}
export function transformSort(params: TransformFnParams): Partial<SortItem>[] {
  if (!params.value) {
    return;
  }
  const values = params.value.split(',');
  return values.map((v: string) => {
    const index = v.lastIndexOf('-');
    const key = v.substring(0, index);
    const order = v.substring(index + 1, v.length).toLowerCase();
    return {
      key,
      order: order === 'desc' || order === 'asc' ? order : undefined,
    };
  });
}
