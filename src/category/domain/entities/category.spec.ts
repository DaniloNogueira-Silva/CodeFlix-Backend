import { Category } from "./category";

describe("Category Unit tests", () => {
  test("Constructor of category", () => {
    const category = new Category("Movie");

    expect(category.name).toBe("Movie");
  });
});
