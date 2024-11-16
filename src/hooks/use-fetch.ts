import { useState, useCallback } from "react";
import { FetchOptions } from "../types/global.types";

function useFetch<T>(url: string, options?: FetchOptions) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(
        async (requestOptions?: FetchOptions) => {
            setLoading(true);
            try {
                const headers: HeadersInit = {
                    "Content-Type": "application/json",
                };

                if (requestOptions?.accessToken || options?.accessToken) {
                    headers["Authorization"] = `Bearer ${
                        requestOptions?.accessToken || options?.accessToken
                    }`;
                }

                const response = await fetch(url, {
                    method: requestOptions?.method || options?.method || "GET",
                    headers,
                    body: requestOptions?.body
                        ? JSON.stringify(requestOptions.body)
                        : options?.body
                        ? JSON.stringify(options.body)
                        : undefined,
                });

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }

                const responseData: T = await response.json();
                setData(responseData);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        },
        [url, options]
    );

    return { data, loading, error, fetchData };
}

export default useFetch;
