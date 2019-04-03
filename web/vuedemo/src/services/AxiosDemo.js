import axios from 'axios'
axios.interceptors.response.use((res) => {
  return res.data
})
export default {
  getUrl() {
    return {
      weather: 'http://localhost:8081/weather',
      ai: 'http://localhost:8081/ai'
    }
  },
  async getWeather(params) {
    return await axios.get(this.getUrl().weather, {
      params
    })
  },
  async getAi(params) {
    return await axios.post(this.getUrl().ai, params)
  }
}
