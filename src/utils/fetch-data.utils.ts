export const getData = async <T>(url: string): Promise<T> => {
    const response = fetch(url);
    return (await response).json();
};
