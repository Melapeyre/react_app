export const swaggerSpec = {
	"swagger": "2.0",
	"info": {
	   "description": "This is the backend for the software system for The Boil Boss",
	   "version": "1.0.0",
	   "title": "Boil Boss Internal Tools",
	   "contact": {
		  "email": "srijanduggal17@gmail.com"
	   }
	},
	"host": "2nto10r5ua.execute-api.us-east-1.amazonaws.com",
	"basePath": "/",
	"schemes": [
	   "https"
	],
	"paths": {
	   "/InventoryProduced": {
		  "post": {
			 "summary": "Update Inventory Management System to reflect new inventory that has been produced",
			 "description": "",
			 "consumes": [
				"application/json"
			 ],
			 "parameters": [
				{
				   "in": "body",
				   "name": "body",
				   "description": "Inventory that has been produced for each sku",
				   "required": true,
				   "schema": {
					  "type": "array",
					  "items": {
						 "$ref": "#/definitions/SkuProduced"
					  }
				   }
				}
			 ],
			 "responses": {
				"200": {
				   "description": "OK"
				}
			 }
		  }
	   },
	   "/finishedInventoryCount": {
		  "post": {
			 "summary": "Update Inventory Management System to reflect a manual count of inventory",
			 "description": "",
			 "consumes": [
				"application/json"
			 ],
			 "parameters": [
				{
				   "in": "body",
				   "name": "body",
				   "description": "Manual count of each sku",
				   "required": true,
				   "schema": {
					  "type": "array",
					  "items": {
						 "$ref": "#/definitions/SkuCount"
					  }
				   }
				}
			 ],
			 "responses": {
				"200": {
				   "description": "OK"
				}
			 }
		  }
	   },
	   "/getCurrentFinishedInventory": {
		  "get": {
			 "summary": "Get the current inventory levels for all skus",
			 "description": "",
			 "produces": [
				"application/json"
			 ],
			 "responses": {
				"200": {
				   "description": "OK",
				   "schema": {
					  "type": "array",
					  "items": {
						 "$ref": "#/definitions/SkuCount"
					  }
				   }
				}
			 }
		  }
	   },
	   "/quickbooksAuthCode": {
		  "get": {
			 "summary": "Gets refresh token for quickbooks user after they authorize the app",
			 "description": "",
			 "parameters": [
				{
				   "name": "code",
				   "in": "query",
				   "description": "Authorization code for quickbooks customer",
				   "required": true,
				   "type": "string"
				}
			 ],
			 "responses": {
				"200": {
				   "description": "OK"
				}
			 }
		  }
	   },
	   "/quickbooksAuthRedirect": {
		  "get": {
			 "summary": "Initiates user to log in with quickbooks",
			 "description": "",
			 "responses": {
				"200": {
				   "description": "OK"
				}
			 }
		  }
	   },
	   "/quickbooksHandler": {
		  "post": {
			 "summary": "Webhook that Queues updates to the Inventory Management System to reflect depleted inventory as a result of wholesale invoices on Quickbooks",
			 "description": "",
			 "consumes": [
				"application/json"
			 ],
			 "parameters": [
				{
				   "in": "body",
				   "name": "body",
				   "description": "Invoice IDs for newly created invoices",
				   "required": true,
				   "schema": {
					  "$ref": "#/definitions/QuickbooksInvoiceEvent"
				   }
				}
			 ],
			 "responses": {
				"200": {
				   "description": "OK"
				}
			 }
		  }
	   },
	   "/shipstationOrdersWebhookListener": {
		  "post": {
			 "summary": "Webhook that Queues updates to the Inventory Management System to reflect depleted inventory as a result of orders shipped via Shipstation",
			 "description": "",
			 "consumes": [
				"application/json"
			 ],
			 "parameters": [
				{
				   "in": "body",
				   "name": "body",
				   "description": "URL to get Shipstation order details",
				   "required": true,
				   "schema": {
					  "type": "object",
					  "properties": {
						 "resource_url": {
							"type": "string"
						 }
					  }
				   }
				}
			 ],
			 "responses": {
				"200": {
				   "description": "OK"
				}
			 }
		  }
	   }
	},
	"definitions": {
	   "QuickbooksInvoiceEvent": {
		  "type": "object",
		  "properties": {
			 "eventNotifications": {
				"type": "array",
				"items": {
				   "type": "object",
				   "properties": {
					  "realmId": {
						 "type": "string"
					  },
					  "dataChangeEvent": {
						 "type": "object",
						 "properties": {
							"entities": {
							   "type": "array",
							   "items": {
								  "type": "object",
								  "properties": {
									 "name": {
										"type": "string"
									 },
									 "id": {
										"type": "string"
									 },
									 "operation": {
										"type": "string"
									 },
									 "lastUpdated": {
										"type": "string"
									 }
								  }
							   }
							}
						 }
					  }
				   }
				}
			 }
		  }
	   },
	   "SkuProduced": {
		  "type": "object",
		  "properties": {
			 "sku": {
				"type": "string"
			 },
			 "qty": {
				"type": "integer"
			 },
			 "producer": {
				"type": "string"
			 }
		  },
		  "required": [
			 "sku",
			 "qty",
			 "producer"
		  ]
	   },
	   "SkuCount": {
		  "type": "object",
		  "properties": {
			 "sku": {
				"type": "string"
			 },
			 "count": {
				"type": "integer"
			 }
		  },
		  "required": [
			 "sku",
			 "count"
		  ]
	   }
	}
 }