<template>
  <div>
    <header-store />
    <div class="m-25 p-20 c-card">
      <div class="c-container-flex space-between mb-10">
        <p class="o-text gigant bold">Próximas Tarefas</p>
        <div class="control-nav relative c-container-flex">
          <div class="control-prev">
            <span class="c-icon back absolute"></span>
          </div>
          <div class="control-next">
            <span class="c-icon from absolute"></span>
          </div>
        </div>
      </div>
      <carousel>
        <div class="p-5" v-for="i in 10" :key="i">
          <div class="card bk-gray-light p-15">
            <p>Em andamento</p>
            <p class="ml-20 mt-10 mb-20 o-text bold large">Agendar Visita</p>
            <div class="c-container-flex space-between">
              <p class="c-container-flex">
                <span class="c-icon user"></span>Rodrigo Santos
              </p>
              <p class="c-container-flex">
                <span class="c-icon clock"></span>Projeto Casa
              </p>
            </div>
            <div class="c-container-flex justify-center mt-20">
              <div class="flex1 relative c-container-flex">
                <p class="o-text">
                  <span class="c-icon comment absolute"></span>
                  <span class="ml-30">3</span>
                </p>
                <p class="o-text ml-15">
                  <span class="c-icon tick absolute"></span>
                  <span class="ml-30">2/2</span>
                </p>
              </div>
              <div class="flex1 right">
                <button class="o-button concluir">Concluir</button>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </div>
    <div class="c-align-items-center">
      <p class="o-text gigant bold">Tarefas</p>
      <section class="lists-container">
        <list-store :list="tasksWaitContact" plusButton="true" />
        <list-store :list="tasksDoing" />
        <list-store :list="tasksProposal" />
        <list-store :list="tasksScheduledVisit" />
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

/* Components */
import ListStore from "@/components/Store/List.vue";
import HeaderStore from "@/components/Store/Header.vue";
import carousel from "vue-owl-carousel";

/* Interfaces */
import { KanbanTask } from "@/models/KanbanTask";

/* Service */
import { getKanbanTask } from "./../services/EndPoints";

@Component({
  components: {
    HeaderStore,
    ListStore,
    carousel,
  },
})
export default class Store extends Vue {
  tasksAll: KanbanTask[] = [];
  tasksWaitContact: KanbanTask[] = [];
  tasksDoing: KanbanTask[] = [];
  tasksProposal: KanbanTask[] = [];
  tasksScheduledVisit: KanbanTask[] = [];

  @Prop() private msg!: string;

  @Emit()
  async getTasks() {
    this.tasksAll = await getKanbanTask();
    this.tasksWaitContact = this.tasksAll.filter(
      (item: KanbanTask) => item.status == 0
    );
    this.tasksDoing = this.tasksAll.filter(
      (item: KanbanTask) => item.status == 1
    );
    this.tasksProposal = this.tasksAll.filter(
      (item: KanbanTask) => item.status == 2
    );
    this.tasksScheduledVisit = this.tasksAll.filter(
      (item: KanbanTask) => item.status == 3
    );
  }

  created() {
    this.getTasks();
  }
}
</script>