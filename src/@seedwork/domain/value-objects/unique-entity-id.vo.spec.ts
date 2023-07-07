import InvalidUuidError from "../../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";
import { validate as uuidValidate } from "uuid";

describe("UniqueEntityId Unit Test", () => {

  it("should throw error when uuid is invalid", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate"); //chama o método validate
    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled(); //verifica se validate está sendo chamado
  });

  it("should accept a uuid passed in constructor", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate"); //chama o método validate
    const uuid = "3233e944-4197-45e7-bbd6-642d33d600e3"
    const vo = new UniqueEntityId(uuid)
    expect(vo.id).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled();
  })

  it("should throw error when uuid is null", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate"); //chama o método validate
    const vo = new UniqueEntityId()
    expect(uuidValidate(vo.id)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled(); 
  })
});
