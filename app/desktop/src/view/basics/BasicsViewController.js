Ext.define("MyExtGenApp.view.basics.BasicsViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.basicsviewcontroller",

  onChangeTitle: function () {
    console.log("Change Title button clicked", this);
    const vm = this.getViewModel();
    vm.set("title", "Title Updated from ViewController");
    vm.set("restApiTitle", "REST API Title Updated from ViewController");
  },

  onViewReady: function () {
    const store = this.getViewModel().getStore("users");
    store.load();
  },
  onAddUser: function () {
    const form = this.lookup("userForm");
    const values = form.getValues();
    const store = this.getViewModel().getStore("users");
    store.add(values);
    store.sync();

    form.reset();
  },

  onRowSelect: function (grid, record) {
    this.lookup("userForm").setValues(record.data);
    this.selectedRecord = record;
  },

  onUpdateUser: function () {
    if (!this.selectedRecord) return;

    const values = this.lookup("userForm").getValues();
    this.selectedRecord.set(values);
    this.getViewModel().getStore("users").sync();
  },

  onDeleteUser: function () {
    const store = this.getViewModel().getStore("users");
    const record = this.selectedRecord;

    if (record) {
      store.remove(record);
      store.sync();
      this.lookup("userForm").reset();
    }
  },
});
