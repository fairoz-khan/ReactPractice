import { useState, useEffect, useCallback } from 'react';
import copy from 'copy-to-clipboard'

const useCopyToClipBoard = (timeInterval: number): [boolean, (text: string | number) => void] => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback((text: string | number) => {
        if (typeof text === "string" || typeof text === "number") {
            copy(text.toString());
            setIsCopied(true);
        } else {
            console.log("can't copy to clipboard only string or number supported");
        }
    }, []);

    useEffect(() => {
        let timer: any;
        if (isCopied === true) {
            timer = setTimeout(() => setIsCopied(false), timeInterval);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [isCopied, timeInterval]);

    return [isCopied, handleCopy];
}

export default useCopyToClipBoard;