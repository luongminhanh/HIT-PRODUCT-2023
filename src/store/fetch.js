import { useEffect, useState } from "react";

const useFetch = async (url) => {
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(url);
                setData(data);
                setIsLoading(false);
                console.log(data);

            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            }
        })();
    }, [])
    return {
        data: data,
        isError: isError,
        isLoading: isLoading
    }
}

export default useFetch;