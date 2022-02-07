module.exports.sip_ctr = function(req,res){
    var period = req.period;
    var rate = req.rate;
    var monInvest = req.monInvest;

    if(!isNaN(period) && !isNaN(rate) && !isNaN(monInvest))
    {
        if(period > 0 && rate > 0 && monInvest > 0)
        {
            return true;
        }
    }
        
    else
        return false;
        
}