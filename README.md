Backend API: 

http://localhost:3000/api/user
users / reviews / deals / transactions / dealAgreements


POST: {
  "id": "123456789",
  "username": "test_user",
  "balance": 100.50,
  "chatId": "123456789"
}

PUT: {
  "id": "123456789",
  "username": "updated_user",
  "balance": 200.00,
  "chatId": "987654321"
}

DELETE: {
  "id": "123456789"
}

Вопросы: 

dealAgreements - вместо id - dealKey 
deals - Метод POST