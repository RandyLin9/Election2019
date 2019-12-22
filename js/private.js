var privateOptions = {
    visualMap: {
        min: 26000,
        max: 120000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: [ '#80b9d9','#a180d9']
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{b} - {c}places'
    },

    title: {
        text: 'Number of Private Domestic Units in 2018 ',
        subtext: 'data from Hong Kong RVD',
        sublink: 'https://www.rvd.gov.hk/doc/tc/hkpr19/05.pdf',
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
            { name: '中西區', value:  93823 },
            { name: '灣仔', value:  72647 },
            { name: '東區', value:  121309 },
            { name: '南區', value: 42351 },
            { name: '油尖旺', value:  113167 },
            { name: '深水埗', value:  77425 },
            { name: '九龍城', value:  111633 },
            { name: '黃大仙', value:  19230 },
            { name: '觀塘', value: 47102   },
            { name: '葵青', value:  35618 },
            { name: '荃灣', value: 81479 },
            { name: '屯門', value:  60109 },
            { name: '元朗', value:  80974 },
            { name: '北區', value:  28156 },
            { name: '大埔', value:  32428 },
            { name: '沙田', value: 82579 },
            { name: '西貢', value: 67229 },
            { name: '離島', value:  26712 }
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