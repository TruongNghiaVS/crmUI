class ApiService {
    static httpPost (url, headers, body, callSuccess, callError) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((json) => {
            callSuccess(json);
        })
        .catch(error => {
            callError(error);
        });
    }
}

export default ApiService;