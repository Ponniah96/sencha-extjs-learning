Ext.define("MyExtGenApp.view.basics.BasicsViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.basicsviewmodel",

  data: {
    title: "Grid + ViewModel + ViewController + Store Example",
    restApiTitle:
      "Data Loaded from REST API Endpoint (Mock using Store Proxy) Example",
    crudApiTitle:
      "Data Loaded from CRUD REST API Endpoint (Mock using Store Proxy) Example",
  },
  stores: {
    users: {
      type: "basicsstore",
    },
  },
});
