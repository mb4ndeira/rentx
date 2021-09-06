import { ListCategoriesService } from './ListCategoriesService'
import { ListCategoriesController } from './ListCategoriesController'
import { CategoriesRepository } from '../../repositories/CategoriesRepository'

const categoriesRepository = new CategoriesRepository()
const listCategoriesService = new ListCategoriesService(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesService)

export { listCategoriesController }
