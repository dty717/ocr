let img; // Declare variable 'img'.
let obj
function setup() {
    img = loadImage('https://i.imgur.com/qQUSi8Y.jpeg'); // Load the image
    obj = {
        "faceAnnotations": [],
        "landmarkAnnotations": [],
        "logoAnnotations": [],
        "labelAnnotations": [],
        "textAnnotations": [
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "zh",
                "description": "历史数据\nn期 2021-11-I8\n时间 15:3624 息\n2021年 11月\n11日\n15时\n00分\n基线\n滴定体积\n高锰酸盐指数值\n3571\n4. 0253ml\n2. 72mg/L\n自动打印关\n|上一记录\n下一记录\n打印\n|历史报表\n历史表2\n返回\n",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 90,
                            "y": 72
                        },
                        {
                            "x": 559,
                            "y": 72
                        },
                        {
                            "x": 559,
                            "y": 348
                        },
                        {
                            "x": 90,
                            "y": 348
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "历史",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 127,
                            "y": 83
                        },
                        {
                            "x": 177,
                            "y": 82
                        },
                        {
                            "x": 177,
                            "y": 103
                        },
                        {
                            "x": 128,
                            "y": 104
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "数据",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 201,
                            "y": 84
                        },
                        {
                            "x": 218,
                            "y": 84
                        },
                        {
                            "x": 218,
                            "y": 101
                        },
                        {
                            "x": 201,
                            "y": 101
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "n",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 397,
                            "y": 74
                        },
                        {
                            "x": 413,
                            "y": 74
                        },
                        {
                            "x": 413,
                            "y": 87
                        },
                        {
                            "x": 397,
                            "y": 87
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "期",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 415,
                            "y": 74
                        },
                        {
                            "x": 422,
                            "y": 74
                        },
                        {
                            "x": 422,
                            "y": 87
                        },
                        {
                            "x": 415,
                            "y": 87
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "2021-11",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 436,
                            "y": 73
                        },
                        {
                            "x": 478,
                            "y": 72
                        },
                        {
                            "x": 478,
                            "y": 85
                        },
                        {
                            "x": 436,
                            "y": 86
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "-",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 480,
                            "y": 72
                        },
                        {
                            "x": 481,
                            "y": 72
                        },
                        {
                            "x": 481,
                            "y": 85
                        },
                        {
                            "x": 480,
                            "y": 85
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "I8",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 483,
                            "y": 72
                        },
                        {
                            "x": 492,
                            "y": 72
                        },
                        {
                            "x": 492,
                            "y": 85
                        },
                        {
                            "x": 483,
                            "y": 85
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "时间",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 397,
                            "y": 91
                        },
                        {
                            "x": 427,
                            "y": 91
                        },
                        {
                            "x": 427,
                            "y": 102
                        },
                        {
                            "x": 397,
                            "y": 102
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "15",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 432,
                            "y": 92
                        },
                        {
                            "x": 441,
                            "y": 92
                        },
                        {
                            "x": 441,
                            "y": 99
                        },
                        {
                            "x": 432,
                            "y": 99
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": ":",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 444,
                            "y": 94
                        },
                        {
                            "x": 445,
                            "y": 94
                        },
                        {
                            "x": 445,
                            "y": 98
                        },
                        {
                            "x": 444,
                            "y": 98
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "3624",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 448,
                            "y": 92
                        },
                        {
                            "x": 474,
                            "y": 92
                        },
                        {
                            "x": 474,
                            "y": 99
                        },
                        {
                            "x": 448,
                            "y": 99
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "息",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 507,
                            "y": 89
                        },
                        {
                            "x": 511,
                            "y": 89
                        },
                        {
                            "x": 511,
                            "y": 100
                        },
                        {
                            "x": 507,
                            "y": 100
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "2021",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 90,
                            "y": 142
                        },
                        {
                            "x": 149,
                            "y": 141
                        },
                        {
                            "x": 149,
                            "y": 164
                        },
                        {
                            "x": 90,
                            "y": 165
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "年",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 151,
                            "y": 141
                        },
                        {
                            "x": 191,
                            "y": 140
                        },
                        {
                            "x": 191,
                            "y": 162
                        },
                        {
                            "x": 151,
                            "y": 163
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "11",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 200,
                            "y": 145
                        },
                        {
                            "x": 216,
                            "y": 145
                        },
                        {
                            "x": 216,
                            "y": 157
                        },
                        {
                            "x": 200,
                            "y": 157
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "月",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 224,
                            "y": 142
                        },
                        {
                            "x": 237,
                            "y": 142
                        },
                        {
                            "x": 237,
                            "y": 157
                        },
                        {
                            "x": 224,
                            "y": 157
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "11",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 285,
                            "y": 143
                        },
                        {
                            "x": 301,
                            "y": 143
                        },
                        {
                            "x": 301,
                            "y": 155
                        },
                        {
                            "x": 285,
                            "y": 155
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "日",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 310,
                            "y": 140
                        },
                        {
                            "x": 322,
                            "y": 140
                        },
                        {
                            "x": 322,
                            "y": 156
                        },
                        {
                            "x": 310,
                            "y": 156
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "15",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 359,
                            "y": 138
                        },
                        {
                            "x": 388,
                            "y": 136
                        },
                        {
                            "x": 389,
                            "y": 158
                        },
                        {
                            "x": 360,
                            "y": 160
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "时",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 390,
                            "y": 136
                        },
                        {
                            "x": 407,
                            "y": 135
                        },
                        {
                            "x": 408,
                            "y": 157
                        },
                        {
                            "x": 391,
                            "y": 158
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "00",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 452,
                            "y": 137
                        },
                        {
                            "x": 472,
                            "y": 137
                        },
                        {
                            "x": 472,
                            "y": 150
                        },
                        {
                            "x": 452,
                            "y": 150
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "分",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 477,
                            "y": 136
                        },
                        {
                            "x": 493,
                            "y": 136
                        },
                        {
                            "x": 493,
                            "y": 151
                        },
                        {
                            "x": 477,
                            "y": 151
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "基线",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 105,
                            "y": 191
                        },
                        {
                            "x": 143,
                            "y": 191
                        },
                        {
                            "x": 143,
                            "y": 208
                        },
                        {
                            "x": 105,
                            "y": 208
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "滴定",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 212,
                            "y": 189
                        },
                        {
                            "x": 250,
                            "y": 188
                        },
                        {
                            "x": 250,
                            "y": 205
                        },
                        {
                            "x": 212,
                            "y": 206
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "体积",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 256,
                            "y": 188
                        },
                        {
                            "x": 294,
                            "y": 187
                        },
                        {
                            "x": 294,
                            "y": 203
                        },
                        {
                            "x": 256,
                            "y": 204
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "高",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 358,
                            "y": 186
                        },
                        {
                            "x": 373,
                            "y": 186
                        },
                        {
                            "x": 373,
                            "y": 202
                        },
                        {
                            "x": 358,
                            "y": 202
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "锰",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 379,
                            "y": 186
                        },
                        {
                            "x": 396,
                            "y": 186
                        },
                        {
                            "x": 396,
                            "y": 202
                        },
                        {
                            "x": 379,
                            "y": 202
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "酸盐",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 401,
                            "y": 185
                        },
                        {
                            "x": 439,
                            "y": 184
                        },
                        {
                            "x": 439,
                            "y": 200
                        },
                        {
                            "x": 401,
                            "y": 201
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "指数",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 442,
                            "y": 181
                        },
                        {
                            "x": 483,
                            "y": 180
                        },
                        {
                            "x": 483,
                            "y": 202
                        },
                        {
                            "x": 442,
                            "y": 203
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "值",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 485,
                            "y": 181
                        },
                        {
                            "x": 502,
                            "y": 181
                        },
                        {
                            "x": 502,
                            "y": 202
                        },
                        {
                            "x": 485,
                            "y": 202
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "3571",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 103,
                            "y": 237
                        },
                        {
                            "x": 144,
                            "y": 237
                        },
                        {
                            "x": 144,
                            "y": 250
                        },
                        {
                            "x": 103,
                            "y": 250
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "4.",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 200,
                            "y": 233
                        },
                        {
                            "x": 243,
                            "y": 232
                        },
                        {
                            "x": 243,
                            "y": 250
                        },
                        {
                            "x": 200,
                            "y": 251
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "0253ml",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 245,
                            "y": 232
                        },
                        {
                            "x": 303,
                            "y": 231
                        },
                        {
                            "x": 303,
                            "y": 250
                        },
                        {
                            "x": 245,
                            "y": 251
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "2.",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 373,
                            "y": 229
                        },
                        {
                            "x": 416,
                            "y": 228
                        },
                        {
                            "x": 416,
                            "y": 247
                        },
                        {
                            "x": 373,
                            "y": 248
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "72mg/L",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 418,
                            "y": 228
                        },
                        {
                            "x": 476,
                            "y": 227
                        },
                        {
                            "x": 476,
                            "y": 247
                        },
                        {
                            "x": 418,
                            "y": 248
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "自动",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 97,
                            "y": 282
                        },
                        {
                            "x": 146,
                            "y": 281
                        },
                        {
                            "x": 147,
                            "y": 304
                        },
                        {
                            "x": 98,
                            "y": 305
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "打印",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 148,
                            "y": 281
                        },
                        {
                            "x": 188,
                            "y": 280
                        },
                        {
                            "x": 188,
                            "y": 302
                        },
                        {
                            "x": 149,
                            "y": 303
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "关",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 190,
                            "y": 280
                        },
                        {
                            "x": 207,
                            "y": 280
                        },
                        {
                            "x": 207,
                            "y": 302
                        },
                        {
                            "x": 191,
                            "y": 302
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "|",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 251,
                            "y": 278
                        },
                        {
                            "x": 251,
                            "y": 278
                        },
                        {
                            "x": 251,
                            "y": 300
                        },
                        {
                            "x": 251,
                            "y": 300
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "上",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 256,
                            "y": 278
                        },
                        {
                            "x": 276,
                            "y": 278
                        },
                        {
                            "x": 276,
                            "y": 300
                        },
                        {
                            "x": 256,
                            "y": 300
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "一",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 278,
                            "y": 278
                        },
                        {
                            "x": 303,
                            "y": 278
                        },
                        {
                            "x": 303,
                            "y": 300
                        },
                        {
                            "x": 278,
                            "y": 300
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "记录",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 301,
                            "y": 280
                        },
                        {
                            "x": 340,
                            "y": 280
                        },
                        {
                            "x": 340,
                            "y": 297
                        },
                        {
                            "x": 301,
                            "y": 297
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "下一",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 400,
                            "y": 279
                        },
                        {
                            "x": 439,
                            "y": 278
                        },
                        {
                            "x": 439,
                            "y": 294
                        },
                        {
                            "x": 400,
                            "y": 295
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "记录",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 444,
                            "y": 277
                        },
                        {
                            "x": 483,
                            "y": 276
                        },
                        {
                            "x": 483,
                            "y": 292
                        },
                        {
                            "x": 444,
                            "y": 293
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "打印",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 131,
                            "y": 327
                        },
                        {
                            "x": 176,
                            "y": 327
                        },
                        {
                            "x": 176,
                            "y": 348
                        },
                        {
                            "x": 131,
                            "y": 348
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "|",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 242,
                            "y": 325
                        },
                        {
                            "x": 262,
                            "y": 325
                        },
                        {
                            "x": 262,
                            "y": 348
                        },
                        {
                            "x": 242,
                            "y": 348
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "历史",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 264,
                            "y": 325
                        },
                        {
                            "x": 306,
                            "y": 325
                        },
                        {
                            "x": 306,
                            "y": 348
                        },
                        {
                            "x": 264,
                            "y": 348
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "报表",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 308,
                            "y": 324
                        },
                        {
                            "x": 342,
                            "y": 324
                        },
                        {
                            "x": 342,
                            "y": 348
                        },
                        {
                            "x": 308,
                            "y": 348
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "历史",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 406,
                            "y": 326
                        },
                        {
                            "x": 444,
                            "y": 326
                        },
                        {
                            "x": 444,
                            "y": 343
                        },
                        {
                            "x": 406,
                            "y": 343
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "表",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 446,
                            "y": 324
                        },
                        {
                            "x": 475,
                            "y": 324
                        },
                        {
                            "x": 475,
                            "y": 345
                        },
                        {
                            "x": 446,
                            "y": 345
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "2",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 477,
                            "y": 324
                        },
                        {
                            "x": 478,
                            "y": 324
                        },
                        {
                            "x": 478,
                            "y": 345
                        },
                        {
                            "x": 477,
                            "y": 345
                        }
                    ],
                    "normalizedVertices": []
                }
            },
            {
                "locations": [],
                "properties": [],
                "mid": "",
                "locale": "",
                "description": "返回",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 520,
                            "y": 328
                        },
                        {
                            "x": 559,
                            "y": 328
                        },
                        {
                            "x": 559,
                            "y": 347
                        },
                        {
                            "x": 520,
                            "y": 347
                        }
                    ],
                    "normalizedVertices": []
                }
            }
        ],
        "localizedObjectAnnotations": [],
        "safeSearchAnnotation": null,
        "imagePropertiesAnnotation": null,
        "error": null,
        "cropHintsAnnotation": null,
        "fullTextAnnotation": {
            "pages": [
                {
                    "blocks": [
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 127,
                                                                "y": 83
                                                            },
                                                            {
                                                                "x": 155,
                                                                "y": 82
                                                            },
                                                            {
                                                                "x": 155,
                                                                "y": 103
                                                            },
                                                            {
                                                                "x": 128,
                                                                "y": 104
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "历",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 156,
                                                                "y": 82
                                                            },
                                                            {
                                                                "x": 177,
                                                                "y": 81
                                                            },
                                                            {
                                                                "x": 177,
                                                                "y": 102
                                                            },
                                                            {
                                                                "x": 157,
                                                                "y": 103
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "史",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 127,
                                                        "y": 83
                                                    },
                                                    {
                                                        "x": 177,
                                                        "y": 82
                                                    },
                                                    {
                                                        "x": 177,
                                                        "y": 103
                                                    },
                                                    {
                                                        "x": 128,
                                                        "y": 104
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 201,
                                                                "y": 84
                                                            },
                                                            {
                                                                "x": 206,
                                                                "y": 84
                                                            },
                                                            {
                                                                "x": 206,
                                                                "y": 101
                                                            },
                                                            {
                                                                "x": 201,
                                                                "y": 101
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "数",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 207,
                                                                "y": 84
                                                            },
                                                            {
                                                                "x": 218,
                                                                "y": 84
                                                            },
                                                            {
                                                                "x": 218,
                                                                "y": 101
                                                            },
                                                            {
                                                                "x": 207,
                                                                "y": 101
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "据",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 201,
                                                        "y": 84
                                                    },
                                                    {
                                                        "x": 218,
                                                        "y": 84
                                                    },
                                                    {
                                                        "x": 218,
                                                        "y": 101
                                                    },
                                                    {
                                                        "x": 201,
                                                        "y": 101
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 127,
                                                "y": 83
                                            },
                                            {
                                                "x": 218,
                                                "y": 81
                                            },
                                            {
                                                "x": 218,
                                                "y": 102
                                            },
                                            {
                                                "x": 128,
                                                "y": 104
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 127,
                                        "y": 83
                                    },
                                    {
                                        "x": 218,
                                        "y": 81
                                    },
                                    {
                                        "x": 218,
                                        "y": 102
                                    },
                                    {
                                        "x": 128,
                                        "y": 104
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 397,
                                                                "y": 74
                                                            },
                                                            {
                                                                "x": 413,
                                                                "y": 74
                                                            },
                                                            {
                                                                "x": 413,
                                                                "y": 87
                                                            },
                                                            {
                                                                "x": 397,
                                                                "y": 87
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "n",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 397,
                                                        "y": 74
                                                    },
                                                    {
                                                        "x": 413,
                                                        "y": 74
                                                    },
                                                    {
                                                        "x": 413,
                                                        "y": 87
                                                    },
                                                    {
                                                        "x": 397,
                                                        "y": 87
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 415,
                                                                "y": 74
                                                            },
                                                            {
                                                                "x": 422,
                                                                "y": 74
                                                            },
                                                            {
                                                                "x": 422,
                                                                "y": 87
                                                            },
                                                            {
                                                                "x": 415,
                                                                "y": 87
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "期",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 415,
                                                        "y": 74
                                                    },
                                                    {
                                                        "x": 422,
                                                        "y": 74
                                                    },
                                                    {
                                                        "x": 422,
                                                        "y": 87
                                                    },
                                                    {
                                                        "x": 415,
                                                        "y": 87
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 436,
                                                                "y": 73
                                                            },
                                                            {
                                                                "x": 443,
                                                                "y": 73
                                                            },
                                                            {
                                                                "x": 443,
                                                                "y": 86
                                                            },
                                                            {
                                                                "x": 436,
                                                                "y": 86
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 444,
                                                                "y": 73
                                                            },
                                                            {
                                                                "x": 448,
                                                                "y": 73
                                                            },
                                                            {
                                                                "x": 448,
                                                                "y": 86
                                                            },
                                                            {
                                                                "x": 444,
                                                                "y": 86
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 449,
                                                                "y": 73
                                                            },
                                                            {
                                                                "x": 455,
                                                                "y": 73
                                                            },
                                                            {
                                                                "x": 455,
                                                                "y": 86
                                                            },
                                                            {
                                                                "x": 449,
                                                                "y": 86
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 456,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 460,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 460,
                                                                "y": 85
                                                            },
                                                            {
                                                                "x": 456,
                                                                "y": 85
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 461,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 467,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 467,
                                                                "y": 85
                                                            },
                                                            {
                                                                "x": 461,
                                                                "y": 85
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "-",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 468,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 471,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 471,
                                                                "y": 85
                                                            },
                                                            {
                                                                "x": 468,
                                                                "y": 85
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 472,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 478,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 478,
                                                                "y": 85
                                                            },
                                                            {
                                                                "x": 472,
                                                                "y": 85
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 436,
                                                        "y": 73
                                                    },
                                                    {
                                                        "x": 478,
                                                        "y": 72
                                                    },
                                                    {
                                                        "x": 478,
                                                        "y": 85
                                                    },
                                                    {
                                                        "x": 436,
                                                        "y": 86
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 480,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 481,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 481,
                                                                "y": 85
                                                            },
                                                            {
                                                                "x": 480,
                                                                "y": 85
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "-",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 480,
                                                        "y": 72
                                                    },
                                                    {
                                                        "x": 481,
                                                        "y": 72
                                                    },
                                                    {
                                                        "x": 481,
                                                        "y": 85
                                                    },
                                                    {
                                                        "x": 480,
                                                        "y": 85
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 483,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 488,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 488,
                                                                "y": 85
                                                            },
                                                            {
                                                                "x": 483,
                                                                "y": 85
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "I",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "EOL_SURE_SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 489,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 492,
                                                                "y": 72
                                                            },
                                                            {
                                                                "x": 492,
                                                                "y": 85
                                                            },
                                                            {
                                                                "x": 489,
                                                                "y": 85
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "8",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 483,
                                                        "y": 72
                                                    },
                                                    {
                                                        "x": 492,
                                                        "y": 72
                                                    },
                                                    {
                                                        "x": 492,
                                                        "y": 85
                                                    },
                                                    {
                                                        "x": 483,
                                                        "y": 85
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 397,
                                                                "y": 91
                                                            },
                                                            {
                                                                "x": 413,
                                                                "y": 91
                                                            },
                                                            {
                                                                "x": 413,
                                                                "y": 102
                                                            },
                                                            {
                                                                "x": 397,
                                                                "y": 102
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "时",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 414,
                                                                "y": 91
                                                            },
                                                            {
                                                                "x": 427,
                                                                "y": 91
                                                            },
                                                            {
                                                                "x": 427,
                                                                "y": 102
                                                            },
                                                            {
                                                                "x": 414,
                                                                "y": 102
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "间",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 397,
                                                        "y": 91
                                                    },
                                                    {
                                                        "x": 427,
                                                        "y": 91
                                                    },
                                                    {
                                                        "x": 427,
                                                        "y": 102
                                                    },
                                                    {
                                                        "x": 397,
                                                        "y": 102
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 432,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 434,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 434,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 432,
                                                                "y": 99
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 437,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 441,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 441,
                                                                "y": 98
                                                            },
                                                            {
                                                                "x": 437,
                                                                "y": 98
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "5",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 432,
                                                        "y": 92
                                                    },
                                                    {
                                                        "x": 441,
                                                        "y": 92
                                                    },
                                                    {
                                                        "x": 441,
                                                        "y": 99
                                                    },
                                                    {
                                                        "x": 432,
                                                        "y": 99
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 444,
                                                                "y": 94
                                                            },
                                                            {
                                                                "x": 445,
                                                                "y": 94
                                                            },
                                                            {
                                                                "x": 445,
                                                                "y": 98
                                                            },
                                                            {
                                                                "x": 444,
                                                                "y": 98
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": ":",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 444,
                                                        "y": 94
                                                    },
                                                    {
                                                        "x": 445,
                                                        "y": 94
                                                    },
                                                    {
                                                        "x": 445,
                                                        "y": 98
                                                    },
                                                    {
                                                        "x": 444,
                                                        "y": 98
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 448,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 453,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 453,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 448,
                                                                "y": 99
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "3",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 454,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 459,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 459,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 454,
                                                                "y": 99
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "6",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 460,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 469,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 469,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 460,
                                                                "y": 99
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 470,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 474,
                                                                "y": 92
                                                            },
                                                            {
                                                                "x": 474,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 470,
                                                                "y": 99
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "4",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 448,
                                                        "y": 92
                                                    },
                                                    {
                                                        "x": 474,
                                                        "y": 92
                                                    },
                                                    {
                                                        "x": 474,
                                                        "y": 99
                                                    },
                                                    {
                                                        "x": 448,
                                                        "y": 99
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 507,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 511,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 511,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 507,
                                                                "y": 100
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "息",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 507,
                                                        "y": 89
                                                    },
                                                    {
                                                        "x": 511,
                                                        "y": 89
                                                    },
                                                    {
                                                        "x": 511,
                                                        "y": 100
                                                    },
                                                    {
                                                        "x": 507,
                                                        "y": 100
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": {
                                        "detectedLanguages": [
                                            {
                                                "languageCode": "zh",
                                                "confidence": 1
                                            }
                                        ],
                                        "detectedBreak": null
                                    },
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 397,
                                                "y": 74
                                            },
                                            {
                                                "x": 511,
                                                "y": 72
                                            },
                                            {
                                                "x": 512,
                                                "y": 100
                                            },
                                            {
                                                "x": 398,
                                                "y": 102
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": {
                                "detectedLanguages": [
                                    {
                                        "languageCode": "zh",
                                        "confidence": 1
                                    }
                                ],
                                "detectedBreak": null
                            },
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 397,
                                        "y": 74
                                    },
                                    {
                                        "x": 511,
                                        "y": 72
                                    },
                                    {
                                        "x": 512,
                                        "y": 100
                                    },
                                    {
                                        "x": 398,
                                        "y": 102
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 90,
                                                                "y": 142
                                                            },
                                                            {
                                                                "x": 115,
                                                                "y": 141
                                                            },
                                                            {
                                                                "x": 115,
                                                                "y": 163
                                                            },
                                                            {
                                                                "x": 90,
                                                                "y": 164
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 116,
                                                                "y": 142
                                                            },
                                                            {
                                                                "x": 126,
                                                                "y": 142
                                                            },
                                                            {
                                                                "x": 126,
                                                                "y": 164
                                                            },
                                                            {
                                                                "x": 116,
                                                                "y": 164
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 127,
                                                                "y": 141
                                                            },
                                                            {
                                                                "x": 138,
                                                                "y": 141
                                                            },
                                                            {
                                                                "x": 138,
                                                                "y": 163
                                                            },
                                                            {
                                                                "x": 127,
                                                                "y": 163
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 139,
                                                                "y": 141
                                                            },
                                                            {
                                                                "x": 149,
                                                                "y": 141
                                                            },
                                                            {
                                                                "x": 149,
                                                                "y": 163
                                                            },
                                                            {
                                                                "x": 139,
                                                                "y": 163
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 90,
                                                        "y": 142
                                                    },
                                                    {
                                                        "x": 149,
                                                        "y": 141
                                                    },
                                                    {
                                                        "x": 149,
                                                        "y": 164
                                                    },
                                                    {
                                                        "x": 90,
                                                        "y": 165
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 151,
                                                                "y": 141
                                                            },
                                                            {
                                                                "x": 191,
                                                                "y": 140
                                                            },
                                                            {
                                                                "x": 191,
                                                                "y": 162
                                                            },
                                                            {
                                                                "x": 151,
                                                                "y": 163
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "年",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 151,
                                                        "y": 141
                                                    },
                                                    {
                                                        "x": 191,
                                                        "y": 140
                                                    },
                                                    {
                                                        "x": 191,
                                                        "y": 162
                                                    },
                                                    {
                                                        "x": 151,
                                                        "y": 163
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 200,
                                                                "y": 145
                                                            },
                                                            {
                                                                "x": 205,
                                                                "y": 145
                                                            },
                                                            {
                                                                "x": 205,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 200,
                                                                "y": 157
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 212,
                                                                "y": 145
                                                            },
                                                            {
                                                                "x": 216,
                                                                "y": 145
                                                            },
                                                            {
                                                                "x": 216,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 212,
                                                                "y": 157
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 200,
                                                        "y": 145
                                                    },
                                                    {
                                                        "x": 216,
                                                        "y": 145
                                                    },
                                                    {
                                                        "x": 216,
                                                        "y": 157
                                                    },
                                                    {
                                                        "x": 200,
                                                        "y": 157
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 224,
                                                                "y": 142
                                                            },
                                                            {
                                                                "x": 237,
                                                                "y": 142
                                                            },
                                                            {
                                                                "x": 237,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 224,
                                                                "y": 157
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "月",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 224,
                                                        "y": 142
                                                    },
                                                    {
                                                        "x": 237,
                                                        "y": 142
                                                    },
                                                    {
                                                        "x": 237,
                                                        "y": 157
                                                    },
                                                    {
                                                        "x": 224,
                                                        "y": 157
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": {
                                        "detectedLanguages": [
                                            {
                                                "languageCode": "zh",
                                                "confidence": 1
                                            }
                                        ],
                                        "detectedBreak": null
                                    },
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 90,
                                                "y": 142
                                            },
                                            {
                                                "x": 237,
                                                "y": 139
                                            },
                                            {
                                                "x": 237,
                                                "y": 162
                                            },
                                            {
                                                "x": 90,
                                                "y": 165
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": {
                                "detectedLanguages": [
                                    {
                                        "languageCode": "zh",
                                        "confidence": 1
                                    }
                                ],
                                "detectedBreak": null
                            },
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 90,
                                        "y": 142
                                    },
                                    {
                                        "x": 237,
                                        "y": 139
                                    },
                                    {
                                        "x": 237,
                                        "y": 162
                                    },
                                    {
                                        "x": 90,
                                        "y": 165
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 285,
                                                                "y": 143
                                                            },
                                                            {
                                                                "x": 289,
                                                                "y": 143
                                                            },
                                                            {
                                                                "x": 289,
                                                                "y": 155
                                                            },
                                                            {
                                                                "x": 285,
                                                                "y": 155
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 296,
                                                                "y": 143
                                                            },
                                                            {
                                                                "x": 301,
                                                                "y": 143
                                                            },
                                                            {
                                                                "x": 301,
                                                                "y": 155
                                                            },
                                                            {
                                                                "x": 296,
                                                                "y": 155
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 285,
                                                        "y": 143
                                                    },
                                                    {
                                                        "x": 301,
                                                        "y": 143
                                                    },
                                                    {
                                                        "x": 301,
                                                        "y": 155
                                                    },
                                                    {
                                                        "x": 285,
                                                        "y": 155
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 310,
                                                                "y": 140
                                                            },
                                                            {
                                                                "x": 322,
                                                                "y": 140
                                                            },
                                                            {
                                                                "x": 322,
                                                                "y": 156
                                                            },
                                                            {
                                                                "x": 310,
                                                                "y": 156
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "日",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 310,
                                                        "y": 140
                                                    },
                                                    {
                                                        "x": 322,
                                                        "y": 140
                                                    },
                                                    {
                                                        "x": 322,
                                                        "y": 156
                                                    },
                                                    {
                                                        "x": 310,
                                                        "y": 156
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 285,
                                                "y": 141
                                            },
                                            {
                                                "x": 322,
                                                "y": 140
                                            },
                                            {
                                                "x": 322,
                                                "y": 156
                                            },
                                            {
                                                "x": 285,
                                                "y": 157
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 285,
                                        "y": 141
                                    },
                                    {
                                        "x": 322,
                                        "y": 140
                                    },
                                    {
                                        "x": 322,
                                        "y": 156
                                    },
                                    {
                                        "x": 285,
                                        "y": 157
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 359,
                                                                "y": 138
                                                            },
                                                            {
                                                                "x": 381,
                                                                "y": 137
                                                            },
                                                            {
                                                                "x": 382,
                                                                "y": 159
                                                            },
                                                            {
                                                                "x": 360,
                                                                "y": 160
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 382,
                                                                "y": 137
                                                            },
                                                            {
                                                                "x": 388,
                                                                "y": 137
                                                            },
                                                            {
                                                                "x": 389,
                                                                "y": 159
                                                            },
                                                            {
                                                                "x": 383,
                                                                "y": 159
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "5",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 359,
                                                        "y": 138
                                                    },
                                                    {
                                                        "x": 388,
                                                        "y": 136
                                                    },
                                                    {
                                                        "x": 389,
                                                        "y": 158
                                                    },
                                                    {
                                                        "x": 360,
                                                        "y": 160
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 390,
                                                                "y": 136
                                                            },
                                                            {
                                                                "x": 407,
                                                                "y": 135
                                                            },
                                                            {
                                                                "x": 408,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 391,
                                                                "y": 158
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "时",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 390,
                                                        "y": 136
                                                    },
                                                    {
                                                        "x": 407,
                                                        "y": 135
                                                    },
                                                    {
                                                        "x": 408,
                                                        "y": 157
                                                    },
                                                    {
                                                        "x": 391,
                                                        "y": 158
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 359,
                                                "y": 138
                                            },
                                            {
                                                "x": 407,
                                                "y": 135
                                            },
                                            {
                                                "x": 408,
                                                "y": 157
                                            },
                                            {
                                                "x": 360,
                                                "y": 160
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 359,
                                        "y": 138
                                    },
                                    {
                                        "x": 407,
                                        "y": 135
                                    },
                                    {
                                        "x": 408,
                                        "y": 157
                                    },
                                    {
                                        "x": 360,
                                        "y": 160
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 452,
                                                                "y": 137
                                                            },
                                                            {
                                                                "x": 460,
                                                                "y": 137
                                                            },
                                                            {
                                                                "x": 460,
                                                                "y": 150
                                                            },
                                                            {
                                                                "x": 452,
                                                                "y": 150
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 464,
                                                                "y": 138
                                                            },
                                                            {
                                                                "x": 472,
                                                                "y": 138
                                                            },
                                                            {
                                                                "x": 472,
                                                                "y": 150
                                                            },
                                                            {
                                                                "x": 464,
                                                                "y": 150
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 452,
                                                        "y": 137
                                                    },
                                                    {
                                                        "x": 472,
                                                        "y": 137
                                                    },
                                                    {
                                                        "x": 472,
                                                        "y": 150
                                                    },
                                                    {
                                                        "x": 452,
                                                        "y": 150
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 477,
                                                                "y": 136
                                                            },
                                                            {
                                                                "x": 493,
                                                                "y": 136
                                                            },
                                                            {
                                                                "x": 493,
                                                                "y": 151
                                                            },
                                                            {
                                                                "x": 477,
                                                                "y": 151
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "分",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 477,
                                                        "y": 136
                                                    },
                                                    {
                                                        "x": 493,
                                                        "y": 136
                                                    },
                                                    {
                                                        "x": 493,
                                                        "y": 151
                                                    },
                                                    {
                                                        "x": 477,
                                                        "y": 151
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 452,
                                                "y": 136
                                            },
                                            {
                                                "x": 493,
                                                "y": 136
                                            },
                                            {
                                                "x": 493,
                                                "y": 151
                                            },
                                            {
                                                "x": 452,
                                                "y": 151
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 452,
                                        "y": 136
                                    },
                                    {
                                        "x": 493,
                                        "y": 136
                                    },
                                    {
                                        "x": 493,
                                        "y": 151
                                    },
                                    {
                                        "x": 452,
                                        "y": 151
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 105,
                                                                "y": 192
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 192
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 208
                                                            },
                                                            {
                                                                "x": 105,
                                                                "y": 208
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "基",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 126,
                                                                "y": 191
                                                            },
                                                            {
                                                                "x": 143,
                                                                "y": 191
                                                            },
                                                            {
                                                                "x": 143,
                                                                "y": 207
                                                            },
                                                            {
                                                                "x": 126,
                                                                "y": 207
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "线",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 105,
                                                        "y": 191
                                                    },
                                                    {
                                                        "x": 143,
                                                        "y": 191
                                                    },
                                                    {
                                                        "x": 143,
                                                        "y": 208
                                                    },
                                                    {
                                                        "x": 105,
                                                        "y": 208
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 105,
                                                "y": 191
                                            },
                                            {
                                                "x": 143,
                                                "y": 191
                                            },
                                            {
                                                "x": 143,
                                                "y": 208
                                            },
                                            {
                                                "x": 105,
                                                "y": 208
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 105,
                                        "y": 191
                                    },
                                    {
                                        "x": 143,
                                        "y": 191
                                    },
                                    {
                                        "x": 143,
                                        "y": 208
                                    },
                                    {
                                        "x": 105,
                                        "y": 208
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 212,
                                                                "y": 189
                                                            },
                                                            {
                                                                "x": 229,
                                                                "y": 189
                                                            },
                                                            {
                                                                "x": 229,
                                                                "y": 206
                                                            },
                                                            {
                                                                "x": 212,
                                                                "y": 206
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "滴",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 234,
                                                                "y": 189
                                                            },
                                                            {
                                                                "x": 250,
                                                                "y": 189
                                                            },
                                                            {
                                                                "x": 250,
                                                                "y": 205
                                                            },
                                                            {
                                                                "x": 234,
                                                                "y": 205
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "定",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 212,
                                                        "y": 189
                                                    },
                                                    {
                                                        "x": 250,
                                                        "y": 188
                                                    },
                                                    {
                                                        "x": 250,
                                                        "y": 205
                                                    },
                                                    {
                                                        "x": 212,
                                                        "y": 206
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 256,
                                                                "y": 188
                                                            },
                                                            {
                                                                "x": 273,
                                                                "y": 188
                                                            },
                                                            {
                                                                "x": 273,
                                                                "y": 204
                                                            },
                                                            {
                                                                "x": 256,
                                                                "y": 204
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "体",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 277,
                                                                "y": 188
                                                            },
                                                            {
                                                                "x": 294,
                                                                "y": 188
                                                            },
                                                            {
                                                                "x": 294,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 277,
                                                                "y": 203
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "积",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 256,
                                                        "y": 188
                                                    },
                                                    {
                                                        "x": 294,
                                                        "y": 187
                                                    },
                                                    {
                                                        "x": 294,
                                                        "y": 203
                                                    },
                                                    {
                                                        "x": 256,
                                                        "y": 204
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 212,
                                                "y": 189
                                            },
                                            {
                                                "x": 294,
                                                "y": 187
                                            },
                                            {
                                                "x": 294,
                                                "y": 204
                                            },
                                            {
                                                "x": 212,
                                                "y": 206
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 212,
                                        "y": 189
                                    },
                                    {
                                        "x": 294,
                                        "y": 187
                                    },
                                    {
                                        "x": 294,
                                        "y": 204
                                    },
                                    {
                                        "x": 212,
                                        "y": 206
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 358,
                                                                "y": 186
                                                            },
                                                            {
                                                                "x": 373,
                                                                "y": 186
                                                            },
                                                            {
                                                                "x": 373,
                                                                "y": 202
                                                            },
                                                            {
                                                                "x": 358,
                                                                "y": 202
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "高",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 358,
                                                        "y": 186
                                                    },
                                                    {
                                                        "x": 373,
                                                        "y": 186
                                                    },
                                                    {
                                                        "x": 373,
                                                        "y": 202
                                                    },
                                                    {
                                                        "x": 358,
                                                        "y": 202
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 379,
                                                                "y": 186
                                                            },
                                                            {
                                                                "x": 396,
                                                                "y": 186
                                                            },
                                                            {
                                                                "x": 396,
                                                                "y": 202
                                                            },
                                                            {
                                                                "x": 379,
                                                                "y": 202
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "锰",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 379,
                                                        "y": 186
                                                    },
                                                    {
                                                        "x": 396,
                                                        "y": 186
                                                    },
                                                    {
                                                        "x": 396,
                                                        "y": 202
                                                    },
                                                    {
                                                        "x": 379,
                                                        "y": 202
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 401,
                                                                "y": 185
                                                            },
                                                            {
                                                                "x": 418,
                                                                "y": 185
                                                            },
                                                            {
                                                                "x": 418,
                                                                "y": 201
                                                            },
                                                            {
                                                                "x": 401,
                                                                "y": 201
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "酸",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 423,
                                                                "y": 185
                                                            },
                                                            {
                                                                "x": 439,
                                                                "y": 185
                                                            },
                                                            {
                                                                "x": 439,
                                                                "y": 201
                                                            },
                                                            {
                                                                "x": 423,
                                                                "y": 201
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "盐",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 401,
                                                        "y": 185
                                                    },
                                                    {
                                                        "x": 439,
                                                        "y": 184
                                                    },
                                                    {
                                                        "x": 439,
                                                        "y": 200
                                                    },
                                                    {
                                                        "x": 401,
                                                        "y": 201
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 442,
                                                                "y": 182
                                                            },
                                                            {
                                                                "x": 465,
                                                                "y": 182
                                                            },
                                                            {
                                                                "x": 465,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 442,
                                                                "y": 203
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "指",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 466,
                                                                "y": 181
                                                            },
                                                            {
                                                                "x": 483,
                                                                "y": 181
                                                            },
                                                            {
                                                                "x": 483,
                                                                "y": 202
                                                            },
                                                            {
                                                                "x": 466,
                                                                "y": 202
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "数",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 442,
                                                        "y": 181
                                                    },
                                                    {
                                                        "x": 483,
                                                        "y": 180
                                                    },
                                                    {
                                                        "x": 483,
                                                        "y": 202
                                                    },
                                                    {
                                                        "x": 442,
                                                        "y": 203
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 485,
                                                                "y": 181
                                                            },
                                                            {
                                                                "x": 502,
                                                                "y": 181
                                                            },
                                                            {
                                                                "x": 502,
                                                                "y": 202
                                                            },
                                                            {
                                                                "x": 485,
                                                                "y": 202
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "值",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 485,
                                                        "y": 181
                                                    },
                                                    {
                                                        "x": 502,
                                                        "y": 181
                                                    },
                                                    {
                                                        "x": 502,
                                                        "y": 202
                                                    },
                                                    {
                                                        "x": 485,
                                                        "y": 202
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": {
                                        "detectedLanguages": [
                                            {
                                                "languageCode": "zh",
                                                "confidence": 1
                                            }
                                        ],
                                        "detectedBreak": null
                                    },
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 358,
                                                "y": 182
                                            },
                                            {
                                                "x": 502,
                                                "y": 180
                                            },
                                            {
                                                "x": 502,
                                                "y": 202
                                            },
                                            {
                                                "x": 358,
                                                "y": 204
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": {
                                "detectedLanguages": [
                                    {
                                        "languageCode": "zh",
                                        "confidence": 1
                                    }
                                ],
                                "detectedBreak": null
                            },
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 358,
                                        "y": 182
                                    },
                                    {
                                        "x": 502,
                                        "y": 180
                                    },
                                    {
                                        "x": 502,
                                        "y": 202
                                    },
                                    {
                                        "x": 358,
                                        "y": 204
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 103,
                                                                "y": 237
                                                            },
                                                            {
                                                                "x": 110,
                                                                "y": 237
                                                            },
                                                            {
                                                                "x": 110,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 103,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "3",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 114,
                                                                "y": 237
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 237
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 114,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "5",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 126,
                                                                "y": 237
                                                            },
                                                            {
                                                                "x": 133,
                                                                "y": 237
                                                            },
                                                            {
                                                                "x": 133,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 126,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "7",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 139,
                                                                "y": 238
                                                            },
                                                            {
                                                                "x": 144,
                                                                "y": 238
                                                            },
                                                            {
                                                                "x": 144,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 139,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "1",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 103,
                                                        "y": 237
                                                    },
                                                    {
                                                        "x": 144,
                                                        "y": 237
                                                    },
                                                    {
                                                        "x": 144,
                                                        "y": 250
                                                    },
                                                    {
                                                        "x": 103,
                                                        "y": 250
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 103,
                                                "y": 237
                                            },
                                            {
                                                "x": 144,
                                                "y": 237
                                            },
                                            {
                                                "x": 144,
                                                "y": 250
                                            },
                                            {
                                                "x": 103,
                                                "y": 250
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 103,
                                        "y": 237
                                    },
                                    {
                                        "x": 144,
                                        "y": 237
                                    },
                                    {
                                        "x": 144,
                                        "y": 250
                                    },
                                    {
                                        "x": 103,
                                        "y": 250
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 200,
                                                                "y": 233
                                                            },
                                                            {
                                                                "x": 221,
                                                                "y": 233
                                                            },
                                                            {
                                                                "x": 221,
                                                                "y": 251
                                                            },
                                                            {
                                                                "x": 200,
                                                                "y": 251
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "4",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 222,
                                                                "y": 233
                                                            },
                                                            {
                                                                "x": 243,
                                                                "y": 233
                                                            },
                                                            {
                                                                "x": 243,
                                                                "y": 251
                                                            },
                                                            {
                                                                "x": 222,
                                                                "y": 251
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": ".",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 200,
                                                        "y": 233
                                                    },
                                                    {
                                                        "x": 243,
                                                        "y": 232
                                                    },
                                                    {
                                                        "x": 243,
                                                        "y": 250
                                                    },
                                                    {
                                                        "x": 200,
                                                        "y": 251
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 245,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 253,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 253,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 245,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 254,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 259,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 259,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 254,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 260,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 268,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 268,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 260,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "5",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 269,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 278,
                                                                "y": 232
                                                            },
                                                            {
                                                                "x": 278,
                                                                "y": 250
                                                            },
                                                            {
                                                                "x": 269,
                                                                "y": 250
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "3",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 279,
                                                                "y": 231
                                                            },
                                                            {
                                                                "x": 294,
                                                                "y": 231
                                                            },
                                                            {
                                                                "x": 294,
                                                                "y": 249
                                                            },
                                                            {
                                                                "x": 279,
                                                                "y": 249
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "m",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 295,
                                                                "y": 231
                                                            },
                                                            {
                                                                "x": 303,
                                                                "y": 231
                                                            },
                                                            {
                                                                "x": 303,
                                                                "y": 249
                                                            },
                                                            {
                                                                "x": 295,
                                                                "y": 249
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "l",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 245,
                                                        "y": 232
                                                    },
                                                    {
                                                        "x": 303,
                                                        "y": 231
                                                    },
                                                    {
                                                        "x": 303,
                                                        "y": 250
                                                    },
                                                    {
                                                        "x": 245,
                                                        "y": 251
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 200,
                                                "y": 233
                                            },
                                            {
                                                "x": 303,
                                                "y": 231
                                            },
                                            {
                                                "x": 303,
                                                "y": 250
                                            },
                                            {
                                                "x": 200,
                                                "y": 252
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 200,
                                        "y": 233
                                    },
                                    {
                                        "x": 303,
                                        "y": 231
                                    },
                                    {
                                        "x": 303,
                                        "y": 250
                                    },
                                    {
                                        "x": 200,
                                        "y": 252
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 373,
                                                                "y": 229
                                                            },
                                                            {
                                                                "x": 396,
                                                                "y": 229
                                                            },
                                                            {
                                                                "x": 396,
                                                                "y": 248
                                                            },
                                                            {
                                                                "x": 373,
                                                                "y": 248
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 397,
                                                                "y": 229
                                                            },
                                                            {
                                                                "x": 416,
                                                                "y": 229
                                                            },
                                                            {
                                                                "x": 416,
                                                                "y": 248
                                                            },
                                                            {
                                                                "x": 397,
                                                                "y": 248
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": ".",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "en",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 373,
                                                        "y": 229
                                                    },
                                                    {
                                                        "x": 416,
                                                        "y": 228
                                                    },
                                                    {
                                                        "x": 416,
                                                        "y": 247
                                                    },
                                                    {
                                                        "x": 373,
                                                        "y": 248
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 418,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 423,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 423,
                                                                "y": 247
                                                            },
                                                            {
                                                                "x": 418,
                                                                "y": 247
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "7",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 424,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 433,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 433,
                                                                "y": 247
                                                            },
                                                            {
                                                                "x": 424,
                                                                "y": 247
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 434,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 443,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 443,
                                                                "y": 247
                                                            },
                                                            {
                                                                "x": 434,
                                                                "y": 247
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "m",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 444,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 453,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 453,
                                                                "y": 247
                                                            },
                                                            {
                                                                "x": 444,
                                                                "y": 247
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "g",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 454,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 466,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 466,
                                                                "y": 247
                                                            },
                                                            {
                                                                "x": 454,
                                                                "y": 247
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "/",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "en",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 467,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 476,
                                                                "y": 228
                                                            },
                                                            {
                                                                "x": 476,
                                                                "y": 247
                                                            },
                                                            {
                                                                "x": 467,
                                                                "y": 247
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "L",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "en",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 418,
                                                        "y": 228
                                                    },
                                                    {
                                                        "x": 476,
                                                        "y": 227
                                                    },
                                                    {
                                                        "x": 476,
                                                        "y": 247
                                                    },
                                                    {
                                                        "x": 418,
                                                        "y": 248
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": {
                                        "detectedLanguages": [
                                            {
                                                "languageCode": "en",
                                                "confidence": 1
                                            }
                                        ],
                                        "detectedBreak": null
                                    },
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 373,
                                                "y": 229
                                            },
                                            {
                                                "x": 476,
                                                "y": 228
                                            },
                                            {
                                                "x": 476,
                                                "y": 248
                                            },
                                            {
                                                "x": 373,
                                                "y": 249
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": {
                                "detectedLanguages": [
                                    {
                                        "languageCode": "en",
                                        "confidence": 1
                                    }
                                ],
                                "detectedBreak": null
                            },
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 373,
                                        "y": 229
                                    },
                                    {
                                        "x": 476,
                                        "y": 228
                                    },
                                    {
                                        "x": 476,
                                        "y": 248
                                    },
                                    {
                                        "x": 373,
                                        "y": 249
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 97,
                                                                "y": 282
                                                            },
                                                            {
                                                                "x": 123,
                                                                "y": 281
                                                            },
                                                            {
                                                                "x": 123,
                                                                "y": 303
                                                            },
                                                            {
                                                                "x": 98,
                                                                "y": 304
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "自",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 124,
                                                                "y": 282
                                                            },
                                                            {
                                                                "x": 146,
                                                                "y": 281
                                                            },
                                                            {
                                                                "x": 146,
                                                                "y": 303
                                                            },
                                                            {
                                                                "x": 125,
                                                                "y": 304
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "动",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 97,
                                                        "y": 282
                                                    },
                                                    {
                                                        "x": 146,
                                                        "y": 281
                                                    },
                                                    {
                                                        "x": 147,
                                                        "y": 304
                                                    },
                                                    {
                                                        "x": 98,
                                                        "y": 305
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 148,
                                                                "y": 281
                                                            },
                                                            {
                                                                "x": 169,
                                                                "y": 281
                                                            },
                                                            {
                                                                "x": 169,
                                                                "y": 303
                                                            },
                                                            {
                                                                "x": 149,
                                                                "y": 303
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "打",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 170,
                                                                "y": 280
                                                            },
                                                            {
                                                                "x": 188,
                                                                "y": 280
                                                            },
                                                            {
                                                                "x": 188,
                                                                "y": 302
                                                            },
                                                            {
                                                                "x": 171,
                                                                "y": 302
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "印",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 148,
                                                        "y": 281
                                                    },
                                                    {
                                                        "x": 188,
                                                        "y": 280
                                                    },
                                                    {
                                                        "x": 188,
                                                        "y": 302
                                                    },
                                                    {
                                                        "x": 149,
                                                        "y": 303
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 190,
                                                                "y": 280
                                                            },
                                                            {
                                                                "x": 207,
                                                                "y": 280
                                                            },
                                                            {
                                                                "x": 207,
                                                                "y": 302
                                                            },
                                                            {
                                                                "x": 191,
                                                                "y": 302
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "关",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 190,
                                                        "y": 280
                                                    },
                                                    {
                                                        "x": 207,
                                                        "y": 280
                                                    },
                                                    {
                                                        "x": 207,
                                                        "y": 302
                                                    },
                                                    {
                                                        "x": 191,
                                                        "y": 302
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": {
                                        "detectedLanguages": [
                                            {
                                                "languageCode": "zh",
                                                "confidence": 1
                                            }
                                        ],
                                        "detectedBreak": null
                                    },
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 97,
                                                "y": 282
                                            },
                                            {
                                                "x": 207,
                                                "y": 279
                                            },
                                            {
                                                "x": 207,
                                                "y": 302
                                            },
                                            {
                                                "x": 98,
                                                "y": 305
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": {
                                "detectedLanguages": [
                                    {
                                        "languageCode": "zh",
                                        "confidence": 1
                                    }
                                ],
                                "detectedBreak": null
                            },
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 97,
                                        "y": 282
                                    },
                                    {
                                        "x": 207,
                                        "y": 279
                                    },
                                    {
                                        "x": 207,
                                        "y": 302
                                    },
                                    {
                                        "x": 98,
                                        "y": 305
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 251,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 251,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 251,
                                                                "y": 300
                                                            },
                                                            {
                                                                "x": 251,
                                                                "y": 300
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "|",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 251,
                                                        "y": 278
                                                    },
                                                    {
                                                        "x": 251,
                                                        "y": 278
                                                    },
                                                    {
                                                        "x": 251,
                                                        "y": 300
                                                    },
                                                    {
                                                        "x": 251,
                                                        "y": 300
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 256,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 276,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 276,
                                                                "y": 300
                                                            },
                                                            {
                                                                "x": 256,
                                                                "y": 300
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "上",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 256,
                                                        "y": 278
                                                    },
                                                    {
                                                        "x": 276,
                                                        "y": 278
                                                    },
                                                    {
                                                        "x": 276,
                                                        "y": 300
                                                    },
                                                    {
                                                        "x": 256,
                                                        "y": 300
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 278,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 303,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 303,
                                                                "y": 300
                                                            },
                                                            {
                                                                "x": 278,
                                                                "y": 300
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "一",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 278,
                                                        "y": 278
                                                    },
                                                    {
                                                        "x": 303,
                                                        "y": 278
                                                    },
                                                    {
                                                        "x": 303,
                                                        "y": 300
                                                    },
                                                    {
                                                        "x": 278,
                                                        "y": 300
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 301,
                                                                "y": 281
                                                            },
                                                            {
                                                                "x": 318,
                                                                "y": 281
                                                            },
                                                            {
                                                                "x": 318,
                                                                "y": 297
                                                            },
                                                            {
                                                                "x": 301,
                                                                "y": 297
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "记",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 322,
                                                                "y": 280
                                                            },
                                                            {
                                                                "x": 340,
                                                                "y": 280
                                                            },
                                                            {
                                                                "x": 340,
                                                                "y": 296
                                                            },
                                                            {
                                                                "x": 322,
                                                                "y": 296
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "录",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 301,
                                                        "y": 280
                                                    },
                                                    {
                                                        "x": 340,
                                                        "y": 280
                                                    },
                                                    {
                                                        "x": 340,
                                                        "y": 297
                                                    },
                                                    {
                                                        "x": 301,
                                                        "y": 297
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": {
                                        "detectedLanguages": [
                                            {
                                                "languageCode": "zh",
                                                "confidence": 1
                                            }
                                        ],
                                        "detectedBreak": null
                                    },
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 251,
                                                "y": 278
                                            },
                                            {
                                                "x": 340,
                                                "y": 278
                                            },
                                            {
                                                "x": 340,
                                                "y": 300
                                            },
                                            {
                                                "x": 251,
                                                "y": 300
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": {
                                "detectedLanguages": [
                                    {
                                        "languageCode": "zh",
                                        "confidence": 1
                                    }
                                ],
                                "detectedBreak": null
                            },
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 251,
                                        "y": 278
                                    },
                                    {
                                        "x": 340,
                                        "y": 278
                                    },
                                    {
                                        "x": 340,
                                        "y": 300
                                    },
                                    {
                                        "x": 251,
                                        "y": 300
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 400,
                                                                "y": 279
                                                            },
                                                            {
                                                                "x": 418,
                                                                "y": 279
                                                            },
                                                            {
                                                                "x": 418,
                                                                "y": 295
                                                            },
                                                            {
                                                                "x": 400,
                                                                "y": 295
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "下",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 422,
                                                                "y": 285
                                                            },
                                                            {
                                                                "x": 439,
                                                                "y": 285
                                                            },
                                                            {
                                                                "x": 439,
                                                                "y": 287
                                                            },
                                                            {
                                                                "x": 422,
                                                                "y": 287
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "一",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 400,
                                                        "y": 279
                                                    },
                                                    {
                                                        "x": 439,
                                                        "y": 278
                                                    },
                                                    {
                                                        "x": 439,
                                                        "y": 294
                                                    },
                                                    {
                                                        "x": 400,
                                                        "y": 295
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 444,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 462,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 462,
                                                                "y": 293
                                                            },
                                                            {
                                                                "x": 444,
                                                                "y": 293
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "记",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 465,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 483,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 483,
                                                                "y": 293
                                                            },
                                                            {
                                                                "x": 465,
                                                                "y": 293
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "录",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 444,
                                                        "y": 277
                                                    },
                                                    {
                                                        "x": 483,
                                                        "y": 276
                                                    },
                                                    {
                                                        "x": 483,
                                                        "y": 292
                                                    },
                                                    {
                                                        "x": 444,
                                                        "y": 293
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 400,
                                                "y": 278
                                            },
                                            {
                                                "x": 483,
                                                "y": 277
                                            },
                                            {
                                                "x": 483,
                                                "y": 294
                                            },
                                            {
                                                "x": 400,
                                                "y": 295
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 400,
                                        "y": 278
                                    },
                                    {
                                        "x": 483,
                                        "y": 277
                                    },
                                    {
                                        "x": 483,
                                        "y": 294
                                    },
                                    {
                                        "x": 400,
                                        "y": 295
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 131,
                                                                "y": 327
                                                            },
                                                            {
                                                                "x": 155,
                                                                "y": 327
                                                            },
                                                            {
                                                                "x": 155,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 131,
                                                                "y": 348
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "打",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 160,
                                                                "y": 331
                                                            },
                                                            {
                                                                "x": 176,
                                                                "y": 331
                                                            },
                                                            {
                                                                "x": 176,
                                                                "y": 347
                                                            },
                                                            {
                                                                "x": 160,
                                                                "y": 347
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "印",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 131,
                                                        "y": 327
                                                    },
                                                    {
                                                        "x": 176,
                                                        "y": 327
                                                    },
                                                    {
                                                        "x": 176,
                                                        "y": 348
                                                    },
                                                    {
                                                        "x": 131,
                                                        "y": 348
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 131,
                                                "y": 327
                                            },
                                            {
                                                "x": 176,
                                                "y": 327
                                            },
                                            {
                                                "x": 176,
                                                "y": 348
                                            },
                                            {
                                                "x": 131,
                                                "y": 348
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 131,
                                        "y": 327
                                    },
                                    {
                                        "x": 176,
                                        "y": 327
                                    },
                                    {
                                        "x": 176,
                                        "y": 348
                                    },
                                    {
                                        "x": 131,
                                        "y": 348
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 242,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 262,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 262,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 242,
                                                                "y": 348
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "|",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 242,
                                                        "y": 325
                                                    },
                                                    {
                                                        "x": 262,
                                                        "y": 325
                                                    },
                                                    {
                                                        "x": 262,
                                                        "y": 348
                                                    },
                                                    {
                                                        "x": 242,
                                                        "y": 348
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 264,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 278,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 278,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 264,
                                                                "y": 348
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "历",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 279,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 306,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 306,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 279,
                                                                "y": 348
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "史",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 264,
                                                        "y": 325
                                                    },
                                                    {
                                                        "x": 306,
                                                        "y": 325
                                                    },
                                                    {
                                                        "x": 306,
                                                        "y": 348
                                                    },
                                                    {
                                                        "x": 264,
                                                        "y": 348
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": null
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 308,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 322,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 322,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 308,
                                                                "y": 348
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "报",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [
                                                            {
                                                                "languageCode": "zh",
                                                                "confidence": 0
                                                            }
                                                        ],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 323,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 342,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 342,
                                                                "y": 347
                                                            },
                                                            {
                                                                "x": 323,
                                                                "y": 347
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "表",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": {
                                                "detectedLanguages": [
                                                    {
                                                        "languageCode": "zh",
                                                        "confidence": 0
                                                    }
                                                ],
                                                "detectedBreak": null
                                            },
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 308,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 342,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 342,
                                                        "y": 348
                                                    },
                                                    {
                                                        "x": 308,
                                                        "y": 348
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": {
                                        "detectedLanguages": [
                                            {
                                                "languageCode": "zh",
                                                "confidence": 1
                                            }
                                        ],
                                        "detectedBreak": null
                                    },
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 242,
                                                "y": 324
                                            },
                                            {
                                                "x": 342,
                                                "y": 323
                                            },
                                            {
                                                "x": 342,
                                                "y": 347
                                            },
                                            {
                                                "x": 242,
                                                "y": 348
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": {
                                "detectedLanguages": [
                                    {
                                        "languageCode": "zh",
                                        "confidence": 1
                                    }
                                ],
                                "detectedBreak": null
                            },
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 242,
                                        "y": 324
                                    },
                                    {
                                        "x": 342,
                                        "y": 323
                                    },
                                    {
                                        "x": 342,
                                        "y": 347
                                    },
                                    {
                                        "x": 242,
                                        "y": 348
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 406,
                                                                "y": 327
                                                            },
                                                            {
                                                                "x": 422,
                                                                "y": 327
                                                            },
                                                            {
                                                                "x": 422,
                                                                "y": 343
                                                            },
                                                            {
                                                                "x": 406,
                                                                "y": 343
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "历",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 428,
                                                                "y": 326
                                                            },
                                                            {
                                                                "x": 444,
                                                                "y": 326
                                                            },
                                                            {
                                                                "x": 444,
                                                                "y": 343
                                                            },
                                                            {
                                                                "x": 428,
                                                                "y": 343
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "史",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 406,
                                                        "y": 326
                                                    },
                                                    {
                                                        "x": 444,
                                                        "y": 326
                                                    },
                                                    {
                                                        "x": 444,
                                                        "y": 343
                                                    },
                                                    {
                                                        "x": 406,
                                                        "y": 343
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 446,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 475,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 475,
                                                                "y": 345
                                                            },
                                                            {
                                                                "x": 446,
                                                                "y": 345
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "表",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 446,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 475,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 475,
                                                        "y": 345
                                                    },
                                                    {
                                                        "x": 446,
                                                        "y": 345
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        },
                                        {
                                            "symbols": [
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 477,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 478,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 478,
                                                                "y": 345
                                                            },
                                                            {
                                                                "x": 477,
                                                                "y": 345
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 477,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 478,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 478,
                                                        "y": 345
                                                    },
                                                    {
                                                        "x": 477,
                                                        "y": 345
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 406,
                                                "y": 324
                                            },
                                            {
                                                "x": 478,
                                                "y": 324
                                            },
                                            {
                                                "x": 478,
                                                "y": 345
                                            },
                                            {
                                                "x": 406,
                                                "y": 345
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 406,
                                        "y": 324
                                    },
                                    {
                                        "x": 478,
                                        "y": 324
                                    },
                                    {
                                        "x": 478,
                                        "y": 345
                                    },
                                    {
                                        "x": 406,
                                        "y": 345
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        },
                        {
                            "paragraphs": [
                                {
                                    "words": [
                                        {
                                            "symbols": [
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 520,
                                                                "y": 328
                                                            },
                                                            {
                                                                "x": 546,
                                                                "y": 328
                                                            },
                                                            {
                                                                "x": 546,
                                                                "y": 347
                                                            },
                                                            {
                                                                "x": 520,
                                                                "y": 347
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "返",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": {
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 547,
                                                                "y": 328
                                                            },
                                                            {
                                                                "x": 559,
                                                                "y": 328
                                                            },
                                                            {
                                                                "x": 559,
                                                                "y": 347
                                                            },
                                                            {
                                                                "x": 547,
                                                                "y": 347
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "回",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 520,
                                                        "y": 328
                                                    },
                                                    {
                                                        "x": 559,
                                                        "y": 328
                                                    },
                                                    {
                                                        "x": 559,
                                                        "y": 347
                                                    },
                                                    {
                                                        "x": 520,
                                                        "y": 347
                                                    }
                                                ],
                                                "normalizedVertices": []
                                            },
                                            "confidence": 0
                                        }
                                    ],
                                    "property": null,
                                    "boundingBox": {
                                        "vertices": [
                                            {
                                                "x": 520,
                                                "y": 328
                                            },
                                            {
                                                "x": 559,
                                                "y": 328
                                            },
                                            {
                                                "x": 559,
                                                "y": 347
                                            },
                                            {
                                                "x": 520,
                                                "y": 347
                                            }
                                        ],
                                        "normalizedVertices": []
                                    },
                                    "confidence": 0
                                }
                            ],
                            "property": null,
                            "boundingBox": {
                                "vertices": [
                                    {
                                        "x": 520,
                                        "y": 328
                                    },
                                    {
                                        "x": 559,
                                        "y": 328
                                    },
                                    {
                                        "x": 559,
                                        "y": 347
                                    },
                                    {
                                        "x": 520,
                                        "y": 347
                                    }
                                ],
                                "normalizedVertices": []
                            },
                            "blockType": "TEXT",
                            "confidence": 0
                        }
                    ],
                    "property": {
                        "detectedLanguages": [
                            {
                                "languageCode": "zh",
                                "confidence": 0.5
                            },
                            {
                                "languageCode": "en",
                                "confidence": 0.07999999821186066
                            }
                        ],
                        "detectedBreak": null
                    },
                    "width": 640,
                    "height": 480,
                    "confidence": 0
                }
            ],
            "text": "历史数据\nn期 2021-11-I8\n时间 15:3624 息\n2021年 11月\n11日\n15时\n00分\n基线\n滴定体积\n高锰酸盐指数值\n3571\n4. 0253ml\n2. 72mg/L\n自动打印关\n|上一记录\n下一记录\n打印\n|历史报表\n历史表2\n返回\n"
        },
        "webDetection": null,
        "productSearchResults": null,
        "context": null
    }
    colorMode(HSB);

}

function draw() {
    // Displays the image at its actual size at point (0,0)
    createCanvas(640, 480);
    image(img, 0, 0);
    noSmooth();

    stroke(random(100, 145), random(80, 100), random(80, 100));

    vertices =
        obj.responses[0].fullTextAnnotation.pages[0].blocks[5].boundingBox.vertices

    line(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y)
    line(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y)
    line(vertices[2].x, vertices[2].y, vertices[3].x, vertices[3].y)
    // line(vertices[3].x, vertices[3].y,vertices[0].x, vertices[0].y)

    point(130, 83);
    point(175, 82);
    point(175, 101);
    point(130, 102);
}