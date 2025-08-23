sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("msg.ri.controller.Main", {

    onInit: function () {
      // Step 1: Create a model object
      var oModel = new JSONModel();
      // Step 2: Set data to the model

        // var data = {
        //         "empStr": {
        //             "empId": 100,
        //             "eName": "PK",
        //             "salary": 5000,
        //             "curr": "USD"
        //         },
        //         "empTab": [
        //             { "empId": 4000, "eName": "Jessica", "salary": 1500, "curr": "USD" },
        //             { "empId": 4001, "eName": "Bilal",   "salary": 9100, "curr": "AED" },
        //             { "empId": 4002, "eName": "Rohit",   "salary": 7800, "curr": "USD" },
        //             { "empId": 4003, "eName": "Mathias", "salary": 8900, "curr": "EUR" },
        //             { "empId": 4004, "eName": "Kim Pu",  "salary": 7400, "curr": "JPY" }
        //         ]
        //     };
        //     oModel.setData(data);

      oModel.loadData("model/mockdata/employe.json");
      // Step 3: Set model to Core (global scope)
      sap.ui.getCore().setModel(oModel);
    },

    onSubmit: function () {
      var empSal = this.getView().byId("eSalary").bindValue("/empStr/salary");
      var empCurr = this.getView().byId("eCurr").bindProperty("value", "/empStr/curr");


    }

  });
});