class LocalCache {
    constructor() {
        this.islands = [];
        this.regions = [];
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


}
export default (new LocalCache() );