# middlewares_error-handling
 A secure and scalable Express.js setup featuring custom error handling, centralized middleware, token-based authentication, and clean API responses for building production-ready applications.






Read file: index.js

Read file: ExpressError.js
 Express.js Middleware and Error Handling Study Notes

### 1. Custom Error Class Implementation
javascript
class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

### Key Points:
- Extends the built-in `Error` class
- Adds custom properties: `status` and `message`
- Allows for structured error handling with HTTP status codes
- Makes error objects more informative and consistent

## 2. Middleware Implementation
```javascript
app.use("/api", (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        throw new ExpressError(401, "ACCESS DENIED!!")
    }
})
```
### Key Concepts:
- **Middleware Function**: Function that has access to request, response, and next
- **Path-specific Middleware**: Applied only to routes starting with "/api"
- **Token Authentication**: Simple token-based authentication using query parameters
- **next()**: Function to pass control to the next middleware
- **Error Throwing**: Throws custom error when authentication fails

## 3. Error Handling Routes
```javascript
app.get("/err", (req, res) => {
    sudip = sudip  // Intentional error
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to /admin is Forbidden")
})
```
### Key Points:
- Demonstrates different types of errors:
  - Runtime errors (undefined variable)
  - Custom errors (403 Forbidden)
- Shows how to throw errors in route handlers
- Illustrates error handling for different scenarios

## 4. Global Error Handler
```javascript
app.use((err, req, res, next) => {
    let {status=500, message="Some error occurred"} = err;
    res.status(status).send(message);
})
```
### Key Concepts:
- **Error Middleware**: Must have 4 parameters (err, req, res, next)
- **Default Values**: Provides fallback for status and message
- **Error Response**: Sends appropriate status code and message
- **Global Catch**: Catches all errors in the application

## 5. HTTP Status Codes Used
- **401**: Unauthorized (Authentication failed)
- **403**: Forbidden (Authentication succeeded but not authorized)
- **500**: Internal Server Error (Default error status)

## 6. Best Practices Demonstrated
1. **Separation of Concerns**
   - Custom error class in separate file
   - Middleware functions for specific purposes
   - Global error handler for consistent error responses

2. **Error Handling Patterns**
   - Custom error creation
   - Error propagation
   - Centralized error handling

3. **Middleware Usage**
   - Route-specific middleware
   - Authentication checks
   - Error handling middleware

## 7. Common Use Cases
1. **Authentication**
   - Token verification
   - Access control
   - Route protection

2. **Error Management**
   - Custom error creation
   - Error status codes
   - Error messages
   - Global error handling

## 8. Testing Scenarios
1. **Authentication Test**
   - URL: `http://localhost:8080/api?token=giveaccess` (Success)
   - URL: `http://localhost:8080/api` (401 Error)

2. **Error Handling Test**
   - URL: `http://localhost:8080/err` (500 Error)
   - URL: `http://localhost:8080/admin` (403 Error)

### 9. Important Notes
- Middleware functions execute in order
- Error middleware must be defined last
- Custom errors provide better error tracking
- Global error handler ensures consistent error responses
- Proper error handling improves application reliability

This implementation demonstrates a solid foundation in Express.js middleware and error handling, which are crucial for building robust and secure web applications.
