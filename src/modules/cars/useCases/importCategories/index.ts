import { ImportCategoriesService } from './ImportCategoriesService'
import { ImportCategoriesController } from './ImportCategoriesController'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoriesService = new ImportCategoriesService(categoriesRepository)
const importCategoriesController = new ImportCategoriesController(importCategoriesService)

export { importCategoriesController }
