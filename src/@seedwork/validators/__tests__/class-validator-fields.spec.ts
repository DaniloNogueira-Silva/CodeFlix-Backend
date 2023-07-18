import { ClassValidorFields } from "../class-validator-fields";

class StubClassValidator extends ClassValidorFields<{field: string}> {

}

describe('ClassValidatorFields Unit Tests', () => {
    it('should initialize erros and validatedData variable with null', () => {
        const validator =  new StubClassValidator();
        expect(validator.errors).toBeNull()
        expect(validator.validatedData).toBeNull()
    })
})