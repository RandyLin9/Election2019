var newOptions = {
    visualMap: {
        min: 1500,
        max: 20000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: [ '#80b9d9','#a180d9']
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{b} - {c}people'
    },

    title: {
        text: 'New immigrants in Hong Kong',
        subtext: 'data from Census and Statistics Department',
        sublink: 'https://www.statistics.gov.hk/pub/B11201012016XXXXB0100.pdf',
        left: 'left',
        textStyle: {
            color: '#000'}
    },

    series: [{
        name: 'District Council',
        type: 'map',
        mapType: 'HK',
        hoverable: true,
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        zoom: 1.5,
        itemStyle: {
            normal: { label: { show: false } },
            emphasis: { borderColor: '#FFFFFF',
            borderWidth: 1,
            label: {
                show: false} }
        },

        markPoint : {
            symbolSize: 10,  
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 1,       
                    label: {
                        show: false
                    }
                },
                }
            },

        data: [
            { name: '中西區', value:  3610 },
            { name: '灣仔', value:  2372 },
            { name: '東區', value:  8925},
            { name: '南區', value:  2800 },
            { name: '油尖旺', value:  14103},
            { name: '深水埗', value:  19298 },
            { name: '九龍城', value:  11004},
            { name: '黃大仙', value:  8577},
            { name: '觀塘', value: 17901 },
            { name: '葵青', value:  11844 },
            { name: '荃灣', value: 9396 },
            { name: '屯門', value:  9063 },
            { name: '元朗', value:  12261},
            { name: '北區', value:  11389 },
            { name: '大埔', value:  5930 },
            { name: '沙田', value: 11121 },
            { name: '西貢', value: 4777 },
            { name: '離島', value:  1577 }
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