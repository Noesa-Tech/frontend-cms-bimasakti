export const CustomerService = {
    getData() {
        return [
            {
                "id": 7,
                "name": "Anugrah Abdi Kautsar",
                "email": "anugrahabdikautsar@gmail.com",
                "email_verified_at": null,
                "created_at": "2024-12-13T09:05:43.000000Z",
                "updated_at": "2024-12-13T09:05:43.000000Z",
                "deleted_at": null,
                "phone": "+6287771739015"
            },
            {
                "id": 8,
                "name": "Adli eeng",
                "email": "adlieend@gmail.com",
                "email_verified_at": null,
                "created_at": "2024-12-13T09:05:43.000000Z",
                "updated_at": "2024-12-13T09:05:43.000000Z",
                "deleted_at": null,
                "phone": "+6287771739015"
            },
        ];
    },

    getCustomer() {
        return Promise.resolve(this.getData());
    },
};

