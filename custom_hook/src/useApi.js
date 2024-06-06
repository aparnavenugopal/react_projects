import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const [postLoading, setPostLoading] = useState(false);
    const [postError, setPostError] = useState(null);

    // Fetch data from the API
    useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await axios.get(url);
            setData(response.data);
        }catch(error){
           setError(error);
        }finally{
            setLoading(false);
        }
      };
      fetchData();
  }, [url]);

  const postData = async (postDataObj) => {
    setPostLoading(true);
    try{
        const result = await axios.post(url, postDataObj);
        setResponse(result.data);
        setData([result.data, ...data]);
    }catch(error){
        setPostError(error);
    }finally{
        setPostLoading(false);
    }
  };

  return { data, loading, error, response, postLoading, postError, postData };
};

export default useApi;