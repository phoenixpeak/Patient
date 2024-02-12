define(["require", "exports", "../services/odok", "../infrastructure/utils", "./includes"], function (require, exports, odok_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PatientViewModel = (function () {
        function PatientViewModel() {
            var _this = this;
            this.Docs = ko.observableArray([]);
            this.SelectedId = ko.observable("");
            this.ErrorMessage = ko.observable("");
            this.Loading = ko.observable(false);
            this.SelectedPatientID = ko.observable("");
            this.service = new odok_1.ODok();
            this.SelectedPatientID.subscribe(function (newVal) { return _this.refreshData(newVal); });
        }
        PatientViewModel.prototype.refreshData = function (id) {
            var _this = this;
            this.Loading(true);
            this.SelectedId("");
            return this.service.getDocList(id).done(function (docs) {
                _this.Docs(docs);
                _this.ErrorMessage("");
            }).fail(function (fail) {
                _this.ErrorMessage(utils_1.Utils.getHttpErrorMessage(fail));
            }).always(function () {
                _this.Loading(false);
            });
        };
        PatientViewModel.prototype.downloadFiles = function () {
            if (this.SelectedId()) {
                var params = $.param({ id: [this.SelectedId()] });
                window.location.href = "patient/download?" + params;
            }
        };
        PatientViewModel.prototype.toggleSelection = function (id) {
            this.SelectedId(id);
        };
        return PatientViewModel;
    }());
    $(function () {
        ko.applyBindings(new PatientViewModel());
    });
});
