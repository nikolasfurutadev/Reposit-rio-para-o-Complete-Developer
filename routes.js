import fetch from "node-fetch";

const routeHello = () => "Hello World!";

const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json("<br>");
    } catch (error) {
        console.error(`error msg: ${error}`)
    }
    const names = data
    .map(i => `id: ${i.id}, name: ${i.name}`).join("<br>");
    return names
};

export {routeHello, routeAPINames};