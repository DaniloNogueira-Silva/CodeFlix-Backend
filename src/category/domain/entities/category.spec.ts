import { omit } from "lodash";
import { Category, CategoryProperties } from "./category";
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";

//mock = dublê de testes
//spyOn = espionar um variable, classe ou método
//setub = objeto falso

describe("Category Unit tests", () => {
  beforeEach(() => {
    Category.validate = jest.fn();
  })

  test("constructor of category", () => {
    let category = new Category({name: 'Movie'});
    let props = omit(category.props, "created_at");
    expect(Category.validate).toHaveBeenCalled();
    expect(props).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);
  })
});
