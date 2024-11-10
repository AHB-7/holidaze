import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((responseData: { data: T }) => {
                setData(responseData.data);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
