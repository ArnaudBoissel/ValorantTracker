import axios from 'axios';

const API_URL = 'https://valorant-api.com/v1/agents';

export class ApiService {
  private static instance: ApiService;

  public constructor() {}

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  public getData() {
    return axios.get(`${API_URL}/data`);
  }

  public postData(data: any) {
    return axios.post(`${API_URL}/data`, data);
  }
}
