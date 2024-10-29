export const fetchData = async (page) => {
    const apiUrl = "http://api.doggiepedia.org/all";

    return fetch(`${apiUrl}?page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`
                );
            }
            return response.json();
        })
        .then((data) => {
            return data.breeds.map((item) => {
                return {
                    ...item,
                    image: `https://assets.doggiepedia.org/dogs/${item.image}`,
                };
            });
        });
};
