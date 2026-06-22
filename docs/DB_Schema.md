# Database Schema (MongoDB / Mongoose)

## 1. Product Model
* `_id`: ObjectId
* `title`: String (Required)
* `description`: String
* `shortDescription`: String
* `price`: Number (Required)
* `images`: Array of Strings (URLs)
* `category`: ObjectId (Ref: Category)
* `ratings`: Number (Average rating)
* `relatedProducts`: Array of ObjectIds (Ref: Product)

## 2. Category Model
* `_id`: ObjectId
* `title`: String (Required)
* `image`: String (URL)
* `description`: String

## 3. Order Model
* `_id`: ObjectId
* `orderNumber`: String (Unique)
* `products`: Array of Objects (Product ID, Quantity, Price at purchase)
* `totalAmount`: Number
* `shippingInformation`: Object (Name, Address, Email, Phone)
* `status`: String (e.g., 'Processing', 'Confirmed', 'Shipped')

## 4. Contact Model
* `_id`: ObjectId
* `name`: String
* `email`: String
* `message`: String
