define(["require", "exports", "../settings", "../infrastructure/ajax"], function (require, exports, settings_1, ajax_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ODok = (function () {
        function ODok() {
        }
        ODok.prototype.getUrl = function (action) {
            return settings_1.Settings.ODokServiceUrl + action;
        };
        ODok.prototype.getDocList = function (personID) {
            return ajax_1.Ajax.get(this.getUrl("getDoclist"), {
                personID: personID
            });
        };
        ODok.prototype.getDocsDownloadLink = function (ids) {
            return this.getUrl("getDocs") + "?" + $.param({
                tmpIDs: ids
            }, true);
        };
        ODok.prototype.getArztDocListKlient = function (arztID, ssn, firstName, lastName, birthDate) {
            return ajax_1.Ajax.get(this.getUrl("getArztDocListKlient"), {
                arztID: arztID,
                ssn: ssn,
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate
            });
        };
        ODok.prototype.getArztDocListDays = function (arztID, days) {
            return ajax_1.Ajax.get(this.getUrl("getArztDocListDays"), {
                arztID: arztID,
                days: days
            });
        };
        ODok.prototype.getArztDocListNew = function (arztID) {
            return ajax_1.Ajax.get(this.getUrl("getArztDocListNew"), {
                arztID: arztID
            });
        };
        ODok.prototype.getArztDocListTSpan = function (arztID, from, to) {
            return ajax_1.Ajax.get(this.getUrl("getArztDocListTSpan"), {
                arztID: arztID,
                from: from,
                to: to
            });
        };
        return ODok;
    }());
    exports.ODok = ODok;
});
