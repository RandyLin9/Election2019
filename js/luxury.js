var luxuryOptions = {
    visualMap: {
        min: 0,
        max: 8200,
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
        text: 'Number of Luxury Apartment Units in 2018 ',
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
            { name: '中西區', value:  527 },
            { name: '灣仔', value:  332 },
            { name: '東區', value:  0 },
            { name: '南區', value:  1745 },
            { name: '油尖旺', value:  43 },
            { name: '深水埗', value:  102 },
            { name: '九龍城', value:  496 },
            { name: '黃大仙', value:  1 },
            { name: '觀塘', value: 0   },
            { name: '葵青', value:  2 },
            { name: '荃灣', value: 128 },
            { name: '屯門', value:  538 },
            { name: '元朗', value:  8109 },
            { name: '北區', value:  855 },
            { name: '大埔', value:  2439 },
            { name: '沙田', value: 843 },
            { name: '西貢', value: 2009 },
            { name: '離島', value:  869 }
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