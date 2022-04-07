const DataJson = {
    theadData: [
        "Chiến dịch", "Trạng thái", "Tổng", "Xử lý", "Đóng", "Ngày chạy", "Ngày kết thúc",
        "Người cập nhật", "Ngày cập nhật", "Cty", "Ưu tiên"
    ],
    tbodyData: [
        {
            id: 1,
            campaign: "Test 1",
            status: "Kich hoat",
            total: 10,
            handle: 0,
            close: 0,
            start_day: "0000-00-00 00:00:00",
            end_day: "0000-00-00 00:00:00",
            updater: "ACS Admin",
            date_update: "2022-02-30 10:30:40",
            company: "ACS",
            vip: ""
        },
        {
            id: 2,
            campaign: "Test 2",
            status: "Kich hoat",
            total: 14,
            handle: 10,
            close: 0,
            start_day: "0000-00-00 00:00:00",
            end_day: "0000-00-00 00:00:00",
            updater: "ACS Admin",
            date_update: "2022-02-30 10:30:40",
            company: "ACS",
            vip: ""
        },
        {
            id: 3,
            campaign: "Test 3",
            status: "Kich hoat",
            total: 2,
            handle: 10,
            close: 2,
            start_day: "0000-00-00 00:00:00",
            end_day: "0000-00-00 00:00:00",
            updater: "ACS Admin",
            date_update: "2022-02-30 10:30:40",
            company: "ACS",
            vip: ""
        },
        {
            id: 4,
            campaign: "Test 4",
            status: "Kich hoat",
            total: 10,
            handle: 3,
            close: 12,
            start_day: "0000-00-00 00:00:00",
            end_day: "0000-00-00 00:00:00",
            updater: "ACS Admin",
            date_update: "2022-02-30 10:30:40",
            company: "ACS",
            vip: ""
        },
    ],

    theadDataUser: [
        "Tên người dùng", "Tên đăng nhập", "Mã gọi", "Chức vụ", "Phòng ban", "Cty", "Ngày khởi tạo",
        "Trạng thái", "Người tạo", "Email", "Điện thoại"
    ],
    tbodyDataUser: [
        {
            id: 1,
            user_name: "Test 1",
            user_login: "Test 1",
            code: "010896",
            position: "Điện thoại viên",
            department: "Collection",
            company: "ACS",
            start_day: "0000-00-00 00:00:00",
            status: "Kich hoat",
            creater: "ACS Admin",
            email: "abc@gmail.com",
            phone: "1234456",
        },
        {
            id: 2,
            user_name: "Test 1",
            user_login: "Test 1",
            code: "010896",
            position: "Điện thoại viên",
            department: "Collection",
            company: "ACS",
            start_day: "0000-00-00 00:00:00",
            status: "Kich hoat",
            creater: "ACS Admin",
            email: "abc@gmail.com",
            phone: "1234456",
        },
    ],

    theadDataDashboard: [
        "Gọi bởi", "Tổng", "Số HĐ", "% Kết nối", "Trả lời", "Thời gian gọi", "Thời gian chờ",
        "Đàm thoại", "Không trả lời", "Hủy", "Bận line", "Kênh lỗi", "Không gọi được", "Lỗi server"
    ],

    tbodyDataDashboard: [
        {
            id: 1,
            call_by: "#SUM",
            total: 0,
            no_contract: 0,
            connect: "0%",
            anwser: 0,
            time_call: "00:00:00",
            time_wait: "00:00:00",
            conversation: "00:00:00",
            no_anwser: 0,
            cancel: 0,
            busy: 0,
            error_channel: 0,
            no_call: 0,
            error_server: 0
        },
        {
            id: 2,
            call_by: "#SUM",
            total: 0,
            no_contract: 0,
            connect: "0%",
            anwser: 0,
            time_call: "00:00:00",
            time_wait: "00:00:00",
            conversation: "00:00:00",
            no_anwser: 0,
            cancel: 0,
            busy: 0,
            error_channel: 0,
            no_call: 0,
            error_server: 0
        },
    ],

    theadDataFollowUp: [
        "Họ tên", "Số hợp đồng", "Di động", "Văn phòng", "Số nhà", 
        "Khác", "Tình trạng", "Trạng thái", "Tạo bởi", "Tạo ngày"
    ],

    tbodyDataFollowUp: [
        {
            id: 1,
            name: "#SUM",
            no_contract: 0,
            phone: "0123456789",
            office: "",
            num_apartment: "",
            other: "",
            state: "",
            status: "",
            create_by: "ACS",
            create_date: "0000-00-00 00:00:00",
        },
        {
            id: 2,
            name: "#SUM",
            no_contract: 0,
            phone: "0123456789",
            office: "",
            num_apartment: "",
            other: "",
            state: "",
            status: "",
            create_by: "ACS",
            create_date: "0000-00-00 00:00:00",
        },
        {
            id: 3,
            name: "#SUM",
            no_contract: 0,
            phone: "0123456789",
            office: "",
            num_apartment: "",
            other: "",
            state: "",
            status: "",
            create_by: "ACS",
            create_date: "0000-00-00 00:00:00",
        },
    ]
}

export default DataJson;