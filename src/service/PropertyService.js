export const ProperyService = {
    getData() {
        return [
            {
                "id": 1,
                "name": "Rumah Pribadi",
            },
            {
                "id": 2,
                "name": "Kantor",
            },
            {
                "id": 3,
                "name": "Apartemen",
            },
            {
                "id": 4,
                "name": "Lainnya",
            },
        ];
    },

    getProperties() {
        return Promise.resolve(this.getData());
    },
};

