define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalAjaxEvents = (function () {
        function GlobalAjaxEvents() {
        }
        GlobalAjaxEvents.onAjaxStart = function () {
            $(".wait-holder-curtain").show();
        };
        GlobalAjaxEvents.onAjaxStop = function () {
            $(".wait-holder-curtain").hide();
        };
        GlobalAjaxEvents.attachAjaxEvents = function () {
            $(document).on("ajaxStart", this.onAjaxStart);
            $(document).on("ajaxStop", this.onAjaxStop);
        };
        return GlobalAjaxEvents;
    }());
    exports.GlobalAjaxEvents = GlobalAjaxEvents;
});
