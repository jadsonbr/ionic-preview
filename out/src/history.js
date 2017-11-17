"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandHistory {
    constructor() {
        this.history = [];
    }
    dispose() {
    }
    enqueue(cmd, cwd) {
        var last = this.last();
        if (last == undefined || (last.cmd !== cmd || last.cwd !== cwd)) {
            this.history.push({ cmd: cmd, cwd: cwd });
        }
    }
    commands() {
        return this.history;
    }
    last() {
        if (this.history.length == 0) {
            return undefined;
        }
        return this.history[this.history.length - 1];
    }
}
exports.CommandHistory = CommandHistory;
//# sourceMappingURL=history.js.map