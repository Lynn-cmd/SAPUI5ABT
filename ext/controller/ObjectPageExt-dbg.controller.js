sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onInit: function (oEvent) { },

        onAfterRendering: function (oEvent) {

            var toolbar1 = this.byId("zychcn.zbplist::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_EDD12852_PARTNER--ID_ITEMs::Table-btnPersonalisation");
            toolbar1.setVisible(false);

            var toolbar2 = this.byId("zychcn.zbplist::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_EDD12852_PARTNER--QUAL_ITEMs::Table-btnPersonalisation");
            toolbar2.setVisible(false);

            var toolbar3 = this.byId("zychcn.zbplist::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_EDD12852_PARTNER--to_address::com.sap.vocabularies.UI.v1.LineItem::Table-btnPersonalisation");
            toolbar3.setVisible(false);

            var toolbar4 = this.byId("zychcn.zbplist::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_EDD12852_PARTNER--to_license::com.sap.vocabularies.UI.v1.LineItem::Table-btnPersonalisation");
            toolbar4.setVisible(false);

            var toolbar5 = this.byId("zychcn.zbplist::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_EDD12852_PARTNER--to_contator::com.sap.vocabularies.UI.v1.LineItem::Table-btnPersonalisation");
            toolbar5.setVisible(false);
        },

        onDisplay: function() {
            // create dialog lazily
            var that = this;
            if (!this.pDialog) {
                this.pDialog = sap.ui.xmlfragment(this.getView()
                    .getId(), "zychcn.zbplist.ext.fragments.Dialog", this);

                this.pDialog.setBindingContext(that.getView()
                    .getBindingContext());
                that.getView()
                    .addDependent(this.pDialog);
            }
            this.pDialog.setBindingContext(that.getView()
                .getBindingContext());
            that.pDialog.open();
        },

        onCloseDialog: function() {
            this.pDialog.close();
        }
    };
});