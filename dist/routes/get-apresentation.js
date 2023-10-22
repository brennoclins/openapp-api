"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApresentation = void 0;
async function getApresentation(app) {
    app.get('/', () => {
        return 'OpenApp API - API para abrir app no Windows ou Linux!';
    });
}
exports.getApresentation = getApresentation;
