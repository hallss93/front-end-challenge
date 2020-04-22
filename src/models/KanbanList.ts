export interface KanbanList {
    id: number;
    name: string;
    origem: string;
    projects?: string;
    resposavel: string;
    simulacao?: string;
    status: number;
    statusStr: string;
    time: string;
    lastUpdate: string;
    disabled: boolean;
}