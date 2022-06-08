class Users {
    constructor(id, email, username, biography, followers, subscribers) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.biography = biography;
        this.followers = followers;
        this.subscribers = subscribers;

    }
    static schema = {
        properties:{
            id: {type: "integer", format:"int64","required":true},
            email:{"type":"string","required":true},
            username:{"type":"string","required":true},
            biography: {"type":"string","required":true},
            followers: {type: "integer", format:"int64","required":true},
            subscribers: {type: "integer", format:"int64","required":true}
        }
    }
}

module.exports = Users;