import axios from 'axios'
axios.interceptors.response.use((res) => {
  return res.data
})
export default {
  getUrl() {
    return 'http://localhost:8081/weather'
  },
  async get(params) {
    return await axios.get(this.getUrl(), {
      params
    })
  }
}
