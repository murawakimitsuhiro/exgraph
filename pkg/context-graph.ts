import { Digraph, Node, Edge, digraph, toDot, NodeRef } from 'ts-graphviz';
import { parse } from '@ts-graphviz/parser';

export class ContextGraph {

    private readonly g: Digraph

    public readonly sections: Set<string>
    public get dot(): string { return toDot(this.g) }

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

    get edgeConnectedNodes(): NodeRef[] {
        return this.g.edges
            .flatMap(e => e.targets)
            .filter(et => isNodeRef(et))
    }

    public updateSection(before: string, current: string): void {
        console.debug(this.edgeConnectedNodes)

        this.g.edges
            .forEach(e => {
                e.targets.forEach(et => {
                    if (!(`id` in et)) { return }
                    if (et.id == before) {
                        et.id = current
                    }
                })
                // e.targets[0].id = 'aiueo'
            })
    }
}

const isNodeRef = (n: any): n is NodeRef => `id` in n;

