const DataJson = {
    theadData: [
        "Chiến dịch", "Trạng thái", "Tổng", "Xử lý", "Đóng", "Ngày chạy", "Ngày kết thúc",
        "Người cập nhật", "Ngày cập nhật", "Cty", "Ưu tiên"
    ],

    tbHeadGroupUser: [
        "STT", "Tên nhóm", "Mã nhóm","Người quản lý", "Ngày tạo", "Người tạo", "Trạng thái"
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
        "STT","ID", "Tên người dùng", "Tên đăng nhập", "Mã gọi", "Chức vụ", "Phòng ban", "Cty", "Ngày khởi tạo",
         "Trạng thái", "Người tạo", "Email", "Điện thoại"
     ],

     theadDataReportCDR: [
      "STT",  "Call Date", "File ghi âm", "line gọi",  "Số điện thoại", "Trạng thái gọi","App", "Time_Talking","TotalTime"
     ],

     theadDataReportRecording: [
        "STT",  "Call Date", "File ghi âm", "line gọi",  "Số điện thoại", "Trạng thái gọi","Valid/Invalid", "Time_Talking","TotalTime"
       ],
     theadDataReportCDRWidthNo: [
        "STT",  "Call Date", "File ghi âm", "line gọi",  "Số điện thoại", "Trạng thái gọi","App", "Time_Talking","TotalTime" ,"Số hợp đồng"
       ],
     theadReportSms: [
        "STT", "Ngày",  "line",  "Số điện thoại","Số hợp đồng","Nội dung", "Trạng thái","Nhà mạng"
       ],


       theadReportViewRecording: [
        "STT", "Ngày", "User Id",  "line",  "Số điện thoại","Link file ghi âm"
       ],
  
       theadReportViewRecordingOVerview: [
        "STT", "Ngày", "Line gọi",  "Phần trăm", "Số lượt nghe"
       ],
  

    theadDataReportTalkTime: [
    "STT",  "Gọi bởi", "Số HĐ", "Ngày Thống kê","Tổng cuộc gọi", "% kết nối", "Thời gian gọi","Thời gian chờ", "Đàm thoại ", "Trả lời", "Không trả lời","Hủy", "Bận line","Kênh lỗi", "Không gọi được","Lỗi serve"
    ],
  
     theadDataReason: [
        "STT", "Mã", "Tên trạng thái", "Hiển thị", "Giờ", "Ngày", "Người tạo", "Ngày tạo"
     ],

     theadDataDetailGroup: [
        "STT", "Mã", "Tên người dùng", "Đăng nhập", "Mã gọi" ,"Ngày thêm"
     ],
     theadDataMasterNew: [
        "STT", "Mã", "Tên",  "Người tạo", "Ngày tạo"
     ],
     tbheadReportLogin: [
        "STT", "Tên đăng nhập", "Tên người dùng",  "Hành động", "Ghi chú", "Ngày hoạt động"
     ],
     tbheadReportHistory: [
        "STT", "Họ tên", "Số hợp đồng",  "Di động", "Văn phòng", "Số nhà", "Khác","Tình trạng","Trạng thái", "Tạo bởi", "Tạo ngày", "Chiến dịch"
     ],
     theadDataCampang: [
        "STT", "Mã trạng thái","Tên chiến dịch", "Trạng thái", "Tổng", "Xử lý", "Đóng",
        "Số case giữ", "Ngày chạy","Ngày kết thúc", "Ngày tạo", "Nguời tạo",'C.ty' , "Người cập nhật", 
        "Ngày cập nhật", "Ưu tiên"
     ],
     theadDataCampangAssi: [
        "STT", "Tên người dùng","SL phân", "Thêm", "Rút", "Đã phân", "Đang Xử lý", "Chưa xử lý", 
        "Đóng", "Giữ case"
     ],
     theadDataGroupReason: [
        "STT", "Mã", "Nhóm trạng thái", "Mô tả", "Trạng thái", "Thư mục","Thuộc công ty", 
        "Người tạo", "Ngày tạo", 
        "Người cập nhật", "Ngày cập nhật"
     ],
     theadLine: [
        "STT", "Mã line", "Tên gọi", "Trạng thái"
     ],
     theaddpd: [
        "STT", "Tên gợi nhớ", "Từ", "Đến", "Trạng thái","Ngày tạo"
     ],
     tablePackage: [
        "STT", "Tên gói", "Loại dùng","Giá trị","Id user", "Trạng thái","Độ ưu tiên"
     ],
      tbodyDataUser: [
       
    ],
      theadDataDashboard: ["Ngày",
        "Gọi bởi", "Tổng", "Số HĐ", "% Kết nối", "Trả lời", "Thời gian gọi", "Thời gian chờ",
        "Đàm thoại", "Không trả lời", "Hủy", "Bận line", "Kênh lỗi", "Không gọi được", "Lỗi server"
    ],

    theadCampagnOverview: ["Line gọi",
    "User name", "Tên", "SL phân", "Đang xử lý", "Chưa tác động", "Đóng", 
    "Số case giữ"
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
        "Họ tên", "Số hợp đồng","DPD", "Di động", "Văn phòng", "Số nhà", 
        "Khác", "Tình trạng", "Trạng thái", "Tạo bởi", "Tạo ngày",
    ],

    theadDataFollowUpNew: [
       "STT", "Họ tên", "Số hợp đồng","DPD", "Di động", "Văn phòng", "Số nhà", 
        "Khác", "Tình trạng", "Trạng thái","Đang giao cho", "Tạo bởi","Giữ case", "Tạo ngày",
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
        }
    ]
}

export default DataJson;