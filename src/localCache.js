class LocalCache {
    constructor() {
        this.islands = [];
        this.regions = [];
        this.users =[];
    }


    getAll() {
        return this.islands ;
    }

    populate(islands) {
        this.islands = islands;
    }

    populateRegions(regions) {
        this.regions = regions;
    }

    getAllRegions() {
        return this.regions ;
    }

    populateUsers(regions) {
        this.regions = regions;
    }

    getAllUsers() {
        return this.regions ;
    }


}
export default (new LocalCache() );