class LocalCache {
    constructor() {
        this.islands = [] ;
    }

    getAll() {
        return this.islands ;
    }

    populate(islands) {
        this.islands = islands;
    }
}
export default (new LocalCache() );