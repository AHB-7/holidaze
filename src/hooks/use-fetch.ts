import { useState, useCallback } from "react";
import { FetchOptions } from "../types/global.types";

function useFetch<T>(url: string, initialOptions?: FetchOptions) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(
        async (dynamicOptions?: FetchOptions) => {
            setLoading(true);
            try {
                const headers: HeadersInit = {
                    "Content-Type": "application/json",
                };

                const options = {
                    ...initialOptions,
                    ...dynamicOptions,
                };

                if (options?.accessToken) {
                    headers["Authorization"] = `Bearer ${options.accessToken}`;
                }

                const response = await fetch(url, {
                    method: options?.method || "GET",
                    headers,
                    body: options?.body
                        ? JSON.stringify(options.body)
                        : undefined,
                });

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }

                const responseData = await response.json();
                setData(responseData);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        },
        [url, initialOptions]
    );

    return { data, loading, error, fetchData };
}

export default useFetch;
