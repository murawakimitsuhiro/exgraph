import { Digraph, Node, Edge, digraph, toDot } from 'ts-graphviz';
import { parse } from '@ts-graphviz/parser';

export class ContextGraph {

    private g: Digraph
    public get dot(): string { return toDot(this.g) }

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
}