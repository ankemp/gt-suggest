const _ = require('lodash');

class Unit {
    // Entity is used as node or edge type, for different classifications
    //    i.e. 'person', 'game', 'road', etc.
    constructor(entity, properties) {
        this.entity = entity + '';
        this.load(properties || {});
    }

    // load properties (id, name, age, etc.) from an object
    load(properties) {
        let p = _.stubObject();
        _.forEach(_.keysIn(properties), (key) => {
            p[key] = properties[key];
        })
        this.properties = p;
        return this;
    }

    set(property, value) {
        return this.properties[property] = value;
    }

    unset(property) {
        return _.unset(this.properties, property);
    }

    has(property) {
        return _.has(this.properties, property);
    }

    get(property) {
        return _.get(this.properties, property);
    }

    toString() {
        return _.toString(this.properties);
        // return [this.constructor.name, ' (', this.entity, ' ', JSON.stringify(this.properties), ')'].join('');
    }

}

module.exports = Unit;