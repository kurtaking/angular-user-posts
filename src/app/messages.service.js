"use strict";
var MessagesService = (function () {
    function MessagesService() {
    }
    MessagesService.prototype.getMessages = function () {
        return ['Message1', 'Message2', 'Message3'];
    };
    return MessagesService;
}());
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map