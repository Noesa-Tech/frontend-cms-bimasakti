export const VendorService = {
  getData() {
    return [
      {
        id: 1000,
        name: "PT. Air Conditioner",
        services: [
          {
            id: 1,
            title: "Service AC",
          },
          {
            id: 2,
            title: "Home Cleaning",
          },
        ],
        location: "Jakarta Timur",
        date: "2015-09-13",
        status: 1,
      },
      {
        id: 1001,
        name: "PT. Home Indonesia Cleaning",
        services: [
          {
            id: 1,
            title: "Service AC",
          },
          {
            id: 2,
            title: "Home Cleaning",
          },
        ],
        location: "Jakarta Barat",
        date: "2015-09-13",
        status: 2,
      },
    ];
  },

  getVendors() {
    return Promise.resolve(this.getData());
  },
};
