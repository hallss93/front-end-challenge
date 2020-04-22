<template>
  <div class="m-10">
    <vue-tabs class="pl-10 pt-15">
      <v-tab title="Lojas">
        <div class="tab-body c-container-flex space-between mb-20 mt-10">
          <div class="o-text flex1">
            <div class="relative c-container-flex align-items-center">
              <input type="text" class="c-form__input disabled" />
              <span class="c-icon search absolute" style="right:10px;"></span>
            </div>
          </div>
          <p class="flex1 relative">
            <span class="o-button normal-radius black">
              <span class="c-icon filter absolute" style="left: 14px;"></span>
              <span class="ml-20">Filtrar por</span></span
            >
          </p>
        </div>
      </v-tab>
    </vue-tabs>
    <div class="c-container-flex align-items-center">
      <span class="c-badge no-radius violet left flex2">VERSÃO BETA</span>
      <p class="flex1"></p>
      <p class="flex1 relative">
        Tela em desenvolvimento <span class="c-icon light absolute"></span>
      </p>
    </div>
  </div>
</template>
