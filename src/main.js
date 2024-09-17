import "../style.css";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en"

async function getDefinition(word) {
    const endpointURL = `${BASE_URL}/${word}`;
    const response = await fetch(endpointURL);
    const data = response.json();
    return data;
}

const callback = (data) => {
    console.log(data);
}

getDefinition("hello").then(callback)