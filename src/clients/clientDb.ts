import { KnexSingleton } from '../utils/KnexSingleton';

class ClientDb {

    private conn = KnexSingleton.getInstance(process.env.DBHOST, process.env.DBUSER, Number.parseInt(process.env.DBPORT || "3306"), process.env.DBPASSWORD, process.env.DBNAME).conn;

    public constructor() { }


    public getEmailsFiltrados = async () => {
        return await this.conn.select('*')
            .from('emailsFiltrados')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsFinalizados = async () => {
        return await this.conn.select('*')
            .from('emailsFinalizados')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoFinalizados = async () => {
        return await this.conn.select('*')
            .from('emailsNaoFinalizados')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public postHistoricoEmail = async (data: any) => {
        const param = data.param;
        console.log('param: ', param)
        return await this.conn.select('*')
            .from('emails')
            .whereRaw(`assunto like '%${param}%'`)
            .orderBy('dataChegadaOuEnvio')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoLidos1dia = async () => {
        return await this.conn.select('*')
            .from('emailsNaoLidos1dia')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoLidos2dias = async () => {
        return await this.conn.select('*')
            .from('emailsNaoLidos2dias')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoLidos3dias = async () => {
        return await this.conn.select('*')
            .from('emailsNaoLidos3dias')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoLidos5dias = async () => {
        return await this.conn.select('*')
            .from('emailsNaoLidos5dias')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoLidos7dias = async () => {
        return await this.conn.select('*')
            .from('emailsNaoLidos7dias')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoLidos10dias = async () => {
        return await this.conn.select('*')
            .from('emailsNaoLidos10dias')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public putFinalizarEmail = async (data: any) => {
        const param = data.id;
        console.log('param: ', param)
        return await this.conn('emails')
            .update({ finalizado: 'Sim' })
            .where('id', '=', param)
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

    public getEmailsNaoLidosCount = async () => {
        return await this.conn.select('*')
            .from('emailsNaoLidosCount')
            .catch((err) => { throw new Error('Falha ao acessar banco de dados.'); });
    }

}

export { ClientDb }