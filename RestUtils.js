export default class RestUtils {

    doGet(path, success) {
        const targetUrl = this._baseUrl + path;
        $.ajax({
            url: this._baseUrl + path,
            headers: {
                "Authorization": "Bearer " + this._user.access_token
            }
        }).then(function(data) {
            success(data);
        });
    }

    withBaseUrl(baseUrl) {
        this._baseUrl = baseUrl;
        return this;
    }

    withUser(user) {
        this._user = user;
        return this;
    }

}