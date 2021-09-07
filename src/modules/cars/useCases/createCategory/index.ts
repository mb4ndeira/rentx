import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { CreateCategoryService } from './CreateCategoryService'
import { CreateCategoryController } from './CreateCategoryController'

const createCategoriesRepository = CategoriesRepository.getInstance()
const createCategoryService = new CreateCategoryService(createCategoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryService)

export { createCategoryController }
