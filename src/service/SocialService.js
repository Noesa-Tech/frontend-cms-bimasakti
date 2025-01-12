export const SocialService = {
    getData() {
        return [
            {
                "id": 1,
                "name": "Instagram",
                "link": "https://instagram.com",
            },
            {
                "id": 2,
                "name": "Facebook",
                "link": "https://facebook.com",
            },
        ];
    },

    getSocial() {
        return Promise.resolve(this.getData());
    },
};

