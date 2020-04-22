export interface KanbanTask {
    id: number;
    statusStr: string;
    status: number;
    color?: string;
    responsavel: string;
    comments?: number;
    files?: number;
    end?: number;
    total?: number;
    lastUpdate: string;
    projeto?: string;
    actual: boolean;
    disabled: boolean;
}