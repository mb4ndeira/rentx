import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory/index'
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index'
import { importCategoriesController } from 'src/modules/cars/useCases/importCategories'

const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoriesController.handle(request, response)
})

export { categoriesRoutes }
