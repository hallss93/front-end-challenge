<template>
  <div class="list">
    <h3 class="list-title small left">
      <div class="c-container-flex space-between">
        <p class="o-text large bold">Pendente</p>
        <p class="o-text large bold relative">
          <span class="c-icon gatilho absolute"></span>
          <span class="ml-25">Gatilhos</span>
        </p>
      </div>
    </h3>
    <ul class="list-items">
      <li
        v-for="(l, index) in list"
        :key="index"
        :class="{ disabled: l.disabled }"
      >
        <div class="c-container-flex space-between">
          <span class="c-mark" :class="l.color"></span>
        </div>
        <div class="card bk-gray-light">
          <div class="c-container-flex">
            <p class="mb-10 o-text large bold">{{ l.statusStr }}</p>
          </div>
          <div class="c-container-flex space-between">
            <p class="c-container-flex">
              <span class="c-icon user"></span>{{ l.responsavel }}
            </p>
            <p class="c-container-flex" v-if="l.projeto">
              <span class="c-icon clock"></span>Projeto {{ l.projeto }}
            </p>
          </div>
          <div class="c-container-flex justify-center mt-20">
            <div class="flex1 relative c-container-flex">
              <p class="o-text" v-if="l.comments">
                <span class="c-icon comment absolute"></span>
                <span class="ml-30">{{ l.comments }}</span>
              </p>
              <p class="o-text ml-15" v-if="l.end && l.total">
                <span class="c-icon tick absolute"></span>
                <span class="ml-30">{{ l.end }}/{{ l.total }}</span>
              </p>
            </div>
            <div class="flex1 right" v-if="l.lastUpdate">
              <p class="bk-gray p-5 center">
                <span class="c-icon time absolute"></span>
                <span class="ml-20">{{ l.lastUpdate }}</span>
              </p>
            </div>
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
