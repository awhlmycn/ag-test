<template>
  <button @click="showFull">全屏</button>
  <ag-grid-vue
    class="ag-theme-alpine"
    style="height: 500px"
    :columnDefs="columnDefs.value"
    :rowData="rowData.value"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    animateRows="true"
    :sideBar="true"
    rowGroupPanelShow='always'
    @cell-clicked="cellWasClicked"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "ag-grid-enterprise";
import { AgGridVue } from "ag-grid-vue3";  // the AG Grid Vue Component
import { reactive, onMounted, ref } from "vue";
import  '@vueuse/core'

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    const gridApi = ref(null); // Optional - for accessing Grid's API

    // Obtain API from grid's onGridReady event
    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

    // Each Column Definition results in one Column.
    const columnDefs = reactive({
      value: [
           { field: "make", enableRowGroup: true,  },
           { field: "model", enableRowGroup: true, },
           { field: "price", enableRowGroup: true, }
      ],
    });

    // DefaultColDef sets props common to all Columns
    const defaultColDef = {
        sortable: true,
        filter: true,
        flex: 1
    };
    const showFull = ()=>{
       var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }  else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    }

    // Example load data from server
    onMounted(() => {
      fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then((result) => result.json())
        .then((remoteRowData) => (rowData.value = remoteRowData));
    });

    return {
        onGridReady,
        columnDefs,
        rowData,
        defaultColDef,
        cellWasClicked: (event) => { // Example of consuming Grid Event
            console.log("cell was clicked", event);
        },
        deselectRows: () =>{
            gridApi.value.deselectAll()
        },
        showFull,
    };
  },
};
</script>

<style lang="scss"></style>