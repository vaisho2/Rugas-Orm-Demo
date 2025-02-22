// Importing useEffect for fetching data and useState for managing state
import { useEffect, useState } from "react";

// Custom hook for fetching product data from an API
const useFetchProducts = (url) => {
  // State variables to store fetched data, loading state, and error messages
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Asynchronous function to fetch data
    const fetchData = async () => {
      try {
        // Fetching data from the given URL
        const response = await fetch(url);
        // Handling unsuccessful responses
        if (!response.ok) throw new Error("Failed to fetch data");
        // Parsing response as JSON
        const result = await response.json();
        // Storing the fetched products in state
        setData(result.products);
      } catch (error) {
        // Storing any errors encountered
        setError(error.message);
      } finally {
        // Setting loading to false after the fetch completes
        setLoading(false);
      }
    };

    // Calling the fetch function when the component mounts
    fetchData();
  }, [url]); // Dependency array ensures fetching happens when the URL changes

  // Returning the fetched data, loading state, and any errors
  return { data, loading, error };
};

// Exporting the custom hook
export default useFetchProducts;
