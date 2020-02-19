import { ClientDb } from '../clients/clientDb';

class Service {

    private clientDb: ClientDb;

    public constructor(clientDb: ClientDb) {
        this.clientDb = clientDb;
    }


    public getViewAnexos = async () => await this.clientDb.getViewAnexos();

    public getViewAutor = async () => await this.clientDb.getViewAutor();

    public getViewDepartamento = async () => await this.clientDb.getViewDepartamento();

    public getViewEnviados = async () => await this.clientDb.getViewEnviados();

    public getViewFinalizados = async () => await this.clientDb.getViewFinalizados();

    public getViewIncidente = async () => await this.clientDb.getViewIncidente();

    public getViewNaoFinalizados = async () => await this.clientDb.getViewNaoFinalizados();

    public getViewNaoLidos = async () => await this.clientDb.getViewNaoLidos();

    public getViewPrioridade = async () => await this.clientDb.getViewPrioridade();

    public getViewRecebidos = async () => await this.clientDb.getViewRecebidos();

}

export default Service;