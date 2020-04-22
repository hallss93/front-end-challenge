import Req from './Req'
import { KANBANLEADS, KANBANTASK } from './URL'
import { KanbanList } from '@/models/KanbanList';
import { KanbanTask } from '@/models/KanbanTask';

async function getKanbanLeads(): Promise<KanbanList[]> {
    return await new Req(KANBANLEADS).get() as unknown as KanbanList[]
}
async function getKanbanTask(): Promise<KanbanTask[]> {
    return await new Req(KANBANTASK).get() as unknown as KanbanTask[]
}
export {
    getKanbanLeads,
    getKanbanTask
}