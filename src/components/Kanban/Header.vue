<template>
  <div class="m-10">
    <vue-tabs class="pl-10 pt-15">
      <v-tab title="Kanban Leads">
        <div class="tab-body c-container-flex">
          <div class="o-text flex1 pt-10">
            <span class="o-text large">Mudar para kanban de:</span>
            <p class="o-button normal-radius ml-10 relative">
              <span
                class="c-icon user-white absolute"
                style="left: 14px;"
              ></span
              ><span class="ml-20">Leads</span>
            </p>
            <p class="o-button normal-radius disabled relative">
              <span
                class="c-icon clock-white absolute"
                style="left: 14px;"
              ></span>
              <span class="ml-20">Projeto</span>
            </p>
          </div>
          <p class="flex1 relative pt-10">
            <span class="o-button normal-radius black">
              <span class="c-icon filter absolute" style="left: 14px;"></span>
              <span class="ml-20">Filtrar por</span></span
            >
          </p>
        </div>
      </v-tab>
    </vue-tabs>
    <div class="c-container-flex align-items-center mt-20">
      <span class="c-badge no-radius violet left flex2">VERSÃO BETA</span>
      <p class="flex1"></p>
      <p class="flex1 relative">
        Tela em desenvolvimento <span class="c-icon light absolute"></span>
      </p>
    </div>
  </div>
</template>
