export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
        const {a, b, operation } = req.query;
        let result = 0

        switch (operation) {
            case "add":
                result = parseInt(a) + parseInt(b);
                break;
            case "subtract":
                result = parseInt(a) - parseInt(b);
                break;
            case "multiply":
                result = parseInt(a) * parseInt(b);
                break;
            case "divide":
                if (b !== 0) {
                    result = parseFloat(a) / parseFloat(b);
                    break
                } else {
                    result = "zero division error"
                    break;
                }
            default:
                result = "Invalid operation";
        }

        res.send(result.toString());
    })
}