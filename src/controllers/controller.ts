import { Request, Response } from 'express';
import Service from '../services/service';
import { ClientDb } from '../clients/clientDb';


export const getViewAnexos = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewAnexos();
    console.log(response);
    res.status(200).json(response);
}

export const getViewAutor = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewAutor();
    console.log(response);
    res.status(200).json(response);
}

export const getViewDepartamento = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewDepartamento();
    console.log(response);
    res.status(200).json(response);
}

export const getViewEnviados = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewEnviados();
    console.log(response);
    res.status(200).json(response);
}

export const getViewFinalizados = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewFinalizados();
    console.log(response);
    res.status(200).json(response);
}

export const getViewIncidente = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewIncidente();
    console.log(response);
    res.status(200).json(response);
}

export const getViewNaoFinalizados = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewNaoFinalizados();
    console.log(response);
    res.status(200).json(response);
}

export const getViewNaoLidos = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewNaoLidos();
    console.log(response);
    res.status(200).json(response);
}

export const getViewPrioridade = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewPrioridade();
    console.log(response);
    res.status(200).json(response);
}

export const getViewRecebidos = async (req: Request, res: Response) => {
    const service = new Service(new ClientDb());
    const response = await service.getViewRecebidos();
    console.log(response);
    res.status(200).json(response);
}