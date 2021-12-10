const fs = require('fs')

function dataTypeValid(dataType){
    if(dataType.match(/高锰酸盐|总磷|总氮/)){
        return true
    }else{

    }
    return false;
}
const dataRegex = /\d+\.\d+|\d+|-\d+\.\d+|-\d+/;
function dataValid(dataType){
    if(dataType.match(dataRegex)){
        return true
    }else{
    }
    return false;
}

function getData(data){
    var dataObj = {}
    dataObj.data = data.match(dataRegex)[0]
    var units = data.split(dataObj.data)
    if (units.length > 1) {
        dataObj.unit = units[1]
    }else{
        dataObj.unit = units[0]
    }
    return dataObj;
}

function getDataType(dataType){
    if(dataType.includes("高锰酸盐")){
        return "MN"
    }else if(dataType.includes("总磷")){
        return "P"
    }else if(dataType.includes("总氮")){
        return "N"
    }
}

function convertBlockVerticesToHeightAndWidth(blockVertices){
    var width1 = (blockVertices[3].x + blockVertices[0].x) / 2;
    var width2 = (blockVertices[2].x + blockVertices[1].x) / 2;
    var height1 = (blockVertices[1].y + blockVertices[0].y) / 2;
    var height2 = (blockVertices[2].y + blockVertices[3].y) / 2;
    return {width1,width2,height1,height2}
}


function getTimeObjectByNameWithRegex(blocks,notIncludeIndexList,timeRegex,timeValueRegex){
    var timePossibleList = getPossibleList(blocks, (index) => {
        return !notIncludeIndexList.includes(index)&&(blocks[index].text.replace(/[` ]/g, "").match(timeRegex))
    }, (blockVertices,block) => {
        // var height1 = (blockVertices[1].y + blockVertices[0].y) / 2;
        // var height2 = (blockVertices[2].y + blockVertices[3].y) / 2;
        // var width1 = (blockVertices[3].x + blockVertices[0].x) / 2;
        // var width2 = (blockVertices[2].x + blockVertices[1].x) / 2;
        var {width1,width2,height1,height2} = convertBlockVerticesToHeightAndWidth(blockVertices);
        var blockTextLen = block.text.replace(/[` ]/g, "").length;
        return (width1 - width2) * (width1 - width2) * (height1 - height2) * (height1 - height2)/(blockTextLen*blockTextLen)
    },true)
    if(timePossibleList.length>0){
        var index = timePossibleList[0].index;
        var timeBlock =blocks[index];
        var timeBlockText = timeBlock.text.replace(/[` ]/g, "");
        var time;
        if(timeBlockText.match(timeValueRegex)){
            time = parseInt(timeBlockText.match(timeValueRegex)[0].replace(timeRegex,""));
        }else{
            if(index>0){
                timeBlock =blocks[--index];
                timeBlockText = timeBlock.text.replace(/[` ]/g, "");
                if(timeBlockText.match(/\d+/)){
                    time = parseInt(timeBlockText.match(/\d+/)[0]);
                }
            }
        }
        return {time,index};
    }
}
function getTimeByNameWithRegex(blocks,notIncludeIndexList,timeRegex,timeValueRegex){
    var timeObject = getTimeObjectByNameWithRegex(blocks,notIncludeIndexList,timeRegex,timeValueRegex);
    if(timeObject){
        return timeObject.time;
    }
}

function getPossibleList(blocks,validFun,valFun,desc){
    var possibleList = [];
    for (let i = 0; i < blocks.length; i++) {
        const blockVertices = blocks[i].boundingBox.vertices;
        if(validFun(i)){
            possibleList.push({index:i,value:valFun(blockVertices,blocks[i])});
        }
    }
    if(!desc){
        possibleList.sort((a,b)=>{return a.value-b.value})
    }else{
        possibleList.sort((a,b)=>{return b.value-a.value})
    }
    return possibleList;
}

fs.readFile('./json/test.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    /**
     * 
     * contain the key word 
     * 
     */
    data = JSON.parse(data)
    var text = data.fullTextAnnotation.text;
    if (text.match(/基线|基值/) && text.match(/滴定体积|峰值/)) {
        /**
         * 
         * judge block position
         * 
         */
        var blocks = data.fullTextAnnotation.pages[0].blocks;
        var blockLen = blocks.length;
        for (let i = 0; i < blockLen; i++) {
            const block = blocks[i];
            var words = block.paragraphs[0].words;
            var blockText = "";
            for (let j = 0; j < words.length; j++) {
                const symbols = words[j].symbols;
                for (let k = 0; k < symbols.length; k++) {
                    const text = symbols[k].text;
                    blockText += text + " "
                }
                blockText += "``"
            }
            block.text = blockText;
        }
        const text1Regex = /基[` ]*线|基[` ]*值/;
        const text2Regex = /滴[` ]*定[` ]*体[` ]*积|峰[` ]*值/;
        var text1IndexList = [];
        var text2IndexList = [];
        var notIncludeIndexList = []
        for (let i = 0; i < blockLen; i++) {
            const block = blocks[i];
            if (block.text.match(text1Regex)) {
                text1IndexList.push(i);
            }
            if (block.text.match(text2Regex)) {
                text2IndexList.push(i);
            }
        }
        if (text1IndexList.length == 1 && (text2IndexList.length == 1)) {
            var text1Vertices = blocks[text1IndexList[0]].boundingBox.vertices;
            var text2Vertices = blocks[text2IndexList[0]].boundingBox.vertices;
            notIncludeIndexList.push(text1IndexList[0]);
            notIncludeIndexList.push(text2IndexList[0]);
            /**
             * 
             * check block position
             * 
             */
            var blockValid = true;
            for (let i = 0; i < text1Vertices.length; i++) {
                const text1Vertice = text1Vertices[i];
                const text2Vertice = text2Vertices[i];
                if (text1Vertice.x > text2Vertice.x) {
                    blockValid = false;
                    break;
                }
            }
            if (blockValid) {
                /**
                 * 
                 * predict the possible block
                 * 
                 */
                var textHeight1 = (text1Vertices[1].y + text1Vertices[0].y + text2Vertices[1].y + text2Vertices[0].y) / 4;
                var textHeight2 = (text1Vertices[2].y + text1Vertices[3].y + text2Vertices[2].y + text2Vertices[3].y) / 4;
                var heightPossibleList = getPossibleList(blocks, (index) => { return !notIncludeIndexList.includes(index) }, (blockVertices) => {
                    var height1 = (blockVertices[1].y + blockVertices[0].y) / 2;
                    var height2 = (blockVertices[2].y + blockVertices[3].y) / 2;
                    return (height1 - textHeight1) * (height1 - textHeight1) + (height2 - textHeight2) * (height2 - textHeight2)
                })
                for (let i = 0; i < 4; i++) {
                    const dataTypeBlock = blocks[heightPossibleList[i].index];
                    var dataTypeBlockText = dataTypeBlock.text.replace(/[` ]/g, "");
                    const dataType = getDataType(dataTypeBlockText);
                    if (dataTypeValid(dataTypeBlockText)) {
                        notIncludeIndexList.push(heightPossibleList[i].index);
                        var selectDataLabeBlockVertices = dataTypeBlock.boundingBox.vertices;
                        // var textWidth1 = (selectDataLabeBlockVertices[1].x + selectDataLabeBlockVertices[0].x) / 2;
                        // var textWidth2 = (selectDataLabeBlockVertices[2].x + selectDataLabeBlockVertices[3].x) / 2;
                        // var textHeight1 = (selectDataLabeBlockVertices[1].y + selectDataLabeBlockVertices[0].y) / 2;
                        // var textHeight2 = (selectDataLabeBlockVertices[2].y + selectDataLabeBlockVertices[3].y) / 2;
                        var {width1:textWidth1,width2:textWidth2,height1:textHeight1,height2:textHeight2} = convertBlockVerticesToHeightAndWidth(selectDataLabeBlockVertices);

                        // (index) => {
                        //     return !notIncludeIndexList.includes(index)&&(blocks[index].text.replace(/[` ]/g, "").match(timeRegex))
                        // }

                        var dataPossibleList = getPossibleList(blocks, (index) => { return !notIncludeIndexList.includes(index)}, (blockVertices) => {
                            // var height1 = (blockVertices[1].y + blockVertices[0].y) / 2;
                            // var height2 = (blockVertices[2].y + blockVertices[3].y) / 2;
                            // var width1 = (blockVertices[1].x + blockVertices[0].x) / 2;
                            // var width2 = (blockVertices[2].x + blockVertices[3].x) / 2;
                            var { width1, width2, height1, height2 } = convertBlockVerticesToHeightAndWidth(blockVertices);
                            
                            return (width1 - textWidth1) * (width1 - textWidth1) + (width2 - textWidth2) * (width2 - textWidth2) +
                                (height1 - textHeight1) * (height1 - textHeight1) + (height2 - textHeight2) * (height2 - textHeight2)
                        })

                        for (let j = 0; j < 4; j++) {
                            const dataBlock = blocks[dataPossibleList[j].index];
                            var dataBlockText = dataBlock.text.replace(/[` ]/g, "");
                            if (dataValid(dataBlockText)) {
                                const dataObject = getData(dataBlockText)
                                notIncludeIndexList.push(dataPossibleList[j].index);
                                const yearRegex = /年|year|Year|YEAR/;
                                const yearValueRegex = /\d+\s*[年|year|Year|YEAR]/;
                                var year = getTimeByNameWithRegex(blocks, notIncludeIndexList, yearRegex, yearValueRegex);

                                const monthRegex = /月|month|Month|MONTH/;
                                const monthValueRegex = /\d+\s*[月|month|Month|MONTH]/;
                                var month = getTimeByNameWithRegex(blocks, notIncludeIndexList, monthRegex, monthValueRegex);

                                const dateRegex = /日|date|Date|DATE/;
                                const dateValueRegex = /\d+\s*[日|date|Date|DATE]/;
                                var date = getTimeByNameWithRegex(blocks, notIncludeIndexList, dateRegex, dateValueRegex);

                                const hourRegex = /时|吋|hour|Hour|HOUR/;
                                const hourValueRegex = /\d+\s*[时|吋|hour|Hour|HOUR]/;
                                var hour = getTimeByNameWithRegex(blocks, notIncludeIndexList, hourRegex, hourValueRegex);

                                const minuteRegex = /分|min|Min|MIN/;
                                const minuteValueRegex = /\d+\s*[分|min|Min|MIN]/;
                                var minute = getTimeByNameWithRegex(blocks, notIncludeIndexList, minuteRegex, minuteValueRegex);

                                const secondRegex = /秒|sec|Sec|SEC/;
                                const secondValueRegex = /\d+\s*[秒|sec|Sec|SEC]/;
                                var second = getTimeByNameWithRegex(blocks, notIncludeIndexList, secondRegex, secondValueRegex);
                                var time = new Date(0);
                                if (year != undefined) {
                                    time.setFullYear(year);
                                    if (month != undefined) {
                                        time.setMonth(month - 1);
                                        if (date != undefined) {
                                            time.setDate(date);
                                            if (hour != undefined) {
                                                time.setHours(hour);
                                                if (minute != undefined) {
                                                    time.setMinutes(minute);
                                                    if (second != undefined) {
                                                        time.setSeconds(second);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                console.log({ year, month, date, hour, minute, second,value: dataObject.data });
                                return { time, value: dataObject.data, unit: dataObject.unit, type: dataType }
                            }
                        }
                        break;
                    }
                }

            }
        }
    }
    // console.log(data)
})
