import Entity from "../../../@seedwork/domain/entity/entity";
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";
import ValidatorRules from "../../../@seedwork/validators/validator-rules";
import CategoryValidatorFactory from "../validators/category.validator";

// Este tipo define as propriedades de uma entidade Category.
export type CategoryProperties = {
  name: string;
  is_active?: boolean;
  description?: string;
  created_at?: Date;
};

export class Category extends Entity<CategoryProperties> {
  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    Category.validate(props);
    super(props, id);
    this.description = this.props.description;
    this.props.is_active = this.props.is_active ?? true;
    // Define a propriedade created_at com o valor da propriedade props.created_at, ou com a data atual se a propriedade props.created_at não for definida.
    this.props.created_at = this.props.created_at ?? new Date();
  }

  update(name: string, description: string): void {
    Category.validate({
      name,
      description,
      is_active: this.is_active,
    });
    // Define as propriedades name e description com os valores especificados.
    this.props.name = name;
    this.props.description = description;
  }

  // Este método estático valida as propriedades de um objeto CategoryProperties.
  // static validate(props: Omit<CategoryProperties, "created_at">) {
  //   ValidatorRules.values(props.name, "name")
  //     .required()
  //     .string()
  //     .maxLength(255);
  //   ValidatorRules.values(props.description, "description").string();
  //   ValidatorRules.values(props.is_active, "is_active").boolean();
  // }

  static validate(props: CategoryProperties){
    const validator = CategoryValidatorFactory.create();
    validator.validate(props)
  }

  activate() {
    this.props.is_active = true;
  }

  desactive() {
    this.props.is_active = false;
  }

  // Esses getters e setters obtêm e definem as propriedades da categoria.
  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  private set description(value) {
    this.props.description = this.props.description ?? null;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  private set is_active(value) {
    this.props.is_active = value ?? true;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
