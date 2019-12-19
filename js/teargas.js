var tearGasOptions = {
    visualMap: {
        min: 0,
        max: 170,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['#80b9d9','#a180d9']
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{b} - {c}places'
    },

    title: {
        text: 'Tear Gas Area by District',
        subtext: 'data from Hong Kong tear gas map',
        sublink: 'https://www.google.com/maps/d/u/0/embed?mid=1J0xABJYyqeY7V9BBAd-Q_ZCY3Mn22wok&ll=22.382581894986814%2C114.10570435&z=11',
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
            { name: '中西區', value: 60 },
            { name: '灣仔', value: 149 },
            { name: '東區', value: 17 },
            { name: '南區', value: 6 },
            { name: '油尖旺', value: 161 },
            { name: '深水埗', value: 27 },
            { name: '九龍城', value: 18 },
            { name: '黃大仙', value: 69 },
            { name: '觀塘', value: 10   },
            { name: '葵青', value: 10 },
            { name: '荃灣', value: 49 },
            { name: '屯門', value: 43 },
            { name: '元朗', value: 25 },
            { name: '北區', value: 3 },
            { name: '大埔', value: 10 },
            { name: '沙田', value: 54 },
            { name: '西貢', value: 7 },
            { name: '離島', value: 0 }
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