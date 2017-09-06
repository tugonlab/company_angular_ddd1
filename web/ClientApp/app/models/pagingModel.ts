
export class PagingModel<T> {
    number: number;
    size: number;
    orderBy: string;
    orderDirection: string;
    totalCount: number;
    maxSize: number;
    list: Array<T>;
}
