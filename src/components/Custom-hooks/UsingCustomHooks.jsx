import React, { useRef, useState } from 'react';
import useFetch from './useFetch';
import useClickOutside from './useClickOutside';
import useWindowResize from './useWindowResize';

export default function UsingCustomHooks() {
    const { data, pending, error } = useFetch("https://dummyjson.com/products?limit=100", {});
    const [showContent, setShowContent] = useState(false);
    const contentRef = useRef(null);

    useClickOutside(contentRef, () => setShowContent(false));
    const windowSize = useWindowResize()

    return (
        <div id='usingCustomHooks'>
            <div>
                <h2>useWindowResize hook</h2>
                <p><strong>Width: </strong>{windowSize.width}</p>
                <p><strong>Height: </strong>{windowSize.height}</p>
            </div>
            <div>
                <h2>useFetch and useClickOutside Hooks</h2>
                {pending && <h3>Fetching... Please wait</h3>}
                {error && <h3 style={{ color: 'red' }}>Error: {error}</h3>}
                {
                    !showContent && <button onClick={() => setShowContent(true)}>Show Content</button>
                }
                {showContent && (
                    <ul ref={contentRef} style={{ width: "50%" }}>
                        {data?.products?.map((product, index) => (
                            <li key={index}>{product.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
