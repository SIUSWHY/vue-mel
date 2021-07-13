export const login = async (data) => {
    return fetch({
        method: 'POST',
        body: JSON.stringify(data),
        url: 'http://localhost:3000/login'
    }).then((response) => {
        return response.json()
    })
}
