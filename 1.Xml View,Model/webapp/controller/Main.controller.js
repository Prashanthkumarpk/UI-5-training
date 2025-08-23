sap.ui.define([
    "sap/ui/core/mvc/Controller"],
    function(Controller) {
      return Controller.extend("msg.ri.controller.Main", {
    
       onInit: function() {
        this.View = sap.ui.getCore().byId("idInput");
       }







        });
    });