# Family Budget App
This is just en example of my coding style.
## 1. Setup
In main project dir run: 
```
docker-compose build
``` 
To start all cntainers run:
```
docker-compose up
``` 
## 2. Access to containers
From local machine you can access to all containers via http://localhost with port specified
### 2.1. Database
```
mongodb://localhost:27017/familyBudget
```
In nackend container you can acess via:
```
mongodb://host.docker.internal:27017/familyBudget
```
DB is empty. You have to create all documents by your own with using backend.
### 2.2. Backend
```
http://localhost:8086/
```
Backend mainly stands on node, express, mongoose. For authentication purposes JWT is used. There are a few tests left to write.
### 2.3 Frontend
```
http://localhost:3006/
```
TODO :)
## 3. How to use it?
### 3.1. Register
```
[POST] http://localhost:8086/api/register
```
payload:
```
{
    "email": "your@email.com",
    "password": "LongerThan8Chars"
}
```
### 3.2. Login
```
[POST] http://localhost:8086/api/login
```
payload:
```
{
    "email": "your@email.com",
    "password": "LongerThan8Chars"
}
```
In response you get JWT, so save it for an hour :)
```
{
    ...
    "token": "GHouiHUJHmopi...."
    ...
}
```
Since now, you have to pass this token by headers as value of key `x-access-token`
### 3.3. Create new user
```
[POST] http://localhost:8086/api/users
```
payload:
```
{
    "email": "new@user.com",
    "password": "LongerThan8Chars"
}
```
### 3.4. Get one user by id
```
[GET] http://localhost:8086/api/users/:id
```
### 3.5. Create budget
```
[POST] http://localhost:8086/api/budgets
```
Payload:
```
{
    "name": "budget name"
}
```
### 3.6. Get all budget
```
[GET] http://localhost:8086/api/budgets
```
### 3.7. Get one budget
```
[GET] http://localhost:8086/api/budgets/:id
```
### 3.8. Share budget
```
[PUT] http://localhost:8086/api/budgets/:id
```
Payload:
```
{
    "name": "budget name",
    "shared": ["idOfUser"]
}
```
### 3.9. Add income/outcome to budget
```
[POST] http://localhost:8086/api/budgets/:id/incomes
[POST] http://localhost:8086/api/budgets/:id/outcomes
```
Payload:
```
{
    "name": "apple",
    "value": 6
}
```
### 3.10. Get all incomes/outcomes for budget
```
[GET] http://localhost:8086/api/budgets/:id/incomes
[GET] http://localhost:8086/api/budgets/:id/outcomes
```
You can use filters:
```
[GET] http://localhost:8086/api/budgets/:id/incomes?category=main&gt=3&lt=7
```
- category - obvious (string)
- gt - greaterThan (number)
- lt - lessThan (number)
### 3.11. Add category
```
[POST] http://localhost:8086/api/categories
```
Payload:
```
{
    "name": "main"
}
```
### 3.12. Get all categories
```
[GET] http://localhost:8086/api/categories
```
## 4. Enjoy
:)
## 5. Contant with me
```
code@piotrdebski.pl
```