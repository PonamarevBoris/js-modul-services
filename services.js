const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

async function getResorce(url) {
    let res = await fetch(url);

    if (!res.ok){
        throw new Error(`Could not fetch ${url}, stasus: ${res.status}`);
    }

    return await res.join();
}

export {postData};
export {getResorce};