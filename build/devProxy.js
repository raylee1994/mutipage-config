const domain = "http://m.chinahorsetown.com/";

module.exports = {
    "/oauthStatus": {  
        target: domain + "partner/oauth/status",
        pathRewrite: {"^/oauthStatus" : ""},
        changeOrigin: true
    },
    "/getPartnerInfo": {
        target: domain + "partner/user/partnerinfo",
        pathRewrite: {"^/getPartnerInfo" : ""},
        changeOrigin: true
    },
    "/getParkTickets": {
        target: domain + "partner/park/tickets",
        pathRewrite: {"^/getParkTickets" : ""},
        changeOrigin: true
    },
    "/getParkIndex": {
        target: domain + "partner/park/index",
        pathRewrite: {"^/getParkIndex" : ""},
        changeOrigin: true
    },
    "/getParkTickets": {
        target: domain + "partner/park/tickets",
        pathRewrite: {"^/getParkTickets" : ""},
        changeOrigin: true
    },
    "/getTicketDetail": {
        target: domain + "partner/park/ticketdetail",
        pathRewrite: {"^/getTicketDetail" : ""},
        changeOrigin: true
    },
    "/getDayPrice": {
        target: domain + "partner/park/GetDayPrice",
        pathRewrite: {"^/getDayPrice" : ""},
        changeOrigin: true
    },
    "/getCalenderDayPrice": {
        target: domain + "partner/park/GetCalenderDayPrice",
        pathRewrite: {"^/getCalenderDayPrice" : ""},
        changeOrigin: true
    },
    "/submitOrder": {
        target: domain + "partner/order/SubmitOrder",
        pathRewrite: {"^/submitOrder" : ""},
        changeOrigin: true
    },
    "/getUnpaidDetail": {
        target: domain + "partner/order/UnpaidDetail",
        pathRewrite: {"^/getUnpaidDetail" : ""},
        changeOrigin: true
    },
    "/wxpay": {
        target: domain + "partner/wxpay/Pay",
        pathRewrite: {"^/wxpay" : ""},
        changeOrigin: true
    },
    "/SendSMS": {
        target: domain + "user/SendSMS",
        pathRewrite: {"^/SendSMS" : ""},
        changeOrigin: true
    },
    "/apply": {
        target: domain + "partner/user/apply",
        pathRewrite: {"^/apply" : ""},
        changeOrigin: true
    },
    "/commissionList": {
        target: domain + "partner/user/CommissionList",
        pathRewrite: {"^/commissionList" : ""},
        changeOrigin: true
    },
    "/orderList": {
        target: domain + "partner/order/list",
        pathRewrite: {"^/orderList" : ""},
        changeOrigin: true
    },
    "/getPaidDetail": {
        target: domain + "partner/order/ticketdetail",
        pathRewrite: {"^/getPaidDetail" : ""},
        changeOrigin: true
    },
    "/getPartnerOrders": {
        target: domain + "partner/user/orders",
        pathRewrite: {"^/getPartnerOrders" : ""},
        changeOrigin: true
    },
    "/getPartnerOrderDetail": {
        target: domain + "partner/user/OrderDetail",
        pathRewrite: {"^/getPartnerOrderDetail" : ""},
        changeOrigin: true
    },
    "/getcash": {
        target: domain + "partner/user/getcash",
        pathRewrite: {"^/getcash" : ""},
        changeOrigin: true
    },
    "/usercenter": {
        target: domain + "partner/user/info",
        pathRewrite: {"^/usercenter" : ""},
        changeOrigin: true
    },
    "/ChangeHeadImg": {
        target: domain + "partner/user/ChangeHeadImg",
        pathRewrite: {"^/ChangeHeadImg" : ""},
        changeOrigin: true
    }
}