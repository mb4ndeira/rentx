import { request, Router } from 'express'
import { v4 as uuid } from 'uuid'

import { CategoriesRepository } from 'src/repositories/CategoriesRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if (categoryAlreadyExists) {
    return response.status(400).json({ details: 'Category already exists' })
  }

  categoriesRepository.create({ name, description })

  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list()

  return response.status(200).json(all)
})

export { categoriesRoutes }
