// const BASE_API = 'https://api-gcp.sige-edu.com:8000/api/';
const BASE_API = 'http//:0.0.0.0:8088/';

class Api {
  async getSubject(id) {
    console.log('id', id);
    const query = await fetch(`${BASE_API}user/`);
    const {data} = await query.json();
    console.log('subject', data);
    return data;
  }
}

export default new Api();
