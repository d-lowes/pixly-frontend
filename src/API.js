import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


/** API Class.
*
* Static class tying together methods used to get/send to to the API.
*
*/

class PixlyApi {

  /** Make an API request using axios. */
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = (method === "post")
    ? {'Content-Type': 'multipart/form-data',}
    :
    {};
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get all photos. */
  static async getPhotos() {
    let res = await this.request(`photos`);
    // let res = await axios.get(`${BASE_URL}/photos`)
    return res.photos;
  }

  /** Get a single photo. */
  static async getPhoto(id) {
    let res = await this.request(`photos/${id}`);
    return res.photo;
  }

  /** Get a single photo. */
  static async uploadPhoto(photo) {
    let res = await this.request(`upload`, photo, "post");
    // let res = await axios.post(`{}`)
    return res.photo;
  }

  /** Get a single photo. */
  static async deletePhoto(photoId) {
    let res = await this.request(`photos/${photoId}`, {}, "delete");
    // let res = await axios.post(`{}`)
    return res.photo;
  }
}

export { BASE_URL, PixlyApi };