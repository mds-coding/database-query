import { DatabaseCriteria } from "@mds-coding/database-criteria";

export class DatabaseQuery<T> {
  constructor(public collection: string, public criterias: DatabaseCriteria<T>[] = []) { }

  where(criteria: DatabaseCriteria<T>) {
    this.criterias.push(criteria);
  }
}
