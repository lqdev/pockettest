module.exports = {
    code: {
        url:"https://getpocket.com/v3/oauth/request",
        method: "POST",
        headers: {
            "Content-Type":"application/json;charset=UTF8",
            "X-Accept":"application/json"
        },
        body: JSON.stringify({
            consumer_key:process.env.POCKETKEY,
            redirect_uri:"http://localhost:3979/api/authentication"
        })
    },
    token: {
        url:"https://getpocket.com/v3/oauth/authorize",
        method: "POST",
        headers: {
            "Content-Type":"application/json;charset=UTF8",
            "X-Accept":"application/json"
        },
        body: JSON.stringify({
            consumer_key:process.env.POCKETKEY,
            code:""
        })
    }
}