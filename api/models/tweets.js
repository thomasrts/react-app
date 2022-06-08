class Tweets {
    constructor(id, content, idUser) {
        this.id = id;
        this.content = content;
        this.idUser = idUser;
    }
    static schema = {
        properties:{
            id: {type: "integer", format:"int64","required":true},
            content: {"type":"string","required":true},
            idUser: {"type":"string","required":true}
        }
    }
}

module.exports = Tweets;