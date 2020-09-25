const schema = {
	validator: {
		$jsonSchema: {
			properties: {
				username: {
                    type: "string"
                },
                email: {
                    type: 'string'
                },
                password: {
                    type: "string"
                },
                typeIndicator: {
                    type: "number"
                }
            },
            required: [
                "username", "email", "password", "typeIndicator"
            ]
		}
	}
}

module.exports = schema