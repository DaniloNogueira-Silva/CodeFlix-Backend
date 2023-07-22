import { SearchatbleRepositoryInterface } from "../../../@seedwork/domain/repository/repository-contracts";
import { Category } from "../entities/category";

export default interface CategoryRepository
  extends SearchatbleRepositoryInterface<Category, any, any> {}
