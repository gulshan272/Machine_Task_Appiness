# Machine_Task_Appiness
Prerequisite:

.Mongo db should install in Your system.
.Postman should have installed .
.Sublime,atom or visual studio should have installed.
*-------------*****---------*--------
Run Command in cmd for importing package.json file
1.npm init -y
Run Command in cmd for importing express module
2.npm install express --save
Run Command in cmd for importing express module
3.mongoose install
Run Command in cmd for importing validator module
4.npm validator
5. For  post Data for Categories
Use api:
localhost:3000//appiness/api/v1.0/allcategories

Body Post Json data:
{"user_name":"skumar",
	"category_name":"Software"
}
{"user_name":"skumar",
	"category_name":"Home Appliances"
}
{"user_name":"skumar",
	"category_name":"Watch"
}
6.For Post Data for Products
localhost:3000/appiness/api/v1.0/products
{"product_name":"Sonata",
	"created_by":"gkumar",

	"category_name":"Watch",
	"user_name":"gulshan",

	"modified_by":"gkumar"
}
7.For Print Category With Count
localhost:3000/appiness/api/v1.0/allcategories
