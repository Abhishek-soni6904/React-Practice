import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            setPending(true);
            setError(null);
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(response.statusText);
                const result = await response.json();
                if (isMounted) setData(result);
            } catch (err) {
                if (isMounted) setError("Error Occurred: " + err.message);
            } finally {
                if (isMounted) setPending(false);
            }
        }
        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, pending, error };
}