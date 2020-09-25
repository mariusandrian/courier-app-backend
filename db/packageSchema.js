const schema = {
	validator: {
		$jsonSchema: {
			properties: {
				requesterName: {
                    type: "string"
                },
                requesterId: {
                    type: 'string'
                },
                contents: {
                    type: "string"
                },
                pickupAddress: {
                    type: "string"
                },
                deliveryAddress: {
                    type: "string"
                },
                status: {
                    type: "string"
                }
            },
            required: [
                "requesterName", "requesterId", "contents", "pickupAddress", "deliveryAddress", "status"
            ]
		}
	}
}

module.exports = schema