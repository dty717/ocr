const fs = require('fs')
const timeShift = 0;

function dataTypeValid(dataType){
    if(dataType.match(/高锰酸盐|总[磷磅盛骑]|总氮|NH3-N|氨氮|COD/)){
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
function getData(data) {
    if(data.endsWith('``')){
        data = data.substring(0,data.length-2);
    }
    var dataList = data.split("``");
    var dataListLength = dataList.length
    if(dataListLength>=2){
        if(dataList[dataListLength-2].endsWith('.')){
            data = dataList[dataListLength-2]+ dataList[dataListLength-1]
        }else if(!dataList[dataListLength-1].match(dataRegex)){
            data = dataList[dataListLength-2]+ dataList[dataListLength-1]
        }else{
            data = dataList[dataListLength-1]
        }
    }
    data = data.replace(/`/g,'')

    var dataObj = {}
    dataObj.data = data.match(dataRegex)[0]
    var units = data.split(dataObj.data)
    if (units.length > 1) {
        dataObj.unit = units[1]
    } else {
        dataObj.unit = units[0]
    }
    var unitErrorMath = dataObj.unit.match(/([Il]+)[mo]g\/[LŁ]/);
    if(unitErrorMath){
        dataObj.unit = 'mg/L'
        dataObj.data = parseFloat(dataObj.data+""+unitErrorMath[1].replace(/./g,1))
        console.log('change value')
    }
    return dataObj;
}

function getDataType(dataType){
    if(dataType.match(/高锰酸盐/)){
        return "CODMN"
    }else if(dataType.match(/COD/)){
        return "CODCr"
    }else if(dataType.match(/总[磷磅盛骑]/)){
        return "P"
    }else if(dataType.match(/总氮/)){
        return "N"
    }else if(dataType.match(/NH3-N|氨氮/)){
        return "NH3"
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
        var {width1,width2,height1,height2} = convertBlockVerticesToHeightAndWidth(blockVertices);
        var blockTextLen = block.text.replace(/[` ]/g, "").length;
        return (width1 - width2) * (width1 - width2) * (height1 - height2) * (height1 - height2)/(blockTextLen*blockTextLen)
    },true)
    const timePossibleListLength = timePossibleList.length
    if(timePossibleListLength>0){
        if (timePossibleListLength >= 2) {
            for (let mIndex = 0; mIndex < timePossibleListLength - 1; mIndex++) {
                const element = timePossibleList[mIndex];
                if ((timePossibleList[mIndex].value < timePossibleList[mIndex + 1].value * 1.1) && (timePossibleList[mIndex].value > timePossibleList[mIndex + 1].value * 0.9)) {
                    if (blocks[timePossibleList[mIndex].index].boundingBox.vertices[mIndex].x > blocks[timePossibleList[mIndex + 1].index].boundingBox.vertices[mIndex + 1].x) {
                        var _obj = timePossibleList[mIndex];
                        timePossibleList[mIndex] = timePossibleList[mIndex + 1];
                        timePossibleList[mIndex + 1] = _obj;
                    }
                }
            }
        }
        for (let i = 0; i < timePossibleListLength; i++) {
            var index = timePossibleList[i].index;
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
            console.log(time, index)
            if (time != undefined || !isNaN(time)) {
                return { time, index };
            }
        }
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

fs.readFile('./server/json/ffeb7b43a629797ffaefe7cef882bc35.json', 'utf8', (err, data) => {
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
    if (!data || !data.fullTextAnnotation || !data.fullTextAnnotation.text) {
        return;
    }
    var text = data.fullTextAnnotation.text;
    // const textRegexs = [
    //     { match: /工[` ]*作[` ]*状[` ]*态/, valid: /工作状态/, posValid: true },
    //     { match: /当[` ]*前[` ]*步[` ]*骤/, valid: /当前步骤/, posValid: true },
    //     { match: /在[` ]*线[` ]*分[` ]*析[` ]*仪/, valid: /在线分析仪/, dataValid: true, excluded: true }
    // ];

    const textRegexs = [
        { match: /基[` ]*线|基[` ]*值/, valid: /基线|基值/, posValid: true, dataValid: true },
        { match: /滴[` ]*定[` ]*体[` ]*积|峰[` ]*值/, valid: /滴定体积|峰值/, posValid: true, dataValid: true },
    ];

    if (textRegexs.every(textRegex=> text.match(textRegex.valid))) {
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
            var wordText = "";
            for (let j = 0; j < words.length; j++) {
                const symbols = words[j].symbols;
                for (let k = 0; k < symbols.length; k++) {
                    const text = symbols[k].text;
                    wordText += text + " "
                }
                wordText += "``"
            }
            block.text = wordText;
        }
        const textRegexsLen = textRegexs.length;
        var textIndexsList = []
        for (let textIndex = 0; textIndex < textRegexsLen; textIndex++) {
            textIndexsList.push([]);
        }
        var notIncludeIndexList = []
        for (let i = 0; i < blockLen; i++) {
            const block = blocks[i];
            for (let j = 0; j < textRegexsLen; j++) {
                const textRegex = textRegexs[j];
                if (block.text.match(textRegex.match)) {
                    textIndexsList[j].push(i);
                }
            }
        }
        if (textIndexsList.every(textIndexList => textIndexList.length == 1)) {
            notIncludeIndexList.push(...textIndexsList.filter((textIndexList, textIndex) => !textRegexs[textIndex].excluded).map(textIndexList => textIndexList[0]));
            // notIncludeIndexList.push(text2IndexList[0]);
            /**
             * 
             * check block position
             * 
             */
            var blockValid = true;

            var textVertices = textRegexs.map((textRegex, textRegexIndex) => {
                return {
                    vertices: blocks[textIndexsList[textRegexIndex][0]].boundingBox.vertices,
                    posValid: textRegex.posValid
                }
            }).filter(textRegex => textRegex.posValid)
            // console.log(textVertices)
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < textVertices.length - 1; j++) {
                    const text1Vertice = textVertices[j].vertices;
                    const text2Vertice = textVertices[j + 1].vertices;
                    if (text1Vertice[i].x > text2Vertice[i].x) {
                        blockValid = false;
                        break;
                    }
                }
            }
            if (blockValid) {
                /**
                 * 
                 * predict the possible block
                 * 
                 */
                 var textDataVertices = textRegexs.map((textRegex, textRegexIndex) => {
                    return {
                        vertices: blocks[textIndexsList[textRegexIndex][0]].boundingBox.vertices,
                        dataValid: textRegex.dataValid
                    }
                }).filter(textRegex => textRegex.dataValid)
                var textHeight1 = textDataVertices.reduce((partialSum, textDataVertice) => textDataVertice.vertices[0].y + textDataVertice.vertices[1].y + partialSum, 0) / (2 * textDataVertices.length);
                var textHeight2 = textDataVertices.reduce((partialSum, textDataVertice) => textDataVertice.vertices[2].y + textDataVertice.vertices[3].y + partialSum, 0) / (2 * textDataVertices.length);
                // var textHeight1 = (text1Vertices[1].y + text1Vertices[0].y + text2Vertices[1].y + text2Vertices[0].y) / 4;
                // var textHeight2 = (text1Vertices[2].y + text1Vertices[3].y + text2Vertices[2].y + text2Vertices[3].y) / 4;
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
                        var selectDataLabeBlockVertices = dataTypeBlock.boundingBox.vertices;
                        if(dataValid(dataTypeBlockText)){
                            // console.log(dataTypeBlock)
                            var words = dataTypeBlock.paragraphs[0].words;
                            var wordsLength = words.length;
                            for (let j = 0; j < words.length; j++) {
                                var wordText = "";
                                const symbols = words[j].symbols;
                                for (let k = 0; k < symbols.length; k++) {
                                    const text = symbols[k].text;
                                    wordText += text
                                }
                                words[j].text = wordText
                            }
                            var minSuitDataTypeLen = wordsLength
                            var dataTypeList;
                            var _notIncludeIndexList = []
                            checkSuitData:for (let m = 0; m < wordsLength; m++) {
                                for (let n = 0; n < wordsLength-m; n++) {
                                    var itemText = '';
                                    for (let p = 0; p < m + 1; p++) {
                                        itemText += words[n+p].text
                                    }
                                    if(dataTypeValid(itemText)){
                                        // console.log(itemText)
                                        dataTypeList= words.slice(n, m + n + 1)
                                        minSuitDataTypeLen = m + 1
                                        var positionValid = true
                                        for (let f = 0; f < minSuitDataTypeLen - 1; f++) {
                                            if ((dataTypeList[f].boundingBox.vertices[3].x > dataTypeList[f + 1].boundingBox.vertices[0].x) ||
                                                (dataTypeList[f].boundingBox.vertices[2].x > dataTypeList[f + 1].boundingBox.vertices[1].x)) {
                                                positionValid = false;
                                                break
                                            }
                                        }
                                        if(positionValid){
                                            for (let k = n; k < m + n + 1; k++) {
                                                _notIncludeIndexList.push(k);
                                            }
                                            break checkSuitData
                                        }
                                    }
                                }
                            }
                            var { width1: textWidth1, width2: textWidth2, height1: textHeight1, height2: textHeight2 } =
                                dataTypeList ? convertBlockVerticesToHeightAndWidth(
                                    [
                                        dataTypeList[0].boundingBox.vertices[0],
                                        dataTypeList[0].boundingBox.vertices[1],
                                        dataTypeList[dataTypeList.length-1].boundingBox.vertices[2],
                                        dataTypeList[dataTypeList.length-1].boundingBox.vertices[3]
                                    ]) : convertBlockVerticesToHeightAndWidth(selectDataLabeBlockVertices);
                            var _dataPossibleList = getPossibleList(words, (index) => { return !_notIncludeIndexList.includes(index)}, (blockVertices) => {
                                var { width1, width2, height1, height2 } = convertBlockVerticesToHeightAndWidth(blockVertices);
                                var scale =1
                                if ((height1 < textHeight1) && (height2 < textHeight2)) {
                                    scale += 5
                                }
                                if((width1 < textWidth1) && (width2 < textWidth2)){
                                    scale += 2
                                }
    
                                return scale*((width1 - textWidth1) * (width1 - textWidth1) + (width2 - textWidth2) * (width2 - textWidth2) +
                                    (height1 - textHeight1) * (height1 - textHeight1) + (height2 - textHeight2) * (height2 - textHeight2))
                            })
                            console.log(_dataPossibleList)
                            for (let j = 0; j < 4; j++) {
                                const dataBlock = words[_dataPossibleList[j].index];
                                if (dataValid(dataBlock.text.replace(/[`\s]/g, ""))) {
                                    var dataBlockText = dataBlock.text.replace(/\s/g, "");
                                    const dataObject = getData(dataBlockText)
                                    notIncludeIndexList.push(_dataPossibleList[j].index);
                                    var time = getFullTime(blocks,notIncludeIndexList)
                                    if(time){
                                        return { time, value: dataObject.data, unit: dataObject.unit, type: dataType }
                                    }
                                }
                            }
                        }
                        var {width1:textWidth1,width2:textWidth2,height1:textHeight1,height2:textHeight2} = convertBlockVerticesToHeightAndWidth(selectDataLabeBlockVertices);

                        notIncludeIndexList.push(heightPossibleList[i].index);

                        var dataPossibleList = getPossibleList(blocks, (index) => { return !notIncludeIndexList.includes(index)}, (blockVertices) => {
                            var { width1, width2, height1, height2 } = convertBlockVerticesToHeightAndWidth(blockVertices);
                            var scale =1
                            if ((height1 < textHeight1) && (height2 < textHeight2)) {
                                scale += 5
                            }
                            if((width1 < textWidth1) && (width2 < textWidth2)){
                                scale += 2
                            }
                            return scale*((width1 - textWidth1) * (width1 - textWidth1) + (width2 - textWidth2) * (width2 - textWidth2) +
                                (height1 - textHeight1) * (height1 - textHeight1) + (height2 - textHeight2) * (height2 - textHeight2))
                        })

                        for (let j = 0; j < 4; j++) {
                            const dataBlock = blocks[dataPossibleList[j].index];
                            if (dataValid(dataBlock.text.replace(/[`\s]/g, ""))) {
                                var dataBlockText = dataBlock.text.replace(/\s/g, "");
                                const dataObject = getData(dataBlockText)
                                notIncludeIndexList.push(dataPossibleList[j].index);
                                var time = getFullTime(blocks,notIncludeIndexList)
                                if(time){
                                    return { time, value: dataObject.data, unit: dataObject.unit, type: dataType }
                                }
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

const yearRegex = /年|year|Year|YEAR/;
const yearValueRegex = /\d+\s*[年|year|Year|YEAR]/;
const monthRegex = /月|month|Month|MONTH/;
const monthValueRegex = /\d+\s*[月|month|Month|MONTH]/;
const dateRegex = /日|date|Date|DATE/;
const dateValueRegex = /\d+\s*[日|date|Date|DATE]/;
const hourRegex = /时|吋|hour|Hour|HOUR/;
const hourValueRegex = /\d+\s*[时|吋|hour|Hour|HOUR]/;
const minuteRegex = /分|min|Min|MIN/;
const minuteValueRegex = /\d+\s*[分|min|Min|MIN]/;
const secondRegex = /秒|sec|Sec|SEC/;
const secondValueRegex = /\d+\s*[秒|sec|Sec|SEC]/;

function getFullTime(blocks,notIncludeIndexList){
    
    var year = getTimeByNameWithRegex(blocks, notIncludeIndexList, yearRegex, yearValueRegex);
    var month = getTimeByNameWithRegex(blocks, notIncludeIndexList, monthRegex, monthValueRegex);
    var date = getTimeByNameWithRegex(blocks, notIncludeIndexList, dateRegex, dateValueRegex);
    var hour = getTimeByNameWithRegex(blocks, notIncludeIndexList, hourRegex, hourValueRegex);
    var minute = getTimeByNameWithRegex(blocks, notIncludeIndexList, minuteRegex, minuteValueRegex);
    var second = getTimeByNameWithRegex(blocks, notIncludeIndexList, secondRegex, secondValueRegex);

    var time = new Date(0);
    // console.log(blocks,{ year, month, date, hour, minute, second});
    if (year != undefined) {
        if(year>2000 && year<2050){
            time.setFullYear(year);
            if (month != undefined) {
                if(month>0 && month<13){
                    time.setMonth(month - 1);
                    if (date != undefined) {
                        if (date > 0 && date < 32) {
                            time.setDate(date);
                            if (hour != undefined) {
                                if (hour >= 0 && hour < 25) {
                                    time.setHours(hour + timeShift);
                                    if (minute != undefined) {
                                        if (minute >= 0 && minute < 61) {
                                            time.setMinutes(minute);
                                            if (second != undefined) {
                                                if (second >= 0 && second < 61) {
                                                    time.setSeconds(second);
                                                }else{
                                                    return
                                                }
                                            }
                                        }else{
                                            return
                                        }
                                    }
                                }else{
                                    return
                                }
                            }
                        }else{
                            return
                        }
                    }
                }else{
                    return
                }
            }
        }else{
            return
        }
    }
    if(time.getTime()!=0){
        return time
    }
}