import { Digraph, Node, Edge, digraph, toDot, INode, RootClusterAttributes } from 'ts-graphviz';
import { parse } from '@ts-graphviz/parser';

export class ContextGraph {

    private g: Digraph

    public get dot(): string { return toDot(this.g) }
    public get nodes(): any { return this.g.nodes }

    constructor(dot?: string) {
        if (dot) {
            this.g = parse(dot)
            return
        }

        this.g = digraph('G');
        const MaP = new Node('すべての人間は死す。')
        const SaM = new Node('ソクラテスは人間である。')
        const SaP = new Node('ソクラテスは死す。')
        this.g.addEdge(new Edge([MaP, SaP]))
        this.g.addEdge(new Edge([SaM, SaP]))
    }

    public printNodes() {
        console.debug('nodes', this.g.nodes)
    }
}

export class CustomGraph extends Digraph {
    constructor() {
        super('G')
        const maP = new Node('A')
        const saM = new Node('B')
        const saP = new Node('C')
        this.addEdge(new Edge([maP, saP]))
        this.addEdge(new Edge([saM, saP]))

        console.debug(this.nodes)
    }
}


// export class ContextGraph extends Digraph {
//
//     public get dot(): string { return toDot(this) }
//     // public get sections(): any { return this.nodes }
//
//     constructor() {
//         super('G')
//         const MaP = new Node('すべての人間は死す。')
//         const SaM = new Node('ソクラテスは人間である。')
//         const SaP = new Node('ソクラテスは死す。')
//         this.addEdge(new Edge([MaP, SaP]))
//         this.addEdge(new Edge([SaM, SaP]))
//     }
//
//     public printNodes() {
//         console.debug(this.nodes)
//     }
// }