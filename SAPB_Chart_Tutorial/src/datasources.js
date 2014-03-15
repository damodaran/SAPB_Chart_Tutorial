SAP.DataSources.ds = 
{
	"odata": [],
	"odataService": [],
	"odataQuery": [],
	"restful": [],
	"file": [
		{
			"name": "APBDemo",
			"rootURL": "model/Data.json",
			"jsonp": false,
			"proxy": true,
			"type": "[]",
			"userName": "",
			"password": "{\"iv\":\"RNcltX4oqWxE3DmQXdUTJA\",\"v\":1,\"iter\":1000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"0rkbMHe2Bks\",\"ct\":\"GR+zUKgKxvY\"}",
			"params": [],
			"columns": [
				{
					"name": "id",
					"type": "number"
				},
				{
					"name": "name",
					"type": "string"
				},
				{
					"name": "Salary",
					"type": "number"
				},
				{
					"name": "Gender",
					"type": "boolean"
				}
			]
		},
		{
			"name": "SalesAnalysis",
			"rootURL": "model/RegionSales_AirCon.json",
			"type": "[]",
			"jsonp": false,
			"proxy": true,
			"userName": "",
			"password": "{\"iv\":\"mpEhe5Bjkx+akw+TQ2gH9Q\",\"v\":1,\"iter\":1000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"0rkbMHe2Bks\",\"ct\":\"NEGRs0w3KlQ\"}",
			"params": [],
			"columns": [
				{
					"name": "Region",
					"type": "string"
				},
				{
					"name": "Product",
					"type": "string"
				},
				{
					"name": "SalesYear",
					"type": "number"
				},
				{
					"name": "Target",
					"type": "number"
				},
				{
					"name": "SalesAmt",
					"type": "number"
				}
			],
			"baseType": "object"
		}
	],
	"proxyPath": "/proxy/{url}/?user={user}&password={password}"
};
	//SMP data sources
SAP.SMP.ds = 
{
	"ServerProfile": {
		"Password": "{\"iv\":\"cKOAn/kjrpLqiSWn1lFPwQ\",\"v\":1,\"iter\":1000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"0rkbMHe2Bks\",\"ct\":\"qS95cn2P7sz3bk/UuZk8dmmcgo+IBdH911v8l+tgBBh87FucZLigW0AmhPSjlrvaGnqU7/j4LCU5gZlQ+eQDJan0wqIf24pkG5QYs90QK/Ums2L4qpZ9ZVjMv52hVmkY6y3AKQxukpL5wygBAlyQUl3OORHWnIZLKnOw0T6mqd2qNTzvtvDFPHhp4vTKP6a53lyQyYptwPK6\"}"
	},
	"AppCid": "",
	"SMPOData": []
};
SAP.Util.initSourceInfo();
