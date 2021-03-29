export const fetcher = (url: string) => {
    return fetch(url).then((response) => {
        if (!response.ok) {
            const { status, statusText } = response;
            throw Error(`${status}: ${statusText}`);
        }

        return response.json();
    });
};

export default fetcher;
