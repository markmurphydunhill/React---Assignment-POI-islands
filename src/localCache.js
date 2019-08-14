import _ from "lodash";

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

    populateUsers(users) {
        this.users = users;
    }

    getAllUsers() {
        return this.users ;
    }

    update(key, name, description) {
        let index = _.findIndex(this.islands, island => island.name === key);
        if (index !== -1) {
            this.islands[index].name = name;
            this.islands[index].description = description;
            return true;
        }
        return false;
    }

    delete(k) {
        console.log('Delete');
        let elements = _.remove(this.islands, island => island.name === k);
        return elements;
    }



}
export default (new LocalCache() );