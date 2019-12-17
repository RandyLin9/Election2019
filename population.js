var populationOptions = {
                    visualMap: {
                        min: 100,
                        max: 800,
                        text:['High','Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue','yellow', 'orangered']
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} - {c}千人'
                    },
                    series: [{
                        name: 'District Council',
                        type: 'map',
                        mapType: 'HK',
                        data:[
                            {name: '中西區', value: 245.6},
                            {name: '灣仔', value: 182.0},
                            {name: '東區', value: 551.3},
                            {name: '南區', value: 273.1},
                            {name: '油尖旺', value: 335.5},
                            {name: '深水埗', value: 403.5},
                            {name: '九龍城', value: 420.3},
                            {name: '黃大仙', value: 423.1},
                            {name: '觀塘', value: 682.8},
                            {name: '葵青', value: 514.8},
                            {name: '荃灣', value: 314.7},
                            {name: '屯門', value: 502.7},
                            {name: '元朗', value: 641.0},
                            {name: '北區', value: 318.4},
                            {name: '大埔', value: 310.5},
                            {name: '沙田', value: 685.5},
                            {name: '西貢', value: 471.9},
                            {name: '離島', value: 173.2}
                        ],
                        nameMap: {
                            'Central and Western': '中西區',
                            'Eastern': '東區',
                            'Islands': '離島',
                            'Kowloon City': '九龍城',
                            'Kwai Tsing': '葵青',
                            'Kwun Tong': '觀塘',
                            'North': '北區',
                            'Sai Kung': '西貢',
                            'Sha Tin': '沙田',
                            'Sham Shui Po': '深水埗',
                            'Southern': '南區',
                            'Tai Po': '大埔',
                            'Tsuen Wan': '荃灣',
                            'Tuen Mun': '屯門',
                            'Wan Chai': '灣仔',
                            'Wong Tai Sin': '黃大仙',
                            'Yau Tsim Mong': '油尖旺',
                            'Yuen Long': '元朗'
                        }
                    }]


                };