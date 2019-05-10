const dashboardService=require('../services/dashboard');

module.exports = (app) => {

    app.get('/getAll', (req,res) => {
        dashboardService().getAll(req,res);
     });

     app.delete('/delete/:id', (req,res) => {
        dashboardService().deleteData(req,res);
     });
   
     app.post('/createData', (req,res) => {
        dashboardService().createData(req,res);
     });
   
     app.put('/editData/:id', (req,res) => {
        dashboardService().edit(req,res);
     });

}