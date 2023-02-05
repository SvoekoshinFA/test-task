var jasper = require('node-jasper-report');

exports.get = (req, res) => {
    //beware of the datatype of your parameter.
    var report = {
        report: 'hw',
        data: {
            id: parseInt(req.query.id, 10),
            secundaryDataset: jasper.toJsonDataSource({
                data: "test"
            },'data')
        },
        dataset: "test"
    };
    var resp = jasper.export(
        {
            report: 'jasper_report',
            data: {
                name: 'Gonzalo',
                lastname: 'Pogi',
            },
            dataset: [
                {
                    name: 'Gonzalo',
                    lastname: 'Vinas' // TODO: check on UTF-8
                },
                {
                    name: 'Agustin',
                    lastname: 'Moyano'
                }
            ]
        },
        'docx'
    )

    res.send(resp);
};