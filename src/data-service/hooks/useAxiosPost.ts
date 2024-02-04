import { useState } from "react";
import axiosInstance from "../utils/axios";
import { AxiosError } from "axios";

const useAxiosPost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPostRequest = async (
    url: string,
    data: { sender: string; content: { message: string } }
  ) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(url, data);
      // Handle successful response (e.g., update state, etc.)
      return response.data;
    } catch (err: AxiosError | any) {
      setError(err.message);
      // Handle error (e.g., show an error message)
      console.error("Error sending POST request:", err);
    } finally {
      setLoading(false);
    }
  };

  return { sendPostRequest, loading, error };
};

export default useAxiosPost;
