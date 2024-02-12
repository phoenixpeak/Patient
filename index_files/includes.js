/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/text/text.d.ts" />
define(["require", "exports", "../infrastructure/globalAjaxEvents", "../resources"], function (require, exports, globalAjaxEvents_1, resources_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    globalAjaxEvents_1.GlobalAjaxEvents.attachAjaxEvents();
    $.get('home/waitscreen').done(function (waitHtml) {
        $("body").append(waitHtml);
    });
    var Initializers = (function () {
        function Initializers() {
        }
        Initializers.replaceJSONParse = function () {
            var jsonParse = JSON.parse;
            var reDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,8})*(([\+\-]\d{2}:\d{2})*|Z*)$/i;
            function jsonDate(obj) {
                var type = typeof (obj);
                if (type == 'object') {
                    for (var p in obj)
                        if (obj.hasOwnProperty(p))
                            obj[p] = jsonDate(obj[p]);
                    return obj;
                }
                else if (type == 'string' && reDate.test(obj)) {
                    return new Date(obj);
                }
                return obj;
            }
            JSON.parse = function (str) { return jsonDate(jsonParse(str)); };
        };
        return Initializers;
    }());
    $.get('home/header').done(function (header) {
        $("body").prepend(header);
    });
    $.get('home/footer').done(function (footer) {
        $("body").append(footer);
    });
    $(function () {
        //replace json parser to proper parse date (so its not string, but Date object)
        Initializers.replaceJSONParse();
        window["Resources"] = resources_1.Resources;
    });
});
