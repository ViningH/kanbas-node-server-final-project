import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    const addModule = async (req, res) => {
        const { cid } = req.params;
        const module = await dao.addModule({ ...req.body, course: cid });
        res.json(module);
    };
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.mid);
        res.json(status);
    };
    const findModulesForCourse = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findModulesForCourse(cid);
        res.json(modules);
        return;
    };
    const updateModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.updateModule(mid, req.body);
        res.json(status);
    };
    app.post("/api/courses/:cid/modules", addModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.get("/api/courses/:cid/modules", findModulesForCourse);
    app.put("/api/modules/:mid", updateModule);
}