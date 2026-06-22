# [ ECHO. ] API Specification

**Base URL:** `/api`
**Architecture:** Next.js App Router (`app/api/.../route.ts`)
**Database:** MongoDB (Mongoose)

---

## 1. Products Inventory

### Fetch All Products
Retrieves the hardware catalog with optional filtering and pagination for the 50/50 split UI.

*   **URL:** `/api/products`
*   **Method:** `GET`
*   **Query Parameters:**
    *   `category` (optional): e.g., `microcontroller`, `sensor`, `wireless`
    *   `limit` (optional): defaults to `20`
*   **Success Response:**
    *   **Code:** `200 OK`
    *   **Content:**
```json
        [
          {
            "_id": "60d5ec49f1b2c8a3",
            "name": "ESP32 Development Board",
            "category": "microcontroller",
            "price": 6.50,
            "stock": 142,
            "specs": {
              "voltage": "3.3V",
              "interfaces": ["I2C", "SPI", "UART"]
            }
          },
          {
            "_id": "60d5ec49f1b2c8a4",
            "name": "TF-Luna LiDAR Module",
            "category": "sensor",
            "price": 24.99,
            "stock": 18,
            "specs": {
              "voltage": "5V",
              "interfaces": ["UART", "I2C"]
            }
          }
        ]
        ```

### Fetch Single Product
Retrieves deep specifications and datasheet links for a specific component.

*   **URL:** `/api/products/:id`
*   **Method:** `GET`
*   **Success Response:**
    *   **Code:** `200 OK`
    *   **Content:**
```json
        {
          "_id": "60d5ec49f1b2c8a4",
          "name": "TF-Luna LiDAR Module",
          "description": "Short-range, low-cost distance sensor for robotics and autonomous navigation.",
          "price": 24.99,
          "stock": 18,
          "datasheet_url": "[https://echo.store/datasheets/tf-luna.pdf](https://echo.store/datasheets/tf-luna.pdf)"
        }
        ```
*   **Error Response:**
    *   **Code:** `404 Not Found`

---

## 2. Cart Management

### Get Active Cart
Retrieves the current user's cart state.

*   **URL:** `/api/cart`
*   **Method:** `GET`
*   **Success Response:**
    *   **Code:** `200 OK`
    *   **Content:**
```json
        {
          "cartId": "usr_99823",
          "items": [
            {
              "productId": "60d5ec49f1b2c8a3",
              "name": "ESP32 Development Board",
              "quantity": 2,
              "price": 6.50
            }
          ],
          "subtotal": 13.00
        }
        ```

### Add/Update Cart Item
*   **URL:** `/api/cart`
*   **Method:** `POST`
*   **Payload (JSON):**
```json
    {
      "productId": "60d5ec49f1b2c8a3",
      "quantity": 2
    }
    ```
*   **Success Response:**
    *   **Code:** `200 OK` (Returns updated cart object)

### Remove Item from Cart
*   **URL:** `/api/cart/:productId`
*   **Method:** `DELETE`
*   **Success Response:**
    *   **Code:** `200 OK` (Returns updated cart object)

---

## 3. Order Processing

### Submit Checkout
Processes the final transaction and clears the active cart.

*   **URL:** `/api/orders`
*   **Method:** `POST`
*   **Payload (JSON):**
```json
    {
      "cartId": "usr_99823",
      "shippingDetails": {
        "email": "engineer@example.com",
        "address": "123 Maker St",
        "city": "Bengaluru",
        "zip": "560001"
      },
      "paymentMethod": "card",
      "totalAmount": 13.00
    }
    ```
*   **Success Response:**
*   **Code:** `201 Created`
*   **Content:**
```json
        {
          "orderId": "ORD-7742-991",
          "status": "processing",
          "estimated_delivery": "2026-06-25T00:00:00Z"
        }
        ```

### Get Order Receipt
*   **URL:** `/api/orders/:orderId`
*   **Method:** `GET`
*   **Success Response:**
    *   **Code:** `200 OK` (Returns full order details for the confirmation page)

---

## 4. Search & Discovery

### Global Text Search
Queries the database for specific components using MongoDB text indexes.

*   **URL:** `/api/search`
*   **Method:** `GET`
*   **Query Parameters:**
    *   `q`: e.g., `Raspberry Pi 5`
*   **Success Response:**
    *   **Code:** `200 OK`
    *   **Content:**
```json
        {
          "results": [
            {
              "_id": "60d5ec49f1b2c8a9",
              "name": "Raspberry Pi 5 - 8GB",
              "price": 80.00
            }
          ],
          "count": 1
        }
        ```
