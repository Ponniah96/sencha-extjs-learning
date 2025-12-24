// Ext.define("MyExtGenApp.view.basics.BasicsStore", {
//   extend: "Ext.data.Store",
//   alias: "store.basicsstore",

//   fields: ["id", "name", "role"],

//   data: [
//     { id: 1, name: "John", role: "Developer" },
//     { id: 2, name: "Sara", role: "Tester" },
//     { id: 3, name: "Mike", role: "Manager" },
//     { id: 4, name: "Anna", role: "Designer" },
//     { id: 5, name: "Tom", role: "Support" },
//   ],
// });

// Ext.define("MyExtGenApp.view.basics.BasicsStore", {
//   extend: "Ext.data.Store",
//   alias: "store.basicsstore",

//   fields: ["id", "name", "role"],
//   // autoLoad: true,

//   proxy: {
//     type: "ajax",
//     url: "resources/data/users.json",
//     reader: {
//       type: "json",
//       rootProperty: "data",
//     },
//   },
// });

Ext.define("MyExtGenApp.view.basics.BasicsStore", {
  extend: "Ext.data.Store",
  alias: "store.basicsstore",

  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "role", type: "string" },
  ],

  autoLoad: true,
  autoSync: false,

  proxy: {
    type: "rest",
    url: "resources/data/users.json",

    reader: {
      type: "json",
      rootProperty: "users",
    },

    writer: {
      type: "json",
      writeAllFields: true,
    },
  },
});

// Ext.define("MyExtGenApp.view.basics.BasicsStore", {
//   extend: "Ext.data.Store",
//   alias: "store.basicsstore",

//   fields: ["id", "name", "role"],
//   autoLoad: true,
//   autoSync: true,

//   proxy: {
//     type: "rest",
//     url: "http://localhost:5147/api/users",

//     reader: {
//       type: "json",
//     },

//     writer: {
//       type: "json",
//       writeAllFields: true,
//     },
//   },
// });
