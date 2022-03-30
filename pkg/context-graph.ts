import { Digraph, digraph, toDot } from 'ts-graphviz';
import { parse } from '@ts-graphviz/parser';

export class ContextGraph {

    private g: Digraph
    public get dot(): string { return toDot(this.g) }

    // constructor() {
    //     this.g = digraph('G');
    //
    //     const subgraphA = g.createSubgraph('A');
    //     const nodeA1 = subgraphA.createNode('A_node1');
    //     const nodeA2 = subgraphA.createNode('A_node2');
    //     subgraphA.createEdge([nodeA1, nodeA2]);
    //
    //     const subgraphB = g.createSubgraph('B');
    //     const nodeB1 = subgraphB.createNode('B_node1');
    //     const nodeB2 = subgraphB.createNode('B_node2');
    //     subgraphA.createEdge([nodeB1, nodeB2]);
    //
    //     const node1 = g.createNode('node1');
    //     const node2 = g.createNode('node2');
    //     g.createEdge([node1, node2]);
    // }

    constructor(dot: string) {
        this.g = parse(dot)
    }
}