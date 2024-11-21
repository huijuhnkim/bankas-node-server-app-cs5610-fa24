import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

// starting Kanbas implementations!
export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to the Lab5");
    })

    PathParameters(app)
    QueryParameters(app)
    WorkingWithObjects(app)
    WorkingWithArrays(app)
}