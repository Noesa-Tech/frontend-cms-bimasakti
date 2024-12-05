export const OrderService = {
  getData() {
    return [
      {
        id: 1000,
        noInvoice: "INV-0938483-20241504",
        name: "Hari Nurah Nahrani",
        email: "hari@gmail.com",
        phone: "6282117688166",
        paymentMethod: "Transfer Bank",
        vendor: null,

        location: {
          country: "Jawa Barat",
          city: "Kota Bandung",
          distric: "Ciheulang",
          village: "Sekeloa Selatan",
          address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
        },
        items: [
          {
            id: 1,
            label: "Service Rutin",
            status: true,
            isDefault: true,
            price: 50000,
            category: [
              { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
              { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
              { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
            ],
          },
          {
            id: 2,
            label: "AC tidak Dingin",
            status: true,
            isDefault: true,
            price: 100000,
            category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
          },
        ],
        date: "2015-09-13",
        status: 1,
      },
      {
        id: 1001,
        noInvoice: "INV-0938483-20241505",
        name: "Hari Nurah Nahrani",
        email: "hari@gmail.com",
        phone: "6282117688166",
        paymentMethod: "Transfer Bank",
        vendor: {
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
          code: "XDJEIS",
        },

        location: {
          country: "Jawa Barat",
          city: "Kota Bandung",
          distric: "Ciheulang",
          village: "Sekeloa Selatan",
          address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
        },
        items: [
          {
            id: 1,
            label: "Service Rutin",
            status: true,
            isDefault: true,
            price: 50000,
            category: [
              { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
              { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
              { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
            ],
          },
          {
            id: 2,
            label: "AC tidak Dingin",
            status: true,
            isDefault: true,
            price: 100000,
            category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
          },
        ],
        date: "2015-09-14",
        status: 2,
      },
      {
        id: 1002,
        noInvoice: "INV-0938483-20241506",
        name: "Hari Nurah Nahrani",
        email: "hari@gmail.com",
        phone: "6282117688166",
        paymentMethod: "Transfer Bank",
        vendor: {
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
          code: "XDJEIS",
        },
        location: {
          country: "Jawa Barat",
          city: "Kota Bandung",
          distric: "Ciheulang",
          village: "Sekeloa Selatan",
          address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
        },
        items: [
          {
            id: 1,
            label: "Service Rutin",
            status: true,
            isDefault: true,
            price: 50000,
            category: [
              { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
              { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
              { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
            ],
          },
          {
            id: 2,
            label: "AC tidak Dingin",
            status: true,
            isDefault: true,
            price: 100000,
            category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
          },
        ],
        date: "2015-09-15",
        status: 3,
      },
      {
        id: 1003,
        noInvoice: "INV-0938483-20241507",
        name: "Hari Nurah Nahrani",
        email: "hari@gmail.com",
        phone: "6282117688166",
        paymentMethod: "Transfer Bank",
        vendor: {
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
          code: "XDJEIS",
        },
        location: {
          country: "Jawa Barat",
          city: "Kota Bandung",
          distric: "Ciheulang",
          village: "Sekeloa Selatan",
          address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
        },
        items: [
          {
            id: 1,
            label: "Service Rutin",
            status: true,
            isDefault: true,
            price: 50000,
            category: [
              { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
              { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
              { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
            ],
          },
          {
            id: 2,
            label: "AC tidak Dingin",
            status: true,
            isDefault: true,
            price: 100000,
            category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
          },
        ],
        date: "2015-09-16",
        status: 4,
      },
      {
        id: 1004,
        noInvoice: "INV-0938483-20241508",
        name: "Hari Nurah Nahrani",
        email: "hari@gmail.com",
        phone: "6282117688166",
        paymentMethod: "Transfer Bank",
        vendor: {
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
          code: "XDJEIS",
        },

        location: {
          country: "Jawa Barat",
          city: "Kota Bandung",
          distric: "Ciheulang",
          village: "Sekeloa Selatan",
          address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
        },
        items: [
          {
            id: 1,
            label: "Service Rutin",
            status: true,
            isDefault: true,
            price: 50000,
            category: [
              { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
              { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
              { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
            ],
          },
          {
            id: 2,
            label: "AC tidak Dingin",
            status: true,
            isDefault: true,
            price: 100000,
            category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
          },
        ],
        date: "2015-09-17",
        status: 5,
      },
      {
        id: 1005,
        noInvoice: "INV-0938483-20241509",
        name: "Hari Nurah Nahrani",
        email: "hari@gmail.com",
        phone: "6282117688166",
        paymentMethod: "Transfer Bank",
        vendor: {
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
          code: "XDJEIS",
        },

        location: {
          country: "Jawa Barat",
          city: "Kota Bandung",
          distric: "Ciheulang",
          village: "Sekeloa Selatan",
          address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
        },
        items: [
          {
            id: 1,
            label: "Service Rutin",
            status: true,
            isDefault: true,
            price: 50000,
            category: [
              { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
              { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
              { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
            ],
          },
          {
            id: 2,
            label: "AC tidak Dingin",
            status: true,
            isDefault: true,
            price: 100000,
            category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
          },
        ],
        date: "2015-09-18",
        status: 6,
      },
    ];
  },

  getOrders() {
    return Promise.resolve(this.getData());
  },
};
