const Unit = require('./unit');

class Node extends Unit {

    constructor(entity, properties) {
        super(entity, properties);
        this.edges = _.stubArray();
        this.inputEdges = _.stubArray();
        this.outputEdges = _.stubArray();
    }

    unlink() {
        let edges = this.edges;

        for (let i = 0, len = edges.length; i < len; i++) {
            edges[i].unlink();
        }

        return true;
    }

}