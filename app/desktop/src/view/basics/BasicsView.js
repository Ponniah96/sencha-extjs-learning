Ext.define("MyExtGenApp.view.basics.BasicsView", {
  extend: "Ext.Container",
  xtype: "basicsview",
  cls: "basicsview",
  controller: "basicsviewcontroller",
  viewModel: "basicsviewmodel",

  padding: 20,
  scrollable: true,

  items: [
    {
      xtype: "component",
      bind: {
        html: "<h2>{title}</h2>",
      },
    },
    {
      xtype: "button",
      cls: "basicsviewbutton",
      text: "Change Title",
      margin: "10 0",
      handler: "onChangeTitle",
    },
    {
      xtype: "grid",
      height: 300,
      bind: {
        store: "{users}",
      },
      columns: [
        { text: "ID", dataIndex: "id", width: 80 },
        { text: "Name", dataIndex: "name", flex: 1 },
        { text: "Role", dataIndex: "role", flex: 1 },
      ],
    },
    {
      xtype: "component",
      bind: {
        html: "<h3>{restApiTitle}</h3>",
      },
    },
    {
      xtype: "grid",
      height: 300,
      bind: {
        store: "{users}",
      },
      columns: [
        { text: "ID", dataIndex: "id", width: 80 },
        { text: "Name", dataIndex: "name", flex: 1 },
        { text: "Role", dataIndex: "role", flex: 1 },
      ],
      listeners: {
        painted: "onViewReady",
      },
    },
    {
      xtype: "component",
      bind: {
        html: "<h3>{crudApiTitle}</h3>",
      },
    },
    {
      xtype: "formpanel",
      reference: "userForm",
      width: 400,
      items: [
        { xtype: "numberfield", name: "id", label: "ID", required: true },
        { xtype: "textfield", name: "name", label: "Name", required: true },
        { xtype: "textfield", name: "role", label: "Role", required: true },
      ],
      buttons: [
        { text: "Add", handler: "onAddUser" },
        { text: "Update", handler: "onUpdateUser" },
      ],
    },
    {
      xtype: "grid",
      flex: 1,
      height: 300,
      margin: "20 0 0",
      bind: { store: "{users}" },
      columns: [
        { text: "ID", dataIndex: "id", width: 80 },
        { text: "Name", dataIndex: "name", flex: 1 },
        { text: "Role", dataIndex: "role", flex: 1 },
      ],
      listeners: {
        painted: "onViewReady",
        select: "onRowSelect",
      },
    },
    {
      xtype: "button",
      text: "Delete Selected",
      ui: "decline",
      handler: "onDeleteUser",
    },
  ],
});
