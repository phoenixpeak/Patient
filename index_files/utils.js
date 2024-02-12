define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = (function () {
        function Utils() {
        }
        Utils.getHttpErrorMessage = function (errorObj) {
            var message = "";
            if (typeof (errorObj) == "string") {
                message = errorObj;
            }
            else if (errorObj["statusText"]) {
                message = errorObj["statusText"];
            }
            else {
                message = JSON.stringify(errorObj);
            }
            return message;
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
