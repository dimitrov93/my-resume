module.exports = () => (req, res, next) => {
    const allowed = ['https://dimitrov93.netlify.app/','http://localhost:3000', "https://myresume-node-deployment.onrender.com"];
    const origin = req.get("origin");
  
    if (allowed.includes(origin)) {                         //
      console.log('Origin: ' + req.get('origin'));
      res.setHeader('Access-Control-Allow-Origin', origin); // http://localhost:4200 or origin
      res.setHeader("Allow-Control-Access-Policy", "true");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Credentials, Allow-Control-Access-Policy, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    }                                                     //
    next();
  };