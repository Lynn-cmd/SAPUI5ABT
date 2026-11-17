sap.ui.define([
    "sap/ui/model/Filter",
    "sap/ui/comp/smartfilterbar/SmartFilterBar",
    "sap/m/ComboBox"
], function (Filter,
    SmartFilterBar,
    ComboBox,
    format) {
    "use strict";
    return {
        onInit: function (oEvent) { },

        onAfterRendering: function (oEvent) {

            var headSettings = this.byId("zychcn.zbplist::sap.suite.ui.generic.template.ListReport.view.ListReport::ZC_EDD12852_PARTNER--listReport-btnPersonalisation");
            headSettings.setVisible(false);

        }
    };
});