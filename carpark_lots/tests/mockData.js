const mockData = {
    response: {
        data: {
            items: [
                {
                    timestamp: "2023-03-28T17:53:26+08:00",
                    carpark_data: [{
                        carpark_info: [
                            {
                                total_lots: "0",
                                lot_type: "L",
                                lots_available: "0",
                                cumulative_total_lots: "0",
                                cumulative_available_lots: "0"
                            },
                            {
                                total_lots: "0",
                                lot_type: "M",
                                lots_available: "0",
                                cumulative_total_lots: "0",
                                cumulative_available_lots: "0"
                            },
                        ],
                        carpark_number: "SE12",
                        update_datetime: "2022-10-05T11:24:29"
                    }]
                },
            ]
        }
    },
    timestamp: "Wed Mar 29 2023 12:43:27 GMT+0800 (Malaysia Time)",
    carparkDetail: {
        total: [{
            carpark_number: "BM29",
            cumulative_available_lots: 9,
            cumulative_total_lots: 80,
            lot_type: "C",
            lots_available: "9",
            total_lots: "80"
        }],
        small: [{
            carpark_number: "SM28",
            cumulative_available_lots: 1,
            cumulative_total_lots: 20,
            lot_type: "C",
            lots_available: "1",
            total_lots: "20"
        },
        {
            carpark_number: "SM29",
            cumulative_available_lots: 9,
            cumulative_total_lots: 80,
            lot_type: "C",
            lots_available: "9",
            total_lots: "80"
        }], 
        medium:[{
                carpark_number: "MM30",
                cumulative_available_lots: 2,
                cumulative_total_lots: 130,
                lot_type: "C",
                lots_available: "2",
                total_lots: "130"
        }],
        big: [{
            carpark_number: "BM31",
            cumulative_available_lots: 72,
            cumulative_total_lots: 397,
            lot_type: "C",
            lots_available: "72",
            total_lots: "397"
        },
        {
            carpark_number: "BM32",
            cumulative_available_lots: 2,
            cumulative_total_lots: 333,
            lot_type: "C",
            lots_available: "2",
            total_lots: "333"
        },
        {
            carpark_number: "BM33",
            cumulative_available_lots: 14,
            cumulative_total_lots: 371,
            lot_type: "C",
            lots_available: "14",
            total_lots: "371"
        }],
        large: [{
                carpark_number: "LM34",
                cumulative_available_lots: 22,
                cumulative_total_lots: 1302,
                lot_type: "C",
                lots_available: "22",
                total_lots: "1302"
        }],
    },
    totalCarpark: 1,
    totalMinMaxCarpark: {
        small: {
            max: 9,
            maxCarparkNum: ['SM29'],
            min: 1,
            minCarparkNum: ['SM28']
        },
        medium: {
            max: 2,
            maxCarparkNum: ['MM30'],
            min: 2,
            minCarparkNum: ['MM30']
        },
        big: {
            max: 72,
            maxCarparkNum: ['BM31'],
            min: 2,
            minCarparkNum: ['BM32']
        },
        large: {
            max: 22,
            maxCarparkNum: ['LM34'],
            min: 22,
            minCarparkNum: ['LM34']
        }
        
    }

}


export default mockData