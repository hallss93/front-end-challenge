<template>
  <div>
    <header-kanban />
    <div class="c-align-items-center">
      <section class="lists-container">
        <list-kanban :list="leadsWaitContact" plusButton="true" />
        <list-kanban :list="leadsDoing" />
        <list-kanban :list="leadsProposal" />
        <list-kanban :list="leadsScheduledVisit" />
        <list-kanban :list="leadsTechnicalVisit" />
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

/* Components */
import ListKanban from "@/components/Kanban/List.vue";
import HeaderKanban from "@/components/Kanban/Header.vue";

/* Interfaces */
import { KanbanList } from "@/models/KanbanList";

/* Service */
import { getKanbanLeads } from "./../services/EndPoints";

@Component({
  components: {
    HeaderKanban,
    ListKanban,
  },
})
export default class Kanban extends Vue {
  leadsAll: KanbanList[] = [];
  leadsWaitContact: KanbanList[] = [];
  leadsDoing: KanbanList[] = [];
  leadsProposal: KanbanList[] = [];
  leadsScheduledVisit: KanbanList[] = [];
  leadsTechnicalVisit: KanbanList[] = [];

  @Prop() private msg!: string;

  @Emit()
  async getLeads() {
    this.leadsAll = await getKanbanLeads();
    this.leadsWaitContact = this.leadsAll.filter(
      (item: KanbanList) => item.status == 0
    );
    this.leadsDoing = this.leadsAll.filter(
      (item: KanbanList) => item.status == 1
    );
    this.leadsProposal = this.leadsAll.filter(
      (item: KanbanList) => item.status == 2
    );
    this.leadsScheduledVisit = this.leadsAll.filter(
      (item: KanbanList) => item.status == 3
    );
    this.leadsTechnicalVisit = this.leadsAll.filter(
      (item: KanbanList) => item.status == 4
    );
  }

  created() {
    this.getLeads();
  }
}
</script>