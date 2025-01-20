export const AdminService = {
    getData() {
        return [
            {
                "id": 7,
                "name": "Anugrah Abdi Kautsar",
                "email": "anugrahabdikautsar@gmail.com",
                "phone": "+6287771739015",
                "location": {
                    "id": "1",
                    "name": "Bandung",
                },
                "password": "P@ssw0rd!",
                "created_at": "2024-12-13T09:05:43.000000Z",
                "updated_at": "2024-12-13T09:05:43.000000Z",
                "deleted_at": null,
            },
            {
                "id": 8,
                "name": "Adli eeng",
                "email": "adlieend@gmail.com",
                "phone": "+6287771739015",
                "location": {
                    "id": "2",
                    "name": "Jakarta Selatan",
                },
                "password": "P@ssw0rd!",
                "created_at": "2024-12-13T09:05:43.000000Z",
                "updated_at": "2024-12-13T09:05:43.000000Z",
                "deleted_at": null,
            },
        ];
    },

    getAdmin() {
        return Promise.resolve(this.getData());
    },
};

