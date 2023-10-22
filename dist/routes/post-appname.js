"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testAppNameRoute = void 0;
const zod_1 = require("zod");
async function testAppNameRoute(app) {
    app.post('/cad-app/:userid/user', (request, reply) => {
        const paramsSchema = zod_1.z.object({
            userid: zod_1.z.string().uuid()
        });
        const { userid } = paramsSchema.parse(request.params);
        const bodySchema = zod_1.z.object({
            prompt: zod_1.z.string()
        });
        const { prompt } = bodySchema.parse(request.body);
        return {
            userid,
            prompt,
        };
    });
}
exports.testAppNameRoute = testAppNameRoute;
