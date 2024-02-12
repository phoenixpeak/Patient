/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ajax = (function () {
        function Ajax() {
        }
        Ajax.get = function (url, data, settings) {
            return $.ajax(this.getAjaxSettings(url, 'GET', data, settings));
        };
        Ajax.post = function (url, data, settings) {
            return $.ajax(this.getAjaxSettings(url, 'POST', ko.toJSON(data), settings));
        };
        Ajax.getAjaxSettings = function (url, verb, data, settings) {
            var result = {
                url: url,
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                method: verb,
                data: data
            };
            if (settings != undefined) {
                $.extend(result, settings);
            }
            return result;
        };
        return Ajax;
    }());
    exports.Ajax = Ajax;
});
