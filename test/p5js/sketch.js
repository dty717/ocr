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
                "description": "CGS\n14:38:46\n历史数据\n2021-11-30\n2021年11月 30日 11吋 26分\n基值\n峰值\nA f\n总磷值\n3572\n2466\n0. 1609\n2. 025mg/L\n下一记录\n水祥历史\n标核历史\n返回\n",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 5,
                            "y": -1
                        },
                        {
                            "x": 603,
                            "y": -1
                        },
                        {
                            "x": 603,
                            "y": 409
                        },
                        {
                            "x": 5,
                            "y": 409
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
                "description": "CGS",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 5,
                            "y": 0
                        },
                        {
                            "x": 68,
                            "y": -1
                        },
                        {
                            "x": 68,
                            "y": 18
                        },
                        {
                            "x": 5,
                            "y": 19
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
                "description": "14:38:46",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 522,
                            "y": 88
                        },
                        {
                            "x": 593,
                            "y": 87
                        },
                        {
                            "x": 593,
                            "y": 99
                        },
                        {
                            "x": 522,
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
                "description": "历史",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 74,
                            "y": 101
                        },
                        {
                            "x": 134,
                            "y": 99
                        },
                        {
                            "x": 135,
                            "y": 126
                        },
                        {
                            "x": 75,
                            "y": 128
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
                            "x": 140,
                            "y": 103
                        },
                        {
                            "x": 190,
                            "y": 101
                        },
                        {
                            "x": 191,
                            "y": 124
                        },
                        {
                            "x": 141,
                            "y": 126
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
                "description": "2021-11-30",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 505,
                            "y": 110
                        },
                        {
                            "x": 603,
                            "y": 109
                        },
                        {
                            "x": 603,
                            "y": 122
                        },
                        {
                            "x": 505,
                            "y": 123
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
                            "x": 141,
                            "y": 161
                        },
                        {
                            "x": 183,
                            "y": 160
                        },
                        {
                            "x": 183,
                            "y": 176
                        },
                        {
                            "x": 141,
                            "y": 177
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
                            "x": 191,
                            "y": 157
                        },
                        {
                            "x": 208,
                            "y": 157
                        },
                        {
                            "x": 208,
                            "y": 176
                        },
                        {
                            "x": 191,
                            "y": 176
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
                            "x": 231,
                            "y": 160
                        },
                        {
                            "x": 245,
                            "y": 160
                        },
                        {
                            "x": 245,
                            "y": 175
                        },
                        {
                            "x": 231,
                            "y": 175
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
                            "x": 255,
                            "y": 157
                        },
                        {
                            "x": 269,
                            "y": 157
                        },
                        {
                            "x": 269,
                            "y": 175
                        },
                        {
                            "x": 255,
                            "y": 175
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
                "description": "30",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 289,
                            "y": 154
                        },
                        {
                            "x": 313,
                            "y": 154
                        },
                        {
                            "x": 313,
                            "y": 177
                        },
                        {
                            "x": 289,
                            "y": 177
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
                            "x": 315,
                            "y": 154
                        },
                        {
                            "x": 340,
                            "y": 154
                        },
                        {
                            "x": 340,
                            "y": 176
                        },
                        {
                            "x": 315,
                            "y": 176
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
                            "x": 348,
                            "y": 159
                        },
                        {
                            "x": 363,
                            "y": 159
                        },
                        {
                            "x": 363,
                            "y": 172
                        },
                        {
                            "x": 348,
                            "y": 172
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
                "description": "吋",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 371,
                            "y": 155
                        },
                        {
                            "x": 390,
                            "y": 155
                        },
                        {
                            "x": 390,
                            "y": 173
                        },
                        {
                            "x": 371,
                            "y": 173
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
                "description": "26",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 400,
                            "y": 153
                        },
                        {
                            "x": 432,
                            "y": 153
                        },
                        {
                            "x": 432,
                            "y": 175
                        },
                        {
                            "x": 400,
                            "y": 175
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
                            "x": 434,
                            "y": 152
                        },
                        {
                            "x": 447,
                            "y": 152
                        },
                        {
                            "x": 447,
                            "y": 174
                        },
                        {
                            "x": 434,
                            "y": 174
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
                "description": "基",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 86,
                            "y": 209
                        },
                        {
                            "x": 104,
                            "y": 209
                        },
                        {
                            "x": 104,
                            "y": 227
                        },
                        {
                            "x": 86,
                            "y": 227
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
                            "x": 109,
                            "y": 208
                        },
                        {
                            "x": 126,
                            "y": 208
                        },
                        {
                            "x": 126,
                            "y": 227
                        },
                        {
                            "x": 109,
                            "y": 227
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
                "description": "峰值",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 195,
                            "y": 206
                        },
                        {
                            "x": 238,
                            "y": 206
                        },
                        {
                            "x": 238,
                            "y": 225
                        },
                        {
                            "x": 195,
                            "y": 225
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
                "description": "A",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 314,
                            "y": 208
                        },
                        {
                            "x": 323,
                            "y": 208
                        },
                        {
                            "x": 323,
                            "y": 222
                        },
                        {
                            "x": 314,
                            "y": 222
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
                "description": "f",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 329,
                            "y": 205
                        },
                        {
                            "x": 347,
                            "y": 205
                        },
                        {
                            "x": 347,
                            "y": 224
                        },
                        {
                            "x": 329,
                            "y": 224
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
                "description": "总磷",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 442,
                            "y": 203
                        },
                        {
                            "x": 484,
                            "y": 203
                        },
                        {
                            "x": 484,
                            "y": 222
                        },
                        {
                            "x": 442,
                            "y": 222
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
                            "x": 491,
                            "y": 203
                        },
                        {
                            "x": 510,
                            "y": 203
                        },
                        {
                            "x": 510,
                            "y": 222
                        },
                        {
                            "x": 491,
                            "y": 222
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
                "description": "3572",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 88,
                            "y": 277
                        },
                        {
                            "x": 130,
                            "y": 277
                        },
                        {
                            "x": 130,
                            "y": 292
                        },
                        {
                            "x": 88,
                            "y": 292
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
                "description": "2466",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 196,
                            "y": 277
                        },
                        {
                            "x": 241,
                            "y": 277
                        },
                        {
                            "x": 241,
                            "y": 292
                        },
                        {
                            "x": 196,
                            "y": 292
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
                "description": "0.",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 299,
                            "y": 274
                        },
                        {
                            "x": 327,
                            "y": 274
                        },
                        {
                            "x": 327,
                            "y": 293
                        },
                        {
                            "x": 299,
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
                "description": "1609",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 329,
                            "y": 273
                        },
                        {
                            "x": 367,
                            "y": 273
                        },
                        {
                            "x": 367,
                            "y": 293
                        },
                        {
                            "x": 329,
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
                "description": "2.",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 410,
                            "y": 273
                        },
                        {
                            "x": 455,
                            "y": 272
                        },
                        {
                            "x": 455,
                            "y": 294
                        },
                        {
                            "x": 410,
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
                "description": "025mg/L",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 457,
                            "y": 272
                        },
                        {
                            "x": 531,
                            "y": 271
                        },
                        {
                            "x": 531,
                            "y": 294
                        },
                        {
                            "x": 457,
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
                "description": "下一",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 229,
                            "y": 324
                        },
                        {
                            "x": 279,
                            "y": 324
                        },
                        {
                            "x": 279,
                            "y": 348
                        },
                        {
                            "x": 229,
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
                "description": "记录",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 281,
                            "y": 324
                        },
                        {
                            "x": 325,
                            "y": 324
                        },
                        {
                            "x": 325,
                            "y": 348
                        },
                        {
                            "x": 281,
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
                "description": "水",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 407,
                            "y": 323
                        },
                        {
                            "x": 440,
                            "y": 323
                        },
                        {
                            "x": 440,
                            "y": 349
                        },
                        {
                            "x": 407,
                            "y": 349
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
                "description": "祥",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 442,
                            "y": 323
                        },
                        {
                            "x": 467,
                            "y": 323
                        },
                        {
                            "x": 467,
                            "y": 349
                        },
                        {
                            "x": 442,
                            "y": 349
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
                            "x": 464,
                            "y": 325
                        },
                        {
                            "x": 507,
                            "y": 325
                        },
                        {
                            "x": 507,
                            "y": 347
                        },
                        {
                            "x": 464,
                            "y": 347
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
                "description": "标",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 411,
                            "y": 386
                        },
                        {
                            "x": 442,
                            "y": 386
                        },
                        {
                            "x": 442,
                            "y": 409
                        },
                        {
                            "x": 411,
                            "y": 409
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
                "description": "核",
                "score": 0,
                "confidence": 0,
                "topicality": 0,
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 444,
                            "y": 386
                        },
                        {
                            "x": 470,
                            "y": 386
                        },
                        {
                            "x": 470,
                            "y": 409
                        },
                        {
                            "x": 444,
                            "y": 409
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
                            "x": 462,
                            "y": 387
                        },
                        {
                            "x": 506,
                            "y": 386
                        },
                        {
                            "x": 506,
                            "y": 407
                        },
                        {
                            "x": 462,
                            "y": 408
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
                            "x": 557,
                            "y": 390
                        },
                        {
                            "x": 601,
                            "y": 389
                        },
                        {
                            "x": 601,
                            "y": 407
                        },
                        {
                            "x": 557,
                            "y": 408
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
                                                                "x": 5,
                                                                "y": 0
                                                            },
                                                            {
                                                                "x": 32,
                                                                "y": 0
                                                            },
                                                            {
                                                                "x": 32,
                                                                "y": 19
                                                            },
                                                            {
                                                                "x": 5,
                                                                "y": 19
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "C",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 33,
                                                                "y": 0
                                                            },
                                                            {
                                                                "x": 60,
                                                                "y": 0
                                                            },
                                                            {
                                                                "x": 60,
                                                                "y": 19
                                                            },
                                                            {
                                                                "x": 33,
                                                                "y": 19
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "G",
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
                                                                "x": 61,
                                                                "y": 0
                                                            },
                                                            {
                                                                "x": 68,
                                                                "y": 0
                                                            },
                                                            {
                                                                "x": 68,
                                                                "y": 18
                                                            },
                                                            {
                                                                "x": 61,
                                                                "y": 18
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "S",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 5,
                                                        "y": 0
                                                    },
                                                    {
                                                        "x": 68,
                                                        "y": -1
                                                    },
                                                    {
                                                        "x": 68,
                                                        "y": 18
                                                    },
                                                    {
                                                        "x": 5,
                                                        "y": 19
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
                                                "x": 5,
                                                "y": 0
                                            },
                                            {
                                                "x": 68,
                                                "y": -1
                                            },
                                            {
                                                "x": 68,
                                                "y": 18
                                            },
                                            {
                                                "x": 5,
                                                "y": 19
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
                                        "x": 5,
                                        "y": 0
                                    },
                                    {
                                        "x": 68,
                                        "y": -1
                                    },
                                    {
                                        "x": 68,
                                        "y": 18
                                    },
                                    {
                                        "x": 5,
                                        "y": 19
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
                                                                "x": 522,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 535,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 535,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 522,
                                                                "y": 100
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
                                                                "x": 536,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 540,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 540,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 536,
                                                                "y": 100
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "4",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 541,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 552,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 552,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 541,
                                                                "y": 100
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": ":",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 553,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 557,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 557,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 553,
                                                                "y": 100
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
                                                                "x": 558,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 566,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 566,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 558,
                                                                "y": 100
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "8",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 567,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 580,
                                                                "y": 89
                                                            },
                                                            {
                                                                "x": 580,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 567,
                                                                "y": 100
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": ":",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 581,
                                                                "y": 88
                                                            },
                                                            {
                                                                "x": 586,
                                                                "y": 88
                                                            },
                                                            {
                                                                "x": 586,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 581,
                                                                "y": 99
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
                                                            "type": "LINE_BREAK",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 587,
                                                                "y": 88
                                                            },
                                                            {
                                                                "x": 593,
                                                                "y": 88
                                                            },
                                                            {
                                                                "x": 593,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 587,
                                                                "y": 99
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "6",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 522,
                                                        "y": 88
                                                    },
                                                    {
                                                        "x": 593,
                                                        "y": 87
                                                    },
                                                    {
                                                        "x": 593,
                                                        "y": 99
                                                    },
                                                    {
                                                        "x": 522,
                                                        "y": 100
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
                                                "x": 522,
                                                "y": 88
                                            },
                                            {
                                                "x": 593,
                                                "y": 87
                                            },
                                            {
                                                "x": 593,
                                                "y": 99
                                            },
                                            {
                                                "x": 522,
                                                "y": 100
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
                                        "x": 522,
                                        "y": 88
                                    },
                                    {
                                        "x": 593,
                                        "y": 87
                                    },
                                    {
                                        "x": 593,
                                        "y": 99
                                    },
                                    {
                                        "x": 522,
                                        "y": 100
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
                                                                "x": 74,
                                                                "y": 101
                                                            },
                                                            {
                                                                "x": 113,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 114,
                                                                "y": 127
                                                            },
                                                            {
                                                                "x": 75,
                                                                "y": 128
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
                                                                "x": 114,
                                                                "y": 100
                                                            },
                                                            {
                                                                "x": 134,
                                                                "y": 99
                                                            },
                                                            {
                                                                "x": 135,
                                                                "y": 126
                                                            },
                                                            {
                                                                "x": 115,
                                                                "y": 127
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
                                                        "x": 74,
                                                        "y": 101
                                                    },
                                                    {
                                                        "x": 134,
                                                        "y": 99
                                                    },
                                                    {
                                                        "x": 135,
                                                        "y": 126
                                                    },
                                                    {
                                                        "x": 75,
                                                        "y": 128
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
                                                                "x": 140,
                                                                "y": 103
                                                            },
                                                            {
                                                                "x": 177,
                                                                "y": 102
                                                            },
                                                            {
                                                                "x": 178,
                                                                "y": 125
                                                            },
                                                            {
                                                                "x": 141,
                                                                "y": 126
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
                                                                "x": 178,
                                                                "y": 102
                                                            },
                                                            {
                                                                "x": 190,
                                                                "y": 102
                                                            },
                                                            {
                                                                "x": 191,
                                                                "y": 125
                                                            },
                                                            {
                                                                "x": 179,
                                                                "y": 125
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
                                                        "x": 140,
                                                        "y": 103
                                                    },
                                                    {
                                                        "x": 190,
                                                        "y": 101
                                                    },
                                                    {
                                                        "x": 191,
                                                        "y": 124
                                                    },
                                                    {
                                                        "x": 141,
                                                        "y": 126
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
                                                "x": 74,
                                                "y": 101
                                            },
                                            {
                                                "x": 190,
                                                "y": 97
                                            },
                                            {
                                                "x": 191,
                                                "y": 124
                                            },
                                            {
                                                "x": 75,
                                                "y": 128
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
                                        "x": 74,
                                        "y": 101
                                    },
                                    {
                                        "x": 190,
                                        "y": 97
                                    },
                                    {
                                        "x": 191,
                                        "y": 124
                                    },
                                    {
                                        "x": 75,
                                        "y": 128
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
                                                                "x": 505,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 522,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 522,
                                                                "y": 123
                                                            },
                                                            {
                                                                "x": 505,
                                                                "y": 123
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
                                                                "x": 523,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 530,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 530,
                                                                "y": 123
                                                            },
                                                            {
                                                                "x": 523,
                                                                "y": 123
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
                                                                "x": 531,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 536,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 536,
                                                                "y": 123
                                                            },
                                                            {
                                                                "x": 531,
                                                                "y": 123
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
                                                                "x": 537,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 547,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 547,
                                                                "y": 123
                                                            },
                                                            {
                                                                "x": 537,
                                                                "y": 123
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
                                                                "x": 548,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 559,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 559,
                                                                "y": 123
                                                            },
                                                            {
                                                                "x": 548,
                                                                "y": 123
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "-",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 560,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 567,
                                                                "y": 110
                                                            },
                                                            {
                                                                "x": 567,
                                                                "y": 123
                                                            },
                                                            {
                                                                "x": 560,
                                                                "y": 123
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
                                                                "x": 568,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 576,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 576,
                                                                "y": 122
                                                            },
                                                            {
                                                                "x": 568,
                                                                "y": 122
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
                                                                "x": 577,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 590,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 590,
                                                                "y": 122
                                                            },
                                                            {
                                                                "x": 577,
                                                                "y": 122
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "-",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 591,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 596,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 596,
                                                                "y": 122
                                                            },
                                                            {
                                                                "x": 591,
                                                                "y": 122
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "3",
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
                                                                "x": 597,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 603,
                                                                "y": 109
                                                            },
                                                            {
                                                                "x": 603,
                                                                "y": 122
                                                            },
                                                            {
                                                                "x": 597,
                                                                "y": 122
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
                                                        "x": 505,
                                                        "y": 110
                                                    },
                                                    {
                                                        "x": 603,
                                                        "y": 109
                                                    },
                                                    {
                                                        "x": 603,
                                                        "y": 122
                                                    },
                                                    {
                                                        "x": 505,
                                                        "y": 123
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
                                                "x": 505,
                                                "y": 110
                                            },
                                            {
                                                "x": 603,
                                                "y": 109
                                            },
                                            {
                                                "x": 603,
                                                "y": 122
                                            },
                                            {
                                                "x": 505,
                                                "y": 123
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
                                        "x": 505,
                                        "y": 110
                                    },
                                    {
                                        "x": 603,
                                        "y": 109
                                    },
                                    {
                                        "x": 603,
                                        "y": 122
                                    },
                                    {
                                        "x": 505,
                                        "y": 123
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
                                                                "x": 141,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 151,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 151,
                                                                "y": 177
                                                            },
                                                            {
                                                                "x": 141,
                                                                "y": 177
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
                                                                "x": 153,
                                                                "y": 162
                                                            },
                                                            {
                                                                "x": 163,
                                                                "y": 162
                                                            },
                                                            {
                                                                "x": 163,
                                                                "y": 177
                                                            },
                                                            {
                                                                "x": 153,
                                                                "y": 177
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
                                                                "x": 165,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 174,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 174,
                                                                "y": 177
                                                            },
                                                            {
                                                                "x": 165,
                                                                "y": 177
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
                                                                "x": 180,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 183,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 183,
                                                                "y": 175
                                                            },
                                                            {
                                                                "x": 180,
                                                                "y": 175
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
                                                        "x": 141,
                                                        "y": 161
                                                    },
                                                    {
                                                        "x": 183,
                                                        "y": 160
                                                    },
                                                    {
                                                        "x": 183,
                                                        "y": 176
                                                    },
                                                    {
                                                        "x": 141,
                                                        "y": 177
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
                                                                "x": 191,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 208,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 208,
                                                                "y": 176
                                                            },
                                                            {
                                                                "x": 191,
                                                                "y": 176
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
                                                        "x": 191,
                                                        "y": 157
                                                    },
                                                    {
                                                        "x": 208,
                                                        "y": 157
                                                    },
                                                    {
                                                        "x": 208,
                                                        "y": 176
                                                    },
                                                    {
                                                        "x": 191,
                                                        "y": 176
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
                                                                "x": 231,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 233,
                                                                "y": 161
                                                            },
                                                            {
                                                                "x": 233,
                                                                "y": 175
                                                            },
                                                            {
                                                                "x": 231,
                                                                "y": 175
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
                                                                "x": 242,
                                                                "y": 160
                                                            },
                                                            {
                                                                "x": 245,
                                                                "y": 160
                                                            },
                                                            {
                                                                "x": 245,
                                                                "y": 174
                                                            },
                                                            {
                                                                "x": 242,
                                                                "y": 174
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
                                                        "x": 231,
                                                        "y": 160
                                                    },
                                                    {
                                                        "x": 245,
                                                        "y": 160
                                                    },
                                                    {
                                                        "x": 245,
                                                        "y": 175
                                                    },
                                                    {
                                                        "x": 231,
                                                        "y": 175
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
                                                                "x": 255,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 269,
                                                                "y": 157
                                                            },
                                                            {
                                                                "x": 269,
                                                                "y": 175
                                                            },
                                                            {
                                                                "x": 255,
                                                                "y": 175
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
                                                        "x": 255,
                                                        "y": 157
                                                    },
                                                    {
                                                        "x": 269,
                                                        "y": 157
                                                    },
                                                    {
                                                        "x": 269,
                                                        "y": 175
                                                    },
                                                    {
                                                        "x": 255,
                                                        "y": 175
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
                                                                "x": 289,
                                                                "y": 155
                                                            },
                                                            {
                                                                "x": 297,
                                                                "y": 155
                                                            },
                                                            {
                                                                "x": 297,
                                                                "y": 177
                                                            },
                                                            {
                                                                "x": 289,
                                                                "y": 177
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
                                                                "x": 298,
                                                                "y": 154
                                                            },
                                                            {
                                                                "x": 313,
                                                                "y": 154
                                                            },
                                                            {
                                                                "x": 313,
                                                                "y": 176
                                                            },
                                                            {
                                                                "x": 298,
                                                                "y": 176
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
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
                                                        "x": 289,
                                                        "y": 154
                                                    },
                                                    {
                                                        "x": 313,
                                                        "y": 154
                                                    },
                                                    {
                                                        "x": 313,
                                                        "y": 177
                                                    },
                                                    {
                                                        "x": 289,
                                                        "y": 177
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
                                                                "x": 315,
                                                                "y": 154
                                                            },
                                                            {
                                                                "x": 340,
                                                                "y": 154
                                                            },
                                                            {
                                                                "x": 340,
                                                                "y": 176
                                                            },
                                                            {
                                                                "x": 315,
                                                                "y": 176
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "日",
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
                                                        "x": 315,
                                                        "y": 154
                                                    },
                                                    {
                                                        "x": 340,
                                                        "y": 154
                                                    },
                                                    {
                                                        "x": 340,
                                                        "y": 176
                                                    },
                                                    {
                                                        "x": 315,
                                                        "y": 176
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
                                                                "x": 348,
                                                                "y": 159
                                                            },
                                                            {
                                                                "x": 351,
                                                                "y": 159
                                                            },
                                                            {
                                                                "x": 351,
                                                                "y": 172
                                                            },
                                                            {
                                                                "x": 348,
                                                                "y": 172
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
                                                                "x": 361,
                                                                "y": 159
                                                            },
                                                            {
                                                                "x": 363,
                                                                "y": 159
                                                            },
                                                            {
                                                                "x": 363,
                                                                "y": 172
                                                            },
                                                            {
                                                                "x": 361,
                                                                "y": 172
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
                                                        "x": 348,
                                                        "y": 159
                                                    },
                                                    {
                                                        "x": 363,
                                                        "y": 159
                                                    },
                                                    {
                                                        "x": 363,
                                                        "y": 172
                                                    },
                                                    {
                                                        "x": 348,
                                                        "y": 172
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
                                                                "x": 371,
                                                                "y": 155
                                                            },
                                                            {
                                                                "x": 390,
                                                                "y": 155
                                                            },
                                                            {
                                                                "x": 390,
                                                                "y": 173
                                                            },
                                                            {
                                                                "x": 371,
                                                                "y": 173
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "吋",
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
                                                        "x": 371,
                                                        "y": 155
                                                    },
                                                    {
                                                        "x": 390,
                                                        "y": 155
                                                    },
                                                    {
                                                        "x": 390,
                                                        "y": 173
                                                    },
                                                    {
                                                        "x": 371,
                                                        "y": 173
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
                                                                "x": 400,
                                                                "y": 153
                                                            },
                                                            {
                                                                "x": 412,
                                                                "y": 153
                                                            },
                                                            {
                                                                "x": 412,
                                                                "y": 175
                                                            },
                                                            {
                                                                "x": 400,
                                                                "y": 175
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
                                                                "x": 413,
                                                                "y": 153
                                                            },
                                                            {
                                                                "x": 432,
                                                                "y": 153
                                                            },
                                                            {
                                                                "x": 432,
                                                                "y": 175
                                                            },
                                                            {
                                                                "x": 413,
                                                                "y": 175
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "6",
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
                                                        "x": 400,
                                                        "y": 153
                                                    },
                                                    {
                                                        "x": 432,
                                                        "y": 153
                                                    },
                                                    {
                                                        "x": 432,
                                                        "y": 175
                                                    },
                                                    {
                                                        "x": 400,
                                                        "y": 175
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
                                                                "x": 434,
                                                                "y": 152
                                                            },
                                                            {
                                                                "x": 447,
                                                                "y": 152
                                                            },
                                                            {
                                                                "x": 447,
                                                                "y": 174
                                                            },
                                                            {
                                                                "x": 434,
                                                                "y": 174
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "分",
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
                                                        "x": 434,
                                                        "y": 152
                                                    },
                                                    {
                                                        "x": 447,
                                                        "y": 152
                                                    },
                                                    {
                                                        "x": 447,
                                                        "y": 174
                                                    },
                                                    {
                                                        "x": 434,
                                                        "y": 174
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
                                                "x": 141,
                                                "y": 156
                                            },
                                            {
                                                "x": 447,
                                                "y": 151
                                            },
                                            {
                                                "x": 447,
                                                "y": 174
                                            },
                                            {
                                                "x": 141,
                                                "y": 179
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
                                        "x": 141,
                                        "y": 156
                                    },
                                    {
                                        "x": 447,
                                        "y": 151
                                    },
                                    {
                                        "x": 447,
                                        "y": 174
                                    },
                                    {
                                        "x": 141,
                                        "y": 179
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
                                                                "x": 86,
                                                                "y": 209
                                                            },
                                                            {
                                                                "x": 104,
                                                                "y": 209
                                                            },
                                                            {
                                                                "x": 104,
                                                                "y": 227
                                                            },
                                                            {
                                                                "x": 86,
                                                                "y": 227
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "基",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 86,
                                                        "y": 209
                                                    },
                                                    {
                                                        "x": 104,
                                                        "y": 209
                                                    },
                                                    {
                                                        "x": 104,
                                                        "y": 227
                                                    },
                                                    {
                                                        "x": 86,
                                                        "y": 227
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
                                                                "x": 109,
                                                                "y": 208
                                                            },
                                                            {
                                                                "x": 126,
                                                                "y": 208
                                                            },
                                                            {
                                                                "x": 126,
                                                                "y": 227
                                                            },
                                                            {
                                                                "x": 109,
                                                                "y": 227
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "值",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 109,
                                                        "y": 208
                                                    },
                                                    {
                                                        "x": 126,
                                                        "y": 208
                                                    },
                                                    {
                                                        "x": 126,
                                                        "y": 227
                                                    },
                                                    {
                                                        "x": 109,
                                                        "y": 227
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
                                                "x": 86,
                                                "y": 208
                                            },
                                            {
                                                "x": 126,
                                                "y": 208
                                            },
                                            {
                                                "x": 126,
                                                "y": 227
                                            },
                                            {
                                                "x": 86,
                                                "y": 227
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
                                        "x": 86,
                                        "y": 208
                                    },
                                    {
                                        "x": 126,
                                        "y": 208
                                    },
                                    {
                                        "x": 126,
                                        "y": 227
                                    },
                                    {
                                        "x": 86,
                                        "y": 227
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
                                                                "x": 195,
                                                                "y": 206
                                                            },
                                                            {
                                                                "x": 223,
                                                                "y": 206
                                                            },
                                                            {
                                                                "x": 223,
                                                                "y": 225
                                                            },
                                                            {
                                                                "x": 195,
                                                                "y": 225
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "峰",
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
                                                                "x": 224,
                                                                "y": 206
                                                            },
                                                            {
                                                                "x": 238,
                                                                "y": 206
                                                            },
                                                            {
                                                                "x": 238,
                                                                "y": 225
                                                            },
                                                            {
                                                                "x": 224,
                                                                "y": 225
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "值",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 195,
                                                        "y": 206
                                                    },
                                                    {
                                                        "x": 238,
                                                        "y": 206
                                                    },
                                                    {
                                                        "x": 238,
                                                        "y": 225
                                                    },
                                                    {
                                                        "x": 195,
                                                        "y": 225
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
                                                "x": 195,
                                                "y": 206
                                            },
                                            {
                                                "x": 238,
                                                "y": 206
                                            },
                                            {
                                                "x": 238,
                                                "y": 225
                                            },
                                            {
                                                "x": 195,
                                                "y": 225
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
                                        "x": 195,
                                        "y": 206
                                    },
                                    {
                                        "x": 238,
                                        "y": 206
                                    },
                                    {
                                        "x": 238,
                                        "y": 225
                                    },
                                    {
                                        "x": 195,
                                        "y": 225
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
                                                        "detectedLanguages": [],
                                                        "detectedBreak": {
                                                            "type": "SPACE",
                                                            "isPrefix": false
                                                        }
                                                    },
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 314,
                                                                "y": 208
                                                            },
                                                            {
                                                                "x": 323,
                                                                "y": 208
                                                            },
                                                            {
                                                                "x": 323,
                                                                "y": 222
                                                            },
                                                            {
                                                                "x": 314,
                                                                "y": 222
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "A",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 314,
                                                        "y": 208
                                                    },
                                                    {
                                                        "x": 323,
                                                        "y": 208
                                                    },
                                                    {
                                                        "x": 323,
                                                        "y": 222
                                                    },
                                                    {
                                                        "x": 314,
                                                        "y": 222
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
                                                                "x": 329,
                                                                "y": 205
                                                            },
                                                            {
                                                                "x": 347,
                                                                "y": 205
                                                            },
                                                            {
                                                                "x": 347,
                                                                "y": 224
                                                            },
                                                            {
                                                                "x": 329,
                                                                "y": 224
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "f",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 329,
                                                        "y": 205
                                                    },
                                                    {
                                                        "x": 347,
                                                        "y": 205
                                                    },
                                                    {
                                                        "x": 347,
                                                        "y": 224
                                                    },
                                                    {
                                                        "x": 329,
                                                        "y": 224
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
                                                "x": 314,
                                                "y": 205
                                            },
                                            {
                                                "x": 347,
                                                "y": 204
                                            },
                                            {
                                                "x": 347,
                                                "y": 223
                                            },
                                            {
                                                "x": 314,
                                                "y": 224
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
                                        "x": 314,
                                        "y": 205
                                    },
                                    {
                                        "x": 347,
                                        "y": 204
                                    },
                                    {
                                        "x": 347,
                                        "y": 223
                                    },
                                    {
                                        "x": 314,
                                        "y": 224
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
                                                                "x": 442,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 464,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 464,
                                                                "y": 222
                                                            },
                                                            {
                                                                "x": 442,
                                                                "y": 222
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "总",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 465,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 484,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 484,
                                                                "y": 222
                                                            },
                                                            {
                                                                "x": 465,
                                                                "y": 222
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "磷",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 442,
                                                        "y": 203
                                                    },
                                                    {
                                                        "x": 484,
                                                        "y": 203
                                                    },
                                                    {
                                                        "x": 484,
                                                        "y": 222
                                                    },
                                                    {
                                                        "x": 442,
                                                        "y": 222
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
                                                                "x": 491,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 510,
                                                                "y": 203
                                                            },
                                                            {
                                                                "x": 510,
                                                                "y": 222
                                                            },
                                                            {
                                                                "x": 491,
                                                                "y": 222
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "值",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 491,
                                                        "y": 203
                                                    },
                                                    {
                                                        "x": 510,
                                                        "y": 203
                                                    },
                                                    {
                                                        "x": 510,
                                                        "y": 222
                                                    },
                                                    {
                                                        "x": 491,
                                                        "y": 222
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
                                                "x": 442,
                                                "y": 203
                                            },
                                            {
                                                "x": 510,
                                                "y": 203
                                            },
                                            {
                                                "x": 510,
                                                "y": 222
                                            },
                                            {
                                                "x": 442,
                                                "y": 222
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
                                        "x": 442,
                                        "y": 203
                                    },
                                    {
                                        "x": 510,
                                        "y": 203
                                    },
                                    {
                                        "x": 510,
                                        "y": 222
                                    },
                                    {
                                        "x": 442,
                                        "y": 222
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
                                                                "x": 88,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 97,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 97,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 88,
                                                                "y": 292
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
                                                                "x": 100,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 108,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 108,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 100,
                                                                "y": 292
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
                                                                "x": 111,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 118,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 118,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 111,
                                                                "y": 292
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
                                                                "x": 122,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 130,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 130,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 122,
                                                                "y": 292
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
                                                        "x": 88,
                                                        "y": 277
                                                    },
                                                    {
                                                        "x": 130,
                                                        "y": 277
                                                    },
                                                    {
                                                        "x": 130,
                                                        "y": 292
                                                    },
                                                    {
                                                        "x": 88,
                                                        "y": 292
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
                                                "x": 88,
                                                "y": 277
                                            },
                                            {
                                                "x": 130,
                                                "y": 277
                                            },
                                            {
                                                "x": 130,
                                                "y": 292
                                            },
                                            {
                                                "x": 88,
                                                "y": 292
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
                                        "x": 88,
                                        "y": 277
                                    },
                                    {
                                        "x": 130,
                                        "y": 277
                                    },
                                    {
                                        "x": 130,
                                        "y": 292
                                    },
                                    {
                                        "x": 88,
                                        "y": 292
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
                                                                "x": 196,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 205,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 205,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 196,
                                                                "y": 292
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
                                                                "x": 209,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 217,
                                                                "y": 277
                                                            },
                                                            {
                                                                "x": 217,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 209,
                                                                "y": 292
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "4",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 220,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 229,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 229,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 220,
                                                                "y": 292
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "6",
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
                                                                "x": 232,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 241,
                                                                "y": 278
                                                            },
                                                            {
                                                                "x": 241,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 232,
                                                                "y": 292
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "6",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 196,
                                                        "y": 277
                                                    },
                                                    {
                                                        "x": 241,
                                                        "y": 277
                                                    },
                                                    {
                                                        "x": 241,
                                                        "y": 292
                                                    },
                                                    {
                                                        "x": 196,
                                                        "y": 292
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
                                                "x": 196,
                                                "y": 277
                                            },
                                            {
                                                "x": 241,
                                                "y": 277
                                            },
                                            {
                                                "x": 241,
                                                "y": 292
                                            },
                                            {
                                                "x": 196,
                                                "y": 292
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
                                        "x": 196,
                                        "y": 277
                                    },
                                    {
                                        "x": 241,
                                        "y": 277
                                    },
                                    {
                                        "x": 241,
                                        "y": 292
                                    },
                                    {
                                        "x": 196,
                                        "y": 292
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
                                                                "x": 299,
                                                                "y": 274
                                                            },
                                                            {
                                                                "x": 324,
                                                                "y": 274
                                                            },
                                                            {
                                                                "x": 324,
                                                                "y": 293
                                                            },
                                                            {
                                                                "x": 299,
                                                                "y": 293
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
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
                                                                "x": 325,
                                                                "y": 274
                                                            },
                                                            {
                                                                "x": 327,
                                                                "y": 274
                                                            },
                                                            {
                                                                "x": 327,
                                                                "y": 293
                                                            },
                                                            {
                                                                "x": 325,
                                                                "y": 293
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
                                                        "x": 299,
                                                        "y": 274
                                                    },
                                                    {
                                                        "x": 327,
                                                        "y": 274
                                                    },
                                                    {
                                                        "x": 327,
                                                        "y": 293
                                                    },
                                                    {
                                                        "x": 299,
                                                        "y": 293
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
                                                                "x": 329,
                                                                "y": 274
                                                            },
                                                            {
                                                                "x": 340,
                                                                "y": 274
                                                            },
                                                            {
                                                                "x": 340,
                                                                "y": 293
                                                            },
                                                            {
                                                                "x": 329,
                                                                "y": 293
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
                                                                "x": 341,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 347,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 347,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 341,
                                                                "y": 292
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "6",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 348,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 360,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 360,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 348,
                                                                "y": 292
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "0",
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
                                                                "x": 361,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 367,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 367,
                                                                "y": 292
                                                            },
                                                            {
                                                                "x": 361,
                                                                "y": 292
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "9",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 329,
                                                        "y": 273
                                                    },
                                                    {
                                                        "x": 367,
                                                        "y": 273
                                                    },
                                                    {
                                                        "x": 367,
                                                        "y": 293
                                                    },
                                                    {
                                                        "x": 329,
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
                                                "x": 299,
                                                "y": 273
                                            },
                                            {
                                                "x": 367,
                                                "y": 272
                                            },
                                            {
                                                "x": 367,
                                                "y": 292
                                            },
                                            {
                                                "x": 299,
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
                                        "x": 299,
                                        "y": 273
                                    },
                                    {
                                        "x": 367,
                                        "y": 272
                                    },
                                    {
                                        "x": 367,
                                        "y": 292
                                    },
                                    {
                                        "x": 299,
                                        "y": 293
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
                                                                "x": 410,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 432,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 432,
                                                                "y": 295
                                                            },
                                                            {
                                                                "x": 410,
                                                                "y": 295
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "2",
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
                                                                "x": 433,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 455,
                                                                "y": 273
                                                            },
                                                            {
                                                                "x": 455,
                                                                "y": 295
                                                            },
                                                            {
                                                                "x": 433,
                                                                "y": 295
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
                                                        "x": 410,
                                                        "y": 273
                                                    },
                                                    {
                                                        "x": 455,
                                                        "y": 272
                                                    },
                                                    {
                                                        "x": 455,
                                                        "y": 294
                                                    },
                                                    {
                                                        "x": 410,
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
                                                                "x": 457,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 466,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 466,
                                                                "y": 294
                                                            },
                                                            {
                                                                "x": 457,
                                                                "y": 294
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
                                                                "x": 467,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 474,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 474,
                                                                "y": 294
                                                            },
                                                            {
                                                                "x": 467,
                                                                "y": 294
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
                                                                "x": 475,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 482,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 482,
                                                                "y": 294
                                                            },
                                                            {
                                                                "x": 475,
                                                                "y": 294
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
                                                                "x": 483,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 497,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 497,
                                                                "y": 294
                                                            },
                                                            {
                                                                "x": 483,
                                                                "y": 294
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "m",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 498,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 508,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 508,
                                                                "y": 294
                                                            },
                                                            {
                                                                "x": 498,
                                                                "y": 294
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "g",
                                                    "confidence": 0
                                                },
                                                {
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 509,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 520,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 520,
                                                                "y": 294
                                                            },
                                                            {
                                                                "x": 509,
                                                                "y": 294
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "/",
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
                                                                "x": 521,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 531,
                                                                "y": 272
                                                            },
                                                            {
                                                                "x": 531,
                                                                "y": 294
                                                            },
                                                            {
                                                                "x": 521,
                                                                "y": 294
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "L",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 457,
                                                        "y": 272
                                                    },
                                                    {
                                                        "x": 531,
                                                        "y": 271
                                                    },
                                                    {
                                                        "x": 531,
                                                        "y": 294
                                                    },
                                                    {
                                                        "x": 457,
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
                                                "x": 410,
                                                "y": 273
                                            },
                                            {
                                                "x": 531,
                                                "y": 271
                                            },
                                            {
                                                "x": 531,
                                                "y": 294
                                            },
                                            {
                                                "x": 410,
                                                "y": 296
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
                                        "x": 410,
                                        "y": 273
                                    },
                                    {
                                        "x": 531,
                                        "y": 271
                                    },
                                    {
                                        "x": 531,
                                        "y": 294
                                    },
                                    {
                                        "x": 410,
                                        "y": 296
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
                                                                "x": 229,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 259,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 259,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 229,
                                                                "y": 348
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
                                                                "x": 260,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 279,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 279,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 260,
                                                                "y": 348
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
                                                        "x": 229,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 279,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 279,
                                                        "y": 348
                                                    },
                                                    {
                                                        "x": 229,
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
                                                    "property": null,
                                                    "boundingBox": {
                                                        "vertices": [
                                                            {
                                                                "x": 281,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 304,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 304,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 281,
                                                                "y": 348
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
                                                                "x": 305,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 325,
                                                                "y": 324
                                                            },
                                                            {
                                                                "x": 325,
                                                                "y": 348
                                                            },
                                                            {
                                                                "x": 305,
                                                                "y": 348
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
                                                        "x": 281,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 325,
                                                        "y": 324
                                                    },
                                                    {
                                                        "x": 325,
                                                        "y": 348
                                                    },
                                                    {
                                                        "x": 281,
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
                                                "x": 229,
                                                "y": 324
                                            },
                                            {
                                                "x": 325,
                                                "y": 324
                                            },
                                            {
                                                "x": 325,
                                                "y": 348
                                            },
                                            {
                                                "x": 229,
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
                                        "x": 229,
                                        "y": 324
                                    },
                                    {
                                        "x": 325,
                                        "y": 324
                                    },
                                    {
                                        "x": 325,
                                        "y": 348
                                    },
                                    {
                                        "x": 229,
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
                                                                "x": 407,
                                                                "y": 323
                                                            },
                                                            {
                                                                "x": 440,
                                                                "y": 323
                                                            },
                                                            {
                                                                "x": 440,
                                                                "y": 349
                                                            },
                                                            {
                                                                "x": 407,
                                                                "y": 349
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "水",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 407,
                                                        "y": 323
                                                    },
                                                    {
                                                        "x": 440,
                                                        "y": 323
                                                    },
                                                    {
                                                        "x": 440,
                                                        "y": 349
                                                    },
                                                    {
                                                        "x": 407,
                                                        "y": 349
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
                                                                "x": 442,
                                                                "y": 323
                                                            },
                                                            {
                                                                "x": 467,
                                                                "y": 323
                                                            },
                                                            {
                                                                "x": 467,
                                                                "y": 349
                                                            },
                                                            {
                                                                "x": 442,
                                                                "y": 349
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "祥",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 442,
                                                        "y": 323
                                                    },
                                                    {
                                                        "x": 467,
                                                        "y": 323
                                                    },
                                                    {
                                                        "x": 467,
                                                        "y": 349
                                                    },
                                                    {
                                                        "x": 442,
                                                        "y": 349
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
                                                                "x": 464,
                                                                "y": 326
                                                            },
                                                            {
                                                                "x": 481,
                                                                "y": 326
                                                            },
                                                            {
                                                                "x": 481,
                                                                "y": 344
                                                            },
                                                            {
                                                                "x": 464,
                                                                "y": 344
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "历",
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
                                                                "x": 488,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 507,
                                                                "y": 325
                                                            },
                                                            {
                                                                "x": 507,
                                                                "y": 347
                                                            },
                                                            {
                                                                "x": 488,
                                                                "y": 347
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
                                                        "x": 464,
                                                        "y": 325
                                                    },
                                                    {
                                                        "x": 507,
                                                        "y": 325
                                                    },
                                                    {
                                                        "x": 507,
                                                        "y": 347
                                                    },
                                                    {
                                                        "x": 464,
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
                                                "x": 407,
                                                "y": 323
                                            },
                                            {
                                                "x": 507,
                                                "y": 323
                                            },
                                            {
                                                "x": 507,
                                                "y": 349
                                            },
                                            {
                                                "x": 407,
                                                "y": 349
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
                                        "x": 407,
                                        "y": 323
                                    },
                                    {
                                        "x": 507,
                                        "y": 323
                                    },
                                    {
                                        "x": 507,
                                        "y": 349
                                    },
                                    {
                                        "x": 407,
                                        "y": 349
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
                                                                "x": 411,
                                                                "y": 386
                                                            },
                                                            {
                                                                "x": 442,
                                                                "y": 386
                                                            },
                                                            {
                                                                "x": 442,
                                                                "y": 409
                                                            },
                                                            {
                                                                "x": 411,
                                                                "y": 409
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "标",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 411,
                                                        "y": 386
                                                    },
                                                    {
                                                        "x": 442,
                                                        "y": 386
                                                    },
                                                    {
                                                        "x": 442,
                                                        "y": 409
                                                    },
                                                    {
                                                        "x": 411,
                                                        "y": 409
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
                                                                "y": 386
                                                            },
                                                            {
                                                                "x": 470,
                                                                "y": 386
                                                            },
                                                            {
                                                                "x": 470,
                                                                "y": 409
                                                            },
                                                            {
                                                                "x": 444,
                                                                "y": 409
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "核",
                                                    "confidence": 0
                                                }
                                            ],
                                            "property": null,
                                            "boundingBox": {
                                                "vertices": [
                                                    {
                                                        "x": 444,
                                                        "y": 386
                                                    },
                                                    {
                                                        "x": 470,
                                                        "y": 386
                                                    },
                                                    {
                                                        "x": 470,
                                                        "y": 409
                                                    },
                                                    {
                                                        "x": 444,
                                                        "y": 409
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
                                                                "x": 462,
                                                                "y": 387
                                                            },
                                                            {
                                                                "x": 482,
                                                                "y": 387
                                                            },
                                                            {
                                                                "x": 482,
                                                                "y": 408
                                                            },
                                                            {
                                                                "x": 462,
                                                                "y": 408
                                                            }
                                                        ],
                                                        "normalizedVertices": []
                                                    },
                                                    "text": "历",
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
                                                                "x": 488,
                                                                "y": 388
                                                            },
                                                            {
                                                                "x": 506,
                                                                "y": 388
                                                            },
                                                            {
                                                                "x": 506,
                                                                "y": 406
                                                            },
                                                            {
                                                                "x": 488,
                                                                "y": 406
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
                                                        "x": 462,
                                                        "y": 387
                                                    },
                                                    {
                                                        "x": 506,
                                                        "y": 386
                                                    },
                                                    {
                                                        "x": 506,
                                                        "y": 407
                                                    },
                                                    {
                                                        "x": 462,
                                                        "y": 408
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
                                                "x": 411,
                                                "y": 386
                                            },
                                            {
                                                "x": 506,
                                                "y": 385
                                            },
                                            {
                                                "x": 506,
                                                "y": 408
                                            },
                                            {
                                                "x": 411,
                                                "y": 409
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
                                        "x": 411,
                                        "y": 386
                                    },
                                    {
                                        "x": 506,
                                        "y": 385
                                    },
                                    {
                                        "x": 506,
                                        "y": 408
                                    },
                                    {
                                        "x": 411,
                                        "y": 409
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
                                                                "x": 557,
                                                                "y": 390
                                                            },
                                                            {
                                                                "x": 577,
                                                                "y": 390
                                                            },
                                                            {
                                                                "x": 577,
                                                                "y": 408
                                                            },
                                                            {
                                                                "x": 557,
                                                                "y": 408
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
                                                                "x": 581,
                                                                "y": 390
                                                            },
                                                            {
                                                                "x": 601,
                                                                "y": 390
                                                            },
                                                            {
                                                                "x": 601,
                                                                "y": 408
                                                            },
                                                            {
                                                                "x": 581,
                                                                "y": 408
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
                                                        "x": 557,
                                                        "y": 390
                                                    },
                                                    {
                                                        "x": 601,
                                                        "y": 389
                                                    },
                                                    {
                                                        "x": 601,
                                                        "y": 407
                                                    },
                                                    {
                                                        "x": 557,
                                                        "y": 408
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
                                                "x": 557,
                                                "y": 390
                                            },
                                            {
                                                "x": 601,
                                                "y": 389
                                            },
                                            {
                                                "x": 601,
                                                "y": 407
                                            },
                                            {
                                                "x": 557,
                                                "y": 408
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
                                        "x": 557,
                                        "y": 390
                                    },
                                    {
                                        "x": 601,
                                        "y": 389
                                    },
                                    {
                                        "x": 601,
                                        "y": 407
                                    },
                                    {
                                        "x": 557,
                                        "y": 408
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
                                "confidence": 0.1899999976158142
                            }
                        ],
                        "detectedBreak": null
                    },
                    "width": 640,
                    "height": 480,
                    "confidence": 0
                }
            ],
            "text": "CGS\n14:38:46\n历史数据\n2021-11-30\n2021年11月 30日 11吋 26分\n基值\n峰值\nA f\n总磷值\n3572\n2466\n0. 1609\n2. 025mg/L\n下一记录\n水祥历史\n标核历史\n返回\n"
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
        obj.fullTextAnnotation.pages[0].blocks[12].boundingBox.vertices

    line(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y)
    line(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y)
    line(vertices[2].x, vertices[2].y, vertices[3].x, vertices[3].y)
    // line(vertices[3].x, vertices[3].y,vertices[0].x, vertices[0].y)

    point(130, 83);
    point(175, 82);
    point(175, 101);
    point(130, 102);
}