import axios from 'axios';

const token = "your_bearer_token_here"; // O'ziga mos tokenni qo'ying

const axiosRequest = async (method, url, data = null) => {
  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });

    return response.data;
  } catch (error) {
    console.error('Xatolik:', error.message);
    return null;
  }
};

export default axiosRequest;