app.service('dtFormatterService', ['$log', function ($log) {

  
    var self = this;

    self.dateEncode = function(date){
        var dateArray = date.split("/");
        var date= ''
        for(var i=dateArray.length-1;i>=0;i--){
            date += dateArray[i];
        }

        return date;

    }

    self.dateDecode = function(date){

    }

    self.timeEncode = function(time){

    }

    self.timeDecode = function(time){

    }

    self.dateExtract = function(value){
        var dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/;
        var dateArray = (dateRegex.exec(value));
        return dateArray
    }


    
    
}])