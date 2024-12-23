const staticDataAboutTables = {
    users: {
        name: "Пользователи",
        opportunities: {
            GET: true,
            POST: true,
            PUT: true,
            DELETE: true
        },
        columns: {
            id: {
                name: "ID",
                type: "number",
                edit: false
            },
            username: {
                name: "Имя пользователя",
                type: "string",
                edit: true
            },
            balance: {
                name: "Баланс",
                type: "number",
                edit: true
            },
            chatId: {
                name: "ID чата",
                type: "number",
                edit: true
            },
            createdAt:  {
                name: "Время создания",
                type: "date",
                edit: false
            },
            updatedAt: {
                name: "Время обновления",
                type: "date",
                edit: false
            },
        }
    },
    reviews: {
        name: "Отзывы",
        opportunities: {
            GET: true,
            POST: false,
            PUT: true,
            DELETE: true
        },
        columns: {
            id: {
                name: "ID",
                type: "number",
                edit: false
            },
            userId: {
                name: "ID пользователя",
                type: "number",
                edit: false
            },
            dealId: {
                name: "ID сделки",
                type: "number",
                edit: false
            },
            content: {
                name: "Содержание отзыва",
                type: "string",
                edit: true
            },
            rating: {
                name: "Оценка",
                type: "number",
                edit: true,
            },
            updatedAt: {
                name: "Время обновления",
                type: "date",
                edit: false
            },
        }
    },
    deals: {
        name: "Предложения",
        opportunities: {
            GET: true,
            POST: false,
            PUT: false,
            DELETE: false
        },
        columns: {
            buyerId: {
                name: "ID покупателя",
                type: "number",
                edit: false
            },
            sellerId: {
                name: "ID продавца",
                type: "number",
                edit: false
            },
            amount: {
                name: "Сумма сделки",
                type: "number",
                edit: false
            },
            status: {
                name: "Статус сделки",
                type: "string",
                edit: true
            },
            dealKey: {
                name: "Ключ сделки",
                type: "number",
                edit: false
            },
            description: {
                name: "Описание сделки",
                type: "string",
                edit: false
            },
            disputeInitiator:{
                name: "Инициатор спора",
                type: "number",
                edit: false
            } ,
            createdAt:  {
                name: "Время создания",
                type: "date",
                edit: false
            },
            updatedAt: {
                name: "Время обновления",
                type: "date",
                edit: false
            },
        }
    },
    transactions: {
        name: "Транзакции",
        opportunities: {
            GET: true,
            POST: false,
            PUT: false,
            DELETE: true
        },
        columns: {}
    }
}

const exceptions = {
    inputForm: ['id', 'createdAt', 'updatedAt']
}

module.exports = { staticDataAboutTables, exceptions}

// export default { staticDataAboutTables, exceptions}