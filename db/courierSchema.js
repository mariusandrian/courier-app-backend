const schema = {
	validator: {
		$jsonSchema: {
			properties: {
				name: {
                    type: "string"
                }
            },
            required: [
                "name"
            ]
		}
	}
}

module.exports = schema