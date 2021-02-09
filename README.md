Access the API via `http://localhost:3000/`


# POST `/users/register

**url** : '//localhost:3000/users/register'
```json
body: {
    "email": "<your-email",
    "password": "your-password"
}
```
## Succes Response
```json
response :{
    "msg": "sukses register",
    "id": "<id>,
    "email": "<email>"
}
```

## Error Response
```json
response :{
    "error": "Email already exist"
}
```

# POST /users/login

**url** : '//localhost:3000/users/login'
```json
body: {
    "email": "<your-email",
    "password": "your-password"
}
```

## Succes Response
```json
response :{
    "acces_token": "<your-accses-token>"
}
```

## Error Response
```json
response :{
    "error": "invalid email or password"
}
```
# POST  `/todos/`

**url** : '//localhost:3000/tasks/'
**headers** :{token}

```json
body : {
    title : "Title",
    description :  "Description",
    category:"category",
    writtenBy:"<name>"
}
response:{
    "id": "<id>",
    "title": "<title>",
    "description": "<description>",
    "category": "<category>",
    "UserId": "<userId>",
    "updatedAt": "2021-02-09T13:12:02.761Z",
    "createdAt": "2021-02-09T13:12:02.761Z",
    "writtenBy": "<name>"
}

```


# GET  ``/tasks/``

**url** : '//localhost:3000/tasks/',
**headers** :{token}

```json
response : [
        {
        "id": "<id>",
        "title": "<title>",
        "description": "<description>",
        "category": "<category>",
        "UserId": "<userId>",
        "updatedAt": "2021-02-09T13:12:02.761Z",
        "createdAt": "2021-02-09T13:12:02.761Z",
        "writtenBy": "<name>"
    },
]
```


# GET `/tasks/{id}`

**url** : '//localhost:3000/tasks/5',
**headers** :{token}
```json
response : {
    "id": "<id>",
    "title": "<title>",
    "description": "<description>",
    "category": "<category>",
    "UserId": "<userId>",
    "updatedAt": "2021-02-09T13:12:02.761Z",
    "createdAt": "2021-02-09T13:12:02.761Z",
    "writtenBy": "<name>"
}
```


# PUT  `/todos/{id}`

**url** : '//localhost:3000/tasks/5',
**headers** :{token}
```json
body : {
    title : "Title",
    description :  "Description",
    category:"category",
    writtenBy:"<name>"
}
```

```json
response : {
    "message": "Successfully update Task "
}
```

# PATCH `/tasks/{id}`

**url** : '//localhost:3000/tasks/5',
**headers** :{token}



```json
body : {
    "category": "<name category>"
}
response:{
    "msg": "Successfully update Category"
}
```

# DELETE `/tasks/{id}`
**url** : '//localhost:3000/tasks/5',
**headers** :{token}


```json
response:{
    "msg": "Successfully delete Task"
}
```



# Error Response
------

- ##### 400

  ```
  {
  	err:'Invalid Token'
  }
  ```

- ##### 403

  ```
  {
  	err:'cannot accses this Task'
  }
  ```

- ##### 404

  ```
  {
  	err : "data not found"
  }
  ```

  

- ##### 500

  ```
  {
  	err : 'Internal Sever Error'
  }
  ```


