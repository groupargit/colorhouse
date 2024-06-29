import {useState, useEffect} from 'react';

const useCreateLogger = API => {
  console.log(API);
  const [loggerCreate, setLoggerCreate] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window
      .fetch(API)
      .then(res => res.json())
      .then(response => {
        setLoggerCreate(response);
        setLoading(false);
      });
  }, [API]);
  return {loggerCreate, loading};
};
export default useCreateLogger;
