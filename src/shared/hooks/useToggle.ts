import { RefObject, useCallback, useEffect, useState } from 'react';

export default function useToggle(ref: RefObject<any>, initialState?: boolean) {
    const [value, setValue] = useState(!!initialState);

    const toggle = useCallback(() => setValue(x => !x), []);
    useOutsideAlerter(ref);

    return [value, toggle] as const;

    function useOutsideAlerter(ref: RefObject<any>) {
        useEffect(() => {
            function handleClickOutside(event: MouseEvent) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setValue(false);
                }
            }

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }
}
