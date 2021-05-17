import { RESTDataSource } from 'apollo-datasource-rest'

class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async getPeople(): Promise<string[]> {
    const response = await this.get('people');

    return response.results;
  }

  async searchPerson(name: string) {
    const response = await this.get(`people/?search=${name}`);
    
    return response.results;
  }

  async getNextPage(page: number) {
    const response = await this.get(`people/?page=${page}`);
    
    return response.results;
  }

}

export default PeopleAPI;
