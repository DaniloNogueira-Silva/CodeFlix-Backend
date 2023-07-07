import UniqueEntityId from "../value-objects/unique-entity-id.vo";

export default abstract class Entity<Props> {
  public readonly uniqueEntityId: UniqueEntityId;

  //uniqueEntityId = value object

  constructor(public readonly props: Props, id?: UniqueEntityId) {
    this.uniqueEntityId = id || new UniqueEntityId();
  }

  get id() {
    return this.uniqueEntityId.value;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this.id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}
