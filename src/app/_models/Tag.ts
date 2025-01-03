export class tag {
    static readonly ANGULAR = new tag('Angular', 'red');
    static readonly TYPESCRIPT = new tag('Typescript', 'darkred');
    static readonly PYTHON = new tag('Python', 'pink');
    static readonly JAVA = new tag('Java', 'orange');
    static readonly SPRINGBOOT = new tag('SpringBoot', 'orange');
    static readonly NODEJS = new tag('Node.js', 'brown');
    static readonly REACT = new tag('React', 'blue');

    private constructor(private readonly key: string, public readonly color:string){

    }

    toString() {
        return this.key;
    }
}