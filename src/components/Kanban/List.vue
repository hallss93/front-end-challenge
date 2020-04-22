<template>
  <div class="list">
    <h3 class="list-title">
      <span v-if="plusButton" class="o-button bk-white plus">+</span>
    </h3>
    <ul class="list-items">
      <li
        v-for="(l, index) in list"
        :key="index"
        :class="{ disabled: l.disabled }"
      >
        <div class="c-container-flex space-between">
          <p class="p-5 pl-10 flex1">Status</p>
          <p class="p-5 center">Última atualização:</p>
          <p class="bk-gray p-5 center">
            <span class="c-icon time absolute"></span>
            <span class="ml-20">{{ l.lastUpdate }}</span>
          </p>
        </div>
        <div class="card bk-gray-light">
          <div class="c-container-flex space-between">
            <p class="c-container-flex">
              <span class="c-icon user"></span>{{ l.name }}
            </p>
            <p class="violet">
              Origem: <span class="black">{{ l.origem }}</span>
            </p>
          </div>
          <div class="c-container-flex justify-center">
            <span
              class="c-badge mt-10"
              :class="{
                success: l.status == 1,
                primary: l.status == 2,
                violet: l.status == 3,
              }"
              >{{ l.statusStr }}
              <span class="pl-20"
                ><span class="c-icon time-white absolute"></span>
                <span class="pl-25">
                  {{ l.time }}
                </span>
              </span></span
            >
          </div>
          <div class="mt-10 ml-30 relative" v-if="l.projects">
            <span class="c-icon clock absolute"></span>
            <p class="violet pl-30">
              QTD. Projetos:
              <span class="o-text bold black">{{ l.projects }}</span>
            </p>
          </div>
          <div class="mt-10 relative">
            <p class="violet pl-30">
              Responsável:
              <span class="o-text bold violet-dark">{{ l.resposavel }}</span>
            </p>
          </div>
        </div>
        <div class="bk-gray p-10 relative" v-if="l.simulacao">
          <span class="c-icon dolar absolute"></span>
          <p class="violet-dark ml-20">
            Valor da Simulação:
            <span class="o-text bold black">{{ l.simulacao }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { KanbanList } from "@/models/KanbanList";

@Component
export default class List extends Vue {
  @Prop() private list!: KanbanList[];
  @Prop() private plusButton!: boolean;
}
</script>
