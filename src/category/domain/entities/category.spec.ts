import { omit } from "lodash";
import { Category } from "./category";
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";

describe("Category Unit tests", () => {
  test("Constructor of category", () => {
    let category = new Category({
      name: "Movie",
    });

    //omit faz com que possa ignorar o created_at na hora de fazer o teste
    let props = omit(category.props, "created_at");

    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    // com todos os atributos
    let created_at = new Date();
    category = new Category({
      name: "Movie",
      description: "some",
      is_active: false,
      created_at,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some",
      is_active: false,
      created_at,
    });

    // com dois atributos
    category = new Category({
      name: "Movie2",
      description: "other",
    });
    expect(category.props).toMatchObject({
      name: "Movie2",
      description: "other",
    });
  });

  test("getter of name field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });

  test("getter and setter of description field", () => {
    let category = new Category({
      name: "Movie,",
    });
    expect(category.description).toBeNull();

    category = new Category({
      name: "Movie",
      description: "some",
    });
    expect(category.description).toBe("some");
  });

  test("getter and setter of is_ative prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.is_active).toBeTruthy();
  });

  test("getter and setter of created_at prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.created_at).toBe(created_at);
  });

  it("should update a name and description", () => {
    const category = new Category({ name: "Movie", description: "some" });
    category.update("Action", "description");
    expect(category.name).toBe("Action");
    expect(category.description).toBe("description");
  });

  it('should active category', () => {
    const category = new Category({
      name: 'Séries',
      is_active: false,
    });
    category.activate()
    expect(category.is_active).toBeTruthy();
  });

  it('should active category', () => {
    const category = new Category({
      name: 'Filmes',
      is_active: true,
    });
    category.desactive()
    expect(category.is_active).toBeFalsy();
  });
});
