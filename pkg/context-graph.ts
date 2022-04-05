import { Digraph, Node, Edge, digraph, toDot, NodeRef } from 'ts-graphviz';
import { parse } from '@ts-graphviz/parser';

export class ContextGraph {

    private g: Digraph

    readonly sections: Set<string>

    public get dot(): string { return toDot(this.g) }
    // public get sections(): Set<string> {
    //     return newSet(this.g.edges
    //         .flatMap(e => e.targets)
    //         .set
    // }

    constructor(dot?: string) {
        if (dot) {
            this.g = parse(dot)
            this.sections = new Set(
                this.g.edges
                    .flatMap(e => e.targets)
                    .map(n => `id` in n ? n.id : '')
                    .filter(id => id !== '')
            )
            return
        }

        this.g = digraph('G');
        this.sections = new Set<string>()
        // const MaP = new Node('すべての人間は死す。')
        // const SaM = new Node('ソクラテスは人間である。')
        // const SaP = new Node('ソクラテスは死す。')
        // this.g.addEdge(new Edge([MaP, SaP]))
        // this.g.addEdge(new Edge([SaM, SaP]))
    }
}
