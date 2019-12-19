var voterateOptions = {
    visualMap: {
        min: 0,
        max: 100,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['#4557c7','#5968cd','#6c7ad3','#808cd9','#949edf','#a7b0e5','#bbc1eb', '#ebe4bb','#d9cd80','#c7b645']
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{b} - {c}%'
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
        zoom: 2.5,
        itemStyle: {
            normal: { label: { show: true } },
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
            { name: '中西區', value: 93 },
            { name: '灣仔', value: 69 },
            { name: '東區', value: 91 },
            { name: '南區', value: 88 },
            { name: '油尖旺', value: 85 },
            { name: '深水埗', value: 88 },
            { name: '九龍城', value: 60 },
            { name: '黃大仙', value: 100 },
            { name: '觀塘', value: 70 },
            { name: '葵青', value: 87 },
            { name: '荃灣', value: 84 },
            { name: '屯門', value: 90 },
            { name: '元朗', value: 84 },
            { name: '北區', value: 83 },
            { name: '大埔', value: 100 },
            { name: '沙田', value: 97 },
            { name: '西貢', value: 89 },
            { name: '離島', value: 70 }
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