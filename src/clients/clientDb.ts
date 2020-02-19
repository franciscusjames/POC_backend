import { KnexSingleton } from '../utils/KnexSingleton';

class ClientDb {

    private conn = KnexSingleton.getInstance(process.env.DBHOST, process.env.DBUSER, Number.parseInt(process.env.DBPORT || "3306"), process.env.DBPASSWORD, process.env.DBNAME).conn;

    public constructor() { }


    public getViewAnexos = async () => {
        return await this.conn.select('*')
            .from('viewAnexos')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewAutor = async () => {
        return await this.conn.select('*')
            .from('viewAutor')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewDepartamento = async () => {
        return await this.conn.select('*')
            .from('viewDepartamento')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewEnviados = async () => {
        return await this.conn.select('*')
            .from('viewEnviados')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewFinalizados = async () => {
        return await this.conn.select('*')
            .from('viewFinalizados')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewIncidente = async () => {
        return await this.conn.select('*')
            .from('viewIncidente')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewNaoFinalizados = async () => {
        return await this.conn.select('*')
            .from('viewNaoFinalizados')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewNaoLidos = async () => {
        return await this.conn.select('*')
            .from('viewNaoLidos')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewPrioridade = async () => {
        return await this.conn.select('*')
            .from('viewPrioridade')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getViewRecebidos = async () => {
        return await this.conn.select('*')
            .from('viewRecebidos')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

}

export { ClientDb }