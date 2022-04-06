class ConstantData {
    static DOMAIN = "https://api.deal24h.vn";
    static HEADERS = {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
    };

    // API URL
    // Login
    static URL_LOGIN = `${ConstantData.DOMAIN}/api/plugin-login_admin`;
}

export default ConstantData;