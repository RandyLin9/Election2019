var tearGasOptions = {
                    visualMap: {
                        min: 20,
                        max: 500,
                        text:['High','Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue','red']
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} - {c}次'
                    },
                    series: [{
                        name: 'District Council',
                        type: 'map',
                        mapType: 'HK',
                        data:[
                            {name: '中西區', value: 20},
                            {name: '灣仔', value: 50},
                            {name: '東區', value: 10},
                            {name: '南區', value: 12},
                            {name: '油尖旺', value: 500},
                            {name: '深水埗', value: 300},
                            {name: '九龍城', value: 100},
                            {name: '黃大仙', value: 300},
                            {name: '觀塘', value: 50},
                            {name: '葵青', value: 120},
                            {name: '荃灣', value: 360},
                            {name: '屯門', value: 180},
                            {name: '元朗', value: 240},
                            {name: '北區', value: 30},
                            {name: '大埔', value: 110},
                            {name: '沙田', value: 1200},
                            {name: '西貢', value: 180},
                            {name: '離島', value: 20}
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