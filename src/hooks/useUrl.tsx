import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const updateQueryString = (key: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
};

export const useUrl = (init: any) => {

    const keys = Object.keys(init);
    const query = useSearchParams();
    const searchParams: any = useMemo(() => {
        let filter: any = {};
        for (const key of keys) {
            filter[key] = query.get(key) ? query.get(key) : init[key];
        }
        return filter
    }, [query]);

    const setSearchParams: any = (searchFilter: any) => {
        for (const key in keys) {
            updateQueryString(keys[key], searchFilter[keys[key]] ? searchFilter[keys[key]] : '');
        }
    };

    return {searchParams, setSearchParams};
    
}