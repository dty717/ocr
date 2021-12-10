        
        //MD
        function MonitoringDataReset(){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x4D;
            returnBytes[5]=0x44;
            returnBytes[6]=0x46;
            returnBytes[7]=0x46;
            returnBytes[8]=0x46;
            returnBytes[9]=0x46;
            returnBytes[10]=0x46;
            returnBytes[11]=0x46;
 
            addBccEnd(returnBytes);
            return returnBytes;
        }
        function MonitoringDataResetCheck(data){
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x4D&&data[5]==0x44)
                    return true;
            }
            return false;
        }
        function MonitoringData(data){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x4D;
            returnBytes[5]=0x44;
            var i=6;
            for(var j=0;j<data.length;j++){
                returnBytes[i++]=data[j].charCodeAt(0);
                returnBytes[i++]=data[j].charCodeAt(1);
                returnBytes[i++]=data[j].charCodeAt(2);
                returnBytes[i++]=data[j].charCodeAt(3);
                returnBytes[i++]=data[j].charCodeAt(4);
                returnBytes[i++]=data[j].charCodeAt(5);
            }
            addBccEnd(returnBytes);
            return returnBytes;
        }
        function MonitoringDataCheck(data){
            return MonitoringDataResetCheck(data);
        }
        function MonitoringDataRead(data){
            var num=(data.length-9)/6;
            var order=[];
            for(var i=0;i<num;i++){
                order[i]=String.fromCharCode(data[6+i*6])+String.fromCharCode(data[7+i*6])
                +String.fromCharCode(data[8+i*6])+String.fromCharCode(data[9+i*6])
                +String.fromCharCode(data[10+i*6])+String.fromCharCode(data[11+i*6]);
            }
            return order;
        }
        function MonitoringDataReadCheck(data){
            if(Check(data)){
                if(data[3]==0x23&&data[4]==0x4D&&data[5]==0x44)
                    return true;
            }
            return false;
        }
        
        
        //MC
        function MonitoringContactsReset(){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x4D;
            returnBytes[5]=0x43;
            returnBytes[6]=0x46;
            returnBytes[7]=0x46;
            returnBytes[8]=0x46;
            returnBytes[9]=0x46;
            returnBytes[10]=0x46;
            addBccEnd(returnBytes);
            return returnBytes;
        }
        function MonitoringContactsResetCheck(data){
            var returnBytes=[];
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x4D&&data[5]==0x43)
                    return true;
            }
            return false;
        }
        function MonitoringContacts(data){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x4D;
            returnBytes[5]=0x43;
            var i=6;
            for(var j=0;j<data.length;j++){
                returnBytes[i++]=data[j].charCodeAt(0);
                returnBytes[i++]=data[j].charCodeAt(1);
                returnBytes[i++]=data[j].charCodeAt(2);
                returnBytes[i++]=data[j].charCodeAt(3);
                returnBytes[i++]=data[j].charCodeAt(4);
            }
            addBccEnd(returnBytes);
            return returnBytes;
        }
        
        function MonitoringContactsCheck(data){
            return MonitoringContactsResetCheck(data);
        }
        function MonitoringContactsRead(data){
            var num=(data.length-9)/5;
            var order=[];
            for(var i=0;i<num;i++){
                order[i]=String.fromCharCode(data[6+i*5])+String.fromCharCode(data[7+i*5])
                +String.fromCharCode(data[8+i*5])+String.fromCharCode(data[9+i*5])
                +String.fromCharCode(data[10+i*5]);
            }
            return order;
        }
        function MonitoringContactsReadCheck(data){
            if(Check(data)){
                if(data[3]==0x23&&data[4]==0x4D&&data[5]==0x43)
                    return true;
            }
            return false;
        }
        //MG
        function Monitoring(){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x4D;
            returnBytes[5]=0x47;
            addBccEnd(returnBytes);
            return returnBytes;
        }
    //RD
        function ReadDataArea(type, datasLength, _startAddr){
            var returnBytes=[];
            var _endAddr=(parseInt(_startAddr)+datasLength-1).toString().toUpperCase();
            // console.log(_endAddr)
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x52;
            returnBytes[5]=0x44;            
            
            returnBytes[6]=GetTypeByte(type);
            
            var startAddr=S5(_startAddr);
            var endAddr= S5(_endAddr);
            returnBytes[7] = startAddr[0];
            returnBytes[8] = startAddr[1];
            returnBytes[9] = startAddr[2];
            returnBytes[10] = startAddr[3];
            returnBytes[11] = startAddr[4];

            returnBytes[12] = endAddr[0];
            returnBytes[13] = endAddr[1];
            returnBytes[14] = endAddr[2];
            returnBytes[15] = endAddr[3];
            returnBytes[16] = endAddr[4];
            addBccEnd(returnBytes);
            return returnBytes;
        }    

    //RCC
        function ReadContactRange(type, datas, _startAddr){
            var returnBytes=[];
            var _endAddr=(parseInt("0x"+_startAddr)+(datas.length-1)*4).toString(16).toUpperCase();
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x52;
            returnBytes[5]=0x43;
            returnBytes[6]=0x43;

            returnBytes[7]=GetTypeByte(type);

            var startAddr=_startAddr;
            var endAddr=S4(_endAddr);
            returnBytes[8] = startAddr[0].charCodeAt(0);
            returnBytes[9] = startAddr[1].charCodeAt(0);
            returnBytes[10] = startAddr[2].charCodeAt(0);
            returnBytes[11] = startAddr[3].charCodeAt(0);

            returnBytes[12] = endAddr[0].charCodeAt(0);
            returnBytes[13] = endAddr[1].charCodeAt(0);
            returnBytes[14] = endAddr[2].charCodeAt(0);
            returnBytes[15] = endAddr[3].charCodeAt(0);
            addBccEnd(returnBytes);
            return returnBytes;
        }
        
        function ReadContactRangeCheck(data){
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x52&&data[5]==0x43)
                    return true;
            }
            return false;
        }
        function GetContactRange(data){
            var num=(data.length-9)/4;
            var return_value=[];
            var k=0;
            var _data=ConvertData(data,6,data.length-3);
            for(var i=6;i<data.length-3;i++){
                return_value[k++]=BytesToHex(_data,i,4);
                i+=3;
            }
            // console.log(return_value);
        }
    //RCS
        function ReadContactSingle(type, _startAddr){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x52;
            returnBytes[5]=0x43;
            returnBytes[6]=0x53;
            
            returnBytes[7]=GetTypeByte(type);
            
            var startAddr=S4(_startAddr);
            returnBytes[8] = startAddr[0].charCodeAt(0);
            returnBytes[9] = startAddr[1].charCodeAt(0);
            returnBytes[10] = startAddr[2].charCodeAt(0);
            returnBytes[11] = startAddr[3].charCodeAt(0);
            addBccEnd(returnBytes);
            return returnBytes;
        }
        
        function ReadContactSingleCheck(data){
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x52&&data[5]==0x43){
                    return true;
                }
            }
            return false;
        }
        
        function GetReadContactSingle(data){
            if(data[6]==0x30){
                return false;
            }
            return true;
        }
        
    //RCP
        function ReadContactPlural(types,_startAddrs){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x52;
            returnBytes[5]=0x43;
            returnBytes[6]=0x50;
            var len=types.length;
            returnBytes[7]=len+0x30;
            for(var i=0;i<len;i++){
                returnBytes[8+5*i]=GetTypeByte(types[i]);
                var startAddr=S4(_startAddrs[i]);
                returnBytes[9+5*i] = startAddr[0].charCodeAt(0);
                returnBytes[10+5*i] = startAddr[1].charCodeAt(0);
                returnBytes[11+5*i] = startAddr[2].charCodeAt(0);
                returnBytes[12+5*i] = startAddr[3].charCodeAt(0);
            }
            addBccEnd(returnBytes);
            return returnBytes;
        }
        
        //RT
         function ReadStatus(){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x52;
            returnBytes[5]=0x54;
            addBccEnd(returnBytes);
            return returnBytes;
        }
        
        function ReadStatusCheck(){
            //25 45 45 24 52 54 
            //32 30 31 35 33 32 38 30 30 30 30 30 30 30 30 30 30 38 0D
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x52&&data[5]==0x54)
                    return true;
            }
            return false;
        }
        function getStatus(data){
            var _data=ConvertData(data);
            
            var Model_code=_data[6]*10+_data[7];
            var Version=(_data[8]*10+_data[9])/10;
            var Program_capacity=BytesToHex(_data,10,2).toString(16);
            var Operation_mode=BytesToHex(_data,12,2);
            var Link_information_for_system=BytesToHex(_data,14,2);
            var Error_flag=BytesToHex(_data,16,2);
            var Self_diagnostic_error=BytesToHex(_data,18,4);
            // console.log(Model_code,Version,Program_capacity,Operation_mode);
        }
        //WS
        function  WriteTimerOrCounter(datas,_startAddr){
            var returnBytes=[];
            var _endAddr=_startAddr+(datas.length-1)*4;
            returnBytes[0]=0x3C;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x57;
            returnBytes[5]=0x53;
            
            var startAddr=S_Num(_startAddr,4);
            var endAddr=S_Num(_endAddr,4);
            returnBytes[6] = startAddr[0];
            returnBytes[7] = startAddr[1];
            returnBytes[8] = startAddr[2];
            returnBytes[9] = startAddr[3];
            
            returnBytes[10] = endAddr[0];
            returnBytes[11] = endAddr[1];
            returnBytes[12] = endAddr[2];
            returnBytes[13] = endAddr[3];
            
            for(var i=0;i<datas.length;i++){
                var tem=DataToBytes(datas[i]);
                returnBytes[14+i]=tem[0];
                returnBytes[15+i]=tem[1];
                returnBytes[16+i]=tem[2];
                returnBytes[17+i]=tem[3];
                i+=4;
            }
            addBccEnd(returnBytes);
            return returnBytes;
        }
        function  WriteTimerOrCounter_(data,startAddr){
            return WriteTimerOrCounter([data],startAddr);       
        } 
        function WriteTimerOrCounterCheck(data){
            //25 45 45 24 57 43 31 35 0D
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x57&&data[5]==0x43)
                    return true;
            }
            return false;
        }
        
        //WCP
        function WriteContactPlural(types,_startAddrs,values){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x57;
            returnBytes[5]=0x43;
            returnBytes[6]=0x50;
            var len=types.length;
            returnBytes[7]=len+0x30;
            for(var i=0;i<len;i++){
                returnBytes[8+6*i]=GetTypeByte(types[i]);
                var startAddr=S4(_startAddrs[i]);
                returnBytes[9+6*i] = startAddr[0].charCodeAt(0);
                returnBytes[10+6*i] = startAddr[1].charCodeAt(0);
                returnBytes[11+6*i] = startAddr[2].charCodeAt(0);
                returnBytes[12+6*i] = startAddr[3].charCodeAt(0);
                var value=values[i];
                if(value===true||(value===1)){
                    returnBytes[13+6*i]=0x31;
                }else if(value==false||(value===0)){
                    returnBytes[13+6*i]=0x30;
                }else{
                    returnBytes[13+6*i]=value.charCodeAt(0);
                }
            }
            addBccEnd(returnBytes);
            return returnBytes;
        }
        
        //WCS
        function WriteContactSingle(type, _startAddr,value){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x57;
            returnBytes[5]=0x43;
            returnBytes[6]=0x53;
            
            returnBytes[7]=GetTypeByte(type);
            
            var startAddr=S4(_startAddr);
            returnBytes[8] = startAddr[0].charCodeAt(0);
            returnBytes[9] = startAddr[1].charCodeAt(0);
            returnBytes[10] = startAddr[2].charCodeAt(0);
            returnBytes[11] = startAddr[3].charCodeAt(0);
            
            if(value===true||(value===1)){
                returnBytes[12]=0x31;
            }else if(value==false||(value===0)){
                returnBytes[12]=0x30;
            }else{
                returnBytes[12]=value.charCodeAt(0);
            }
            addBccEnd(returnBytes);
            return returnBytes;
        }
        
        //WD
        function WriteData(type,datas, _startAddr){
            var returnBytes=[];
            var _endAddr=(parseInt(_startAddr)+datas.length-1).toString().toUpperCase();

            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x57;
            returnBytes[5]=0x44;
            
            returnBytes[6]=GetDataTypeByte(type);
            
            var startAddr=S5(_startAddr);
            var endAddr=S5(_endAddr);
            returnBytes[7] = startAddr[0];
            returnBytes[8] = startAddr[1];
            returnBytes[9] = startAddr[2];
            returnBytes[10] = startAddr[3];
            returnBytes[11] = startAddr[4];
            
            returnBytes[12] = endAddr[0];
            returnBytes[13] = endAddr[1];
            returnBytes[14] = endAddr[2];
            returnBytes[15] = endAddr[3];
            returnBytes[16] = endAddr[4];

            for(var i=0;i<datas.length;i++){
                var tem=DataToBytes(datas[i]);
                returnBytes[17+i*4]=tem[0];
                returnBytes[18+i*4]=tem[1];
                returnBytes[19+i*4]=tem[2];
                returnBytes[20+i*4]=tem[3];
            }
            addBccEnd(returnBytes);
            return returnBytes;
            //上位机指令:3C 45 45 23 57 44 44 30 30 34 33 32 30 30 34 33 32 42 43 30 34 34 44 0D 
            // < E E # W D D 0 0 4 3 2 0 0 4 3 2 B C 0 4 4 D 
        }
        function  WriteData_(type, data, startAddr){
            return WriteData(type,[data],startAddr);       
        }
        function ConvertData(data){
           var returnBytes=[];
            for(var i=0;i<data.length;i++){
                returnBytes[i]=ConvertData_(data[i]);
            }
            return returnBytes;
        }
        function  ConvertData_(data){
            if(data>='0'.charCodeAt(0)&&data<='9'.charCodeAt(0)){
                return data-'0'.charCodeAt(0);
            }else if(data>='A'.charCodeAt(0)&&data<='F'.charCodeAt(0)){
                return data-'A'.charCodeAt(0)+10;
            }else if(data>='a'.charCodeAt(0)&&data<='f'.charCodeAt(0)){
                return data-'a'.charCodeAt(0)+10;
            }
            return 0;
        }
        
        function  BytesToHex_(data){
            if(data.length==2){
                return data[0]<<4+data[1];
            }else if(data.length==4){
                return (data[0]<<4)+data[1]+(data[2]<<12)+(data[3]<<8);
            }
            return 0;
        }
        function  BytesToHex(data,start,len){
            if(len==2){
                // console.log(data[start],data[start+1]);
                return (data[start]<<4)+data[start+1];
            }else if(len==4){
                return (data[start+0]<<4)+data[start+1]+(data[start+2]<<12)+(data[start+3]<<8);
            }
            return 0;
        }
        
        function DataToBytes( data){
            var returnBytes =[];
            var _1=4096;
            for(var i=0;i<4;i++){
                returnBytes[i]=parseInt(data/ _1);
                data-=returnBytes[i]*_1;
                _1/=16;
            }
            var tem=returnBytes[0];
            returnBytes[0]=returnBytes[2].toString(16).toUpperCase().charCodeAt(0);
            returnBytes[2]=tem.toString(16).toUpperCase().charCodeAt(0);
            tem=returnBytes[1];
            returnBytes[1]=returnBytes[3].toString(16).toUpperCase().charCodeAt(0);
            returnBytes[3]=tem.toString(16).toUpperCase().charCodeAt(0);
            return returnBytes;      
        }
        function WriteDataCheck(data){
            //3C 45 45 24 57 44 30 42 0D
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x57&&data[5]==0x44)
                    return true;
            }
            return false;
        }
        function S_Num(data,num){
            var returnBytes =[];
            var _1k=Math.pow(10,num-1);
            for(var i=0;i<num;i++){
                returnBytes[i]=(parseInt(data/ _1k)+'0'.charCodeAt(0));
                data-=parseInt(data/ _1k)*_1k;
                _1k/=10
            }
            return returnBytes;
        }
        function S5(data){
            var returnBytes =[];
            var _1k=10000;
            data = parseInt(data);
            for(var i=0;i<5;i++){
                returnBytes[i]=(parseInt(data/ _1k)+'0'.charCodeAt(0));
                data-=parseInt(data/ _1k)*_1k;
                _1k/=10
            }
            return returnBytes;
        } 
        function S4(str){
            var len=str.length;
            for(var i=0;i<4-len;i++){
                str="0"+str;
            }
            return str;
        }
        function DoubleToBytes(val){
            var returnBytes=[];
            var view = new DataView(new ArrayBuffer(4));
            view.setFloat32(0, val);
            var str=view.getInt32(0).toString(16).toUpperCase(); //bits of the 32 bit float
            for(var i=0;i<8-str.length;i++){
                str="0"+str;
            }
            for(var i=0;i<8;i+=2){
                returnBytes.push(str[6-i].charCodeAt(0))
                returnBytes.push(str[7-i].charCodeAt(0))
            }
            return returnBytes;
        }
        function  BytesToDouble(data){
            var t=data[0];
            data[0]=data[3];
            data[3]=data[1];
            data[1]=data[2];
            data[2]=t;
            // Create a buffer
            var buf = new ArrayBuffer(4);
            // Create a data view of it
            var view = new DataView(buf);
            
            // set bytes
            data.forEach(function (b, i) {
                view.setUint8(i, b);
            });
            
            // Read the bits as a float/native 64-bit double
            var num = view.getFloat32(0);
            // Done
            // console.log(num);
        }
        
        function GetDataTypeByte(type){
            switch(type){
                case "D":
                    return 0x44;
            }
            return 0;
        }
        
        function WriteSingleCheck(data){
            if(Check(data)){
                if(data[3]==0x24&&data[4]==0x57&&data[5]==0x43)
                    return true;
            }
            return false;
        }
        function WriteSingle(type,addr,value){
            var returnBytes=[];
            returnBytes[0]=0x25;
            returnBytes[1]=addr1;
            returnBytes[2]=addr2;
            returnBytes[3]=0x23;
            returnBytes[4]=0x57;
            returnBytes[5]=0x43;
            returnBytes[6]=0x53;
            returnBytes[7]=GetTypeByte(type);
            addr=S4(addr);
            returnBytes[8] = addr.charCodeAt(0);
            returnBytes[9] = addr.charCodeAt(1);
            returnBytes[10] = addr.charCodeAt(2);
            returnBytes[11] = addr.charCodeAt(3);
            if(value){
                returnBytes[12]=0x31;
            }else{
                returnBytes[12]=0x30;
            }
            addBccEnd(returnBytes);
            return returnBytes;
        }

        function GetTypeByte(type){
            switch(type){
                case "R":
                    return 0x52;
                case "Y":
                    return 0x59;
                case "X":
                    return 0x58;
            }
            return type[0].charCodeAt(0);
        }
        
        var addr1=0x30;
        var addr2=0x31;
        var error;
         function Check(data){
            if(data.length<6){
                error="数组过短";
                return false;
            }
            if(data[0]==25){
                if(data.length>=118){
                    error="数组过长";
                    return false;
                }
            }
            else if(data[0]==60){
                if(data.length>=2048){
                    error="数组过长";
                    return false;
                }
            }
            if(data[1]!=addr1||data[2]!=addr2){
                error="地址错误";
                return false;
            }
            if(!CheckBcc(data)){
                error="Bcc校验不正确";
                return false;
            }
            if(data[data.length-1]!=0x0D){
                error="结尾符号错误";
                return false;
            }
            return true;
        }
        
        /*
            check bcc
        */
         function CheckBcc(data){
            var  content=[]; 
            for(var i=0;i<data.length-3;i++){
                content[i]=data[i];
            }
            var tem=Bcc(content);
            if(tem[0].charCodeAt(0)==data[content.length]&&tem[1].charCodeAt(0)==data[content.length+1])
                return true;
            return false;
        }

        function addBccEnd(data){
            var len=data.length;
            if (data==null||data.length == 0) {
                return;
            }
            tem=data[0];
            for(var i=1;i<len;i++){
                tem=(data[i]^tem);
            }
            var return_value=tem.toString(16).toUpperCase();
            if (return_value.length == 1)
            {
                data[len]=0x30;
                data[len+1]=return_value.charCodeAt(0);
            }
            else {
                data[len]=return_value.charCodeAt(0);
                data[len+1]=return_value.charCodeAt(1);
            }
            data[len+2]=0x0D;
        }
        function Bcc(data){
            if (data==null||data.length == 0) {
                return null;
            }
            var tem=data[0];
            for(var i=1;i<data.length;i++){
                tem=(data[i]^tem);
            }
            var return_value=tem.toString(16).toUpperCase();

            if (return_value.length == 1)
            {
                return [ '0', return_value[0] ];
            }
            else {
                return  [ return_value[0] , return_value[1] ];
            }
        }

module.exports = { WriteData, ReadDataArea }
