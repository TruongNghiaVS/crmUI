class ApiService {
    static httpPost (url, headers, body, callback) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((json) => {
            callback(json);
        })
        .catch(error => {
            console.error(error);
        });
    }
}

export default ApiService;