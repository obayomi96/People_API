interface Person {
  name: string
  height: string
  mass: string
  gender: string
  homeworld: string
  created_at: string
  updated_at: string
}

const getPeople = async (parent:any, args:any, context:any, info:any): Promise<Person> => {

  const response = await context.dataSources.peopleAPI.getPeople()

  return response;
}

const searchPerson = async (parent: any, args: any, context:any): Promise<Person> => {
  const { name } = args;
  const response = await context.dataSources.peopleAPI.searchPerson(name)

  return response
}

const getNextPage = async (parent: any, args: any, context:any): Promise<Person> => {
  const { page } = args;
  const response = await context.dataSources.peopleAPI.getNextPage(page)

  return response
}

export default {
  Query: {
    getPeople,
    searchPerson,
    getNextPage,
  },
};
