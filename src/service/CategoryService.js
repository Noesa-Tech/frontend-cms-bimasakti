export const CategoryService = {
  getData() {
    return [
      {
        "id": 1,
        "service_id": 7,
        "price": 250000,
        "status": 1,
        "name": "Service Rutin",
        "created_at": "2024-12-02T13:52:05.000000Z",
        "updated_at": "2024-12-02T15:25:40.000000Z",
        "deleted_at": null,
        "isCustom": 0,
        "service": {
          "id": 7,
          "name": "Pemasangan & Perawatan AC",
          "description": "Kami menyediakan layanan Pemasangan dan Perawatan AC profesional untuk memastikan kenyamanan dan efisiensi pendinginan udara di rumah, kantor, atau tempat usaha Anda. Dengan tim teknisi berpengalaman dan peralatan modern, kami siap memberikan hasil terbaik untuk segala kebutuhan AC Anda.",
          "image": "services/OuBHWO3F8nkj2fbMauxJWbadYpQwxnA7hFMhTE62.png",
          "created_at": "2024-11-30T13:23:37.000000Z",
          "updated_at": "2024-12-06T08:03:02.000000Z",
          "deleted_at": null,
          "serviceId": "7g",
          "image_url": "https://api-bimasakti.noesatech.com/uploads/services/OuBHWO3F8nkj2fbMauxJWbadYpQwxnA7hFMhTE62.png",
        },
        "sub_problem": [
          {
            "id": 1,
            "problem_id": 1,
            "name": "AC 0.5 pk",
            "created_at": "2024-12-02T15:13:05.000000Z",
            "updated_at": "2024-12-02T15:30:24.000000Z",
            "deleted_at": null,
            "description": "lorem ipsum",
            "isCustom": 0
          },
          {
            "id": 3,
            "problem_id": 1,
            "name": "AC 1 PK",
            "created_at": "2024-12-06T08:11:59.000000Z",
            "updated_at": "2024-12-06T08:11:59.000000Z",
            "deleted_at": null,
            "description": "lorem ipsum",
            "isCustom": 0
          },
          {
            "id": 4,
            "problem_id": 1,
            "name": "AC 1.5 PK",
            "created_at": "2024-12-06T08:12:03.000000Z",
            "updated_at": "2024-12-06T08:12:03.000000Z",
            "deleted_at": null,
            "description": "lorem ipsum",
            "isCustom": 0
          },
          {
            "id": 5,
            "problem_id": 1,
            "name": "AC 2 PK",
            "created_at": "2024-12-06T08:12:06.000000Z",
            "updated_at": "2024-12-06T08:12:06.000000Z",
            "deleted_at": null,
            "description": "lorem ipsum",
            "isCustom": 0
          },
          {
            "id": 6,
            "problem_id": 1,
            "name": "AC > 2 PK",
            "created_at": "2024-12-06T08:12:14.000000Z",
            "updated_at": "2024-12-06T08:12:14.000000Z",
            "deleted_at": null,
            "description": "lorem ipsum",
            "isCustom": 0
          }
        ]
      },
      {
        "id": 3,
        "service_id": 7,
        "price": 100000,
        "status": 1,
        "name": "AC tidak dingin",
        "created_at": "2024-12-06T08:09:40.000000Z",
        "updated_at": "2024-12-06T08:09:40.000000Z",
        "deleted_at": null,
        "isCustom": 0,
        "service": {
          "id": 10,
          "name": "House Cleaning",
          "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras platea vehicula sed senectus nunc. Consequat pretium auctor penatibus per etiam felis. Finibus amet luctus lacus fermentum curabitur dis. Congue nec sem elit ipsum semper. Dapibus faucibus cursus consequat inceptos metus porta interdum. Conubia turpis semper tellus litora pharetra; vitae enim faucibus. Potenti sagittis facilisi malesuada cras eleifend. Vitae sodales nec maecenas diam nunc semper, natoque eget. Suscipit felis quam laoreet platea phasellus placerat gravida condimentum. Sed conubia gravida ultrices dolor felis id. Nullam condimentum efficitur magnis quam massa curabitur ad eros. Augue per neque venenatis tempor mollis. Eget congue ridiculus fames erat libero per congue urna.",
          "image": "services/sw3UGJvrvbrFLL3csz2stZdbeLhmkGDp3XSJbFAr.png",
          "created_at": "2024-12-06T01:23:01.000000Z",
          "updated_at": "2024-12-06T08:04:06.000000Z",
          "deleted_at": null,
          "serviceId": "gL",
          "image_url": "https://api-bimasakti.noesatech.com/uploads/services/sw3UGJvrvbrFLL3csz2stZdbeLhmkGDp3XSJbFAr.png",
          "status": 1,
        },
        "sub_problem": [
          {
            "id": 7,
            "problem_id": 3,
            "name": "AC 0.5 PK",
            "created_at": "2024-12-08T02:44:16.000000Z",
            "updated_at": "2024-12-08T02:44:16.000000Z",
            "deleted_at": null,
            "description": "lorem ipsum",
            "isCustom": 0
          },
          {
            "id": 9,
            "problem_id": 3,
            "name": "AC 10 PK",
            "created_at": "2024-12-13T12:11:40.000000Z",
            "updated_at": "2024-12-13T12:11:40.000000Z",
            "deleted_at": null,
            "description": null,
            "isCustom": 1
          }
        ]
      },
    ];
  },

  getCategory() {
    return Promise.resolve(this.getData());
  },
};
