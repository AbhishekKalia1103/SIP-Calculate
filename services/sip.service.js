var ctr = require("../controllers/sip.controller")

module.exports.sip = function(req,res){
    if(ctr.sip_ctr){
        var months = req.body.period*12;
        var rate = req.body.rate/12;
        var monInvest = req.body.monInvest;
        var sum = 0;
        var Return = 0;

        for(var i = 1;i<=months;i++)
        {
            sum = monInvest*(Math.pow((1 + rate/100),i)); 
            Return += sum; 
        }

        res.status(200).json(Return);
    }
    else
        res.status(400).json({error: "Incorrect Value Entered"});
}