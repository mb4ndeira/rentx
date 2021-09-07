import { Specification } from '../../model/Specification'
import { ISpecificationsRepository, ICreateSpecificationDTO } from './ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[]

    constructor () {
      this.specifications = []
    }

    create ({ description, name }: ICreateSpecificationDTO) {
      const specification = new Specification()

      Object.assign(specification, { name, description, createdAt: new Date() })

      this.specifications.push(specification)
    }

    findByName (name: string) {
      const specification = this.specifications.find(specification => specification.name === name)

      return specification
    }
}

export { SpecificationsRepository }
