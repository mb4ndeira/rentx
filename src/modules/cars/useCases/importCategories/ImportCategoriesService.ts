import fs from 'fs'
import csvParse from 'csv-parse'

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoriesService {
  constructor (private categoriesRepository: ICategoriesRepository) {}

  loadCategories (file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)

      const parseFile = csvParse()

      stream.pipe(parseFile)

      const categories: IImportCategory[] = []

      parseFile.on('data', async (line) => {
        const [name, description] = line
        categories.push({ name, description })
      }).on('end', () => {
        resolve(categories)
      }).on('error', (err) => {
        reject(err)
      })
    })
  }

  async execute (file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(category => {
      const { name } = category

      const categoryExist = this.categoriesRepository.findByName(name)

      if (!categoryExist) this.categoriesRepository.create(category)
    })
  }
}

export { ImportCategoriesService }
