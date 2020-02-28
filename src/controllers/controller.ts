import { Request, Response } from 'express';
import Service from '../services/service';
import { ClientDb } from '../clients/clientDb';


export const getEmailsFiltrados = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsFiltrados();
    console.log(response);
    res.status(200).json(response);
}

export const getEmailsFinalizados = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsFinalizados();
    console.log(response);
    res.status(200).json(response);
}

export const getEmailsNaoFinalizados = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoFinalizados();
    console.log(response);
    res.status(200).json(response);
}

export const postHistoricoEmail = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.postHistoricoEmail(req.body);
    console.log(response);
    res.status(201).json(response);
}

export const getEmailsNaoLidos1dia = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoLidos1dia();
    console.log(response);
    res.status(200).json(response);
}

export const getEmailsNaoLidos2dias = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoLidos2dias();
    console.log(response);
    res.status(200).json(response);
}

export const getEmailsNaoLidos3dias = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoLidos3dias();
    console.log(response);
    res.status(200).json(response);
}

export const getEmailsNaoLidos5dias = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoLidos5dias();
    console.log(response);
    res.status(200).json(response);
}

export const getEmailsNaoLidos7dias = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoLidos7dias();
    console.log(response);
    res.status(200).json(response);
}

export const getEmailsNaoLidos10dias = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoLidos10dias();
    console.log(response);
    res.status(200).json(response);
}

export const putFinalizarEmail = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.putFinalizarEmail(req.body);
    console.log(response);
    res.status(201).json(response);
}

export const getEmailsNaoLidosCount = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getEmailsNaoLidosCount();
    console.log(response);
    res.status(200).json(response);
}