import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryService } from './CreateCategoryService'
import { CreateCategoryController } from './CreateCategoryController'

const createCategoriesRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoryService(createCategoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryService)

export { createCategoryController }
