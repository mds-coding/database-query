import { DatabaseCriteria } from "@mds-coding/database-criteria";
import { DatabaseQuery } from "./index.js"

type Cat = {
  name: string;
  age: number;
}

test("`DatabaseQuery` can be created", () => {
  const query = new DatabaseQuery<Cat>('cat');
  query.where(new DatabaseCriteria<Cat, 'age'>('age', "GT", 1));
  query.where(new DatabaseCriteria<Cat, 'name'>('name', "EQ", "Plume"));
  expect(query).toBeDefined();
  expect(query.criterias.length).toBe(2);
})
