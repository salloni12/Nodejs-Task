const loginService=require('../service/login');

module.exports = (app) => {
    app.post('/login', (req,res) => {
        
        loginService().login(req,res);
    });

    app.post('/register', (req,res) => {
        loginService().register(req,res);
    });

    
   
    

}