import { ClientDb } from '../clients/clientDb';

class Service {

    private clientDb: ClientDb;

    public constructor(clientDb: ClientDb) {
        this.clientDb = clientDb;
    }


    public getEmailsFiltrados = async () => await this.clientDb.getEmailsFiltrados();

    public getEmailsFinalizados = async () => await this.clientDb.getEmailsFinalizados();

    public getEmailsNaoFinalizados = async () => await this.clientDb.getEmailsNaoFinalizados();

    public postHistoricoEmail = async (data) => await this.clientDb.postHistoricoEmail(data);

    public getEmailsNaoLidos1dia = async () => await this.clientDb.getEmailsNaoLidos1dia();

    public getEmailsNaoLidos2dias = async () => await this.clientDb.getEmailsNaoLidos2dias();

    public getEmailsNaoLidos3dias = async () => await this.clientDb.getEmailsNaoLidos3dias();

    public getEmailsNaoLidos5dias = async () => await this.clientDb.getEmailsNaoLidos5dias();

    public getEmailsNaoLidos7dias = async () => await this.clientDb.getEmailsNaoLidos7dias();

    public getEmailsNaoLidos15dias = async () => await this.clientDb.getEmailsNaoLidos15dias();

    public putFinalizarEmail = async (data) => await this.clientDb.putFinalizarEmail(data);
}

export default Service;