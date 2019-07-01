"use strict";

/**
 * InfoController
 * @description :: Server-side logic for ...
 */

module.exports = {
    getUserInfo : function(req, res){
        Info.find({}).populate('user').exec(function(err, data){
            res.ok(data);
        })
    }
};
