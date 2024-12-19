export const PaymentReportService = {
  getData() {
    return [
      {
        id: 1,
        noInvoice: 'INV-23949230-23211',
        service: {
          id: 7,
          name: "Pemasangan & Perawatan AC",
          description: "Kami menyediakan layanan Pemasangan dan Perawatan AC profesional untuk memastikan kenyamanan dan efisiensi pendinginan udara di rumah, kantor, atau tempat usaha Anda. Dengan tim teknisi berpengalaman dan peralatan modern, kami siap memberikan hasil terbaik untuk segala kebutuhan AC Anda.",
          image: "services/OuBHWO3F8nkj2fbMauxJWbadYpQwxnA7hFMhTE62.png",
          image_url: "https://api-bimasakti.noesatech.com/uploads/services/OuBHWO3F8nkj2fbMauxJWbadYpQwxnA7hFMhTE62.png",
          problem: [
            {
              name: "Service Rutin",
              sub_problem: [
                { name: "AC 0.5 pk", qty: 3, price: 50000 },
                { name: "AC 1 pk", qty: 4, price: 50000 },
                { name: "AC 1.5 pk", qty: 5, price: 50000 },
              ],
            },
            {
              name: "Bongkar/Pasang AC",
              sub_problem: [
                { name: "AC 0.5 pk", qty: 3, price: 50000 },
                { name: "AC 1 pk", qty: 4, price: 50000 },
                { name: "AC 1.5 pk", qty: 5, price: 50000 },
              ],
            },
          ]
        },
        status: 1,
        date: "2024-11-30T14:29:50.000000Z",
        total: 150000,
        useLadder: 0,
        property: {
          id: 1,
          name: 'Rumah Pribadi',
          price: 50000,
        },
        customer: {
          id: 1,
          name: 'Khajijah',
          email: 'exmple@email.com',
          phone: '82118849939',
        },
        location: "Jl. Sekeloa II, No. 50, RT/11 RW/11, Sekeloa Selatan, Ciheulang, Kota Bandung, Jawa Barat",
        paymentMethod: 'Transfer Bank',
        vendor: {
          id: 1,
          name: 'PT Angkasa Jaya',
          code: 'X5TD45'
        }
      },
      {
        id: 2,
        noInvoice: 'INV-23949230-23442',
        service: {
          id: 10,
          name: "House Cleaning",
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras platea vehicula sed senectus nunc. Consequat pretium auctor penatibus per etiam felis. Finibus amet luctus lacus fermentum curabitur dis. Congue nec sem elit ipsum semper. Dapibus faucibus cursus consequat inceptos metus porta interdum. Conubia turpis semper tellus litora pharetra; vitae enim faucibus. Potenti sagittis facilisi malesuada cras eleifend. Vitae sodales nec maecenas diam nunc semper, natoque eget. Suscipit felis quam laoreet platea phasellus placerat gravida condimentum. Sed conubia gravida ultrices dolor felis id. Nullam condimentum efficitur magnis quam massa curabitur ad eros. Augue per neque venenatis tempor mollis. Eget congue ridiculus fames erat libero per congue urna.",
          image: "services/sw3UGJvrvbrFLL3csz2stZdbeLhmkGDp3XSJbFAr.png",
          image_url: "https://api-bimasakti.noesatech.com/uploads/services/sw3UGJvrvbrFLL3csz2stZdbeLhmkGDp3XSJbFAr.png",
          problem: [{
            name: "AC tidak Dingin",
            sub_problem: [{ name: "AC 0.5 pk", qty: 2, price: 50000 }],
          }]
        },
        status: 1,
        date: "2024-11-30T14:29:50.000000Z",
        total: 50000,
        useLadder: 1,
        property: {
          id: 1,
          name: 'Rumah Pribadi',
          price: 50000,
        },
        customer: {
          id: 1,
          name: 'Khajijah',
          email: 'exmple@email.com',
          phone: '82118849939',
        },
        location: "Jl. Sekeloa II, No. 50, RT/11 RW/11, Sekeloa Selatan, Ciheulang, Kota Bandung, Jawa Barat",
        paymentMethod: 'Transfer Bank',
        vendor: {
          id: 1,
          name: 'PT Angkasa Jaya',
          code: 'X5TD45'
        }
      },
      {
        id: 3,
        noInvoice: 'INV-23949230-23211',
        service: {
          id: 7,
          name: "Pemasangan & Perawatan AC",
          description: "Kami menyediakan layanan Pemasangan dan Perawatan AC profesional untuk memastikan kenyamanan dan efisiensi pendinginan udara di rumah, kantor, atau tempat usaha Anda. Dengan tim teknisi berpengalaman dan peralatan modern, kami siap memberikan hasil terbaik untuk segala kebutuhan AC Anda.",
          image: "services/OuBHWO3F8nkj2fbMauxJWbadYpQwxnA7hFMhTE62.png",
          image_url: "https://api-bimasakti.noesatech.com/uploads/services/OuBHWO3F8nkj2fbMauxJWbadYpQwxnA7hFMhTE62.png",
          problem: [{
            name: "Service Rutin",
            sub_problem: [
              { name: "AC 0.5 pk", qty: 3, price: 50000 },
              { name: "AC 1 pk", qty: 4, price: 50000 },
              { name: "AC 1.5 pk", qty: 5, price: 50000 },
            ],
          }]
        },
        status: 1,
        date: "2024-11-30T14:29:50.000000Z",
        total: 150000,
        useLadder: 1,
        property: {
          id: 1,
          name: 'Rumah Pribadi',
          price: 50000,
        },
        customer: {
          id: 1,
          name: 'Alif bata jim sa sho',
          email: 'exmple@email.com',
          phone: '82118849939',
        },
        location: "Jl. Sekeloa II, No. 50, RT/11 RW/11, Sekeloa Selatan, Ciheulang, Kota Bandung, Jawa Barat",
        paymentMethod: 'Transfer Bank',
        vendor: {
          id: 1,
          name: 'PT Angkasa Jaya',
          code: 'X5TD45'
        }
      },
      {
        id: 4,
        noInvoice: 'INV-23949230-23442',
        service: {
          id: 10,
          name: "House Cleaning",
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras platea vehicula sed senectus nunc. Consequat pretium auctor penatibus per etiam felis. Finibus amet luctus lacus fermentum curabitur dis. Congue nec sem elit ipsum semper. Dapibus faucibus cursus consequat inceptos metus porta interdum. Conubia turpis semper tellus litora pharetra; vitae enim faucibus. Potenti sagittis facilisi malesuada cras eleifend. Vitae sodales nec maecenas diam nunc semper, natoque eget. Suscipit felis quam laoreet platea phasellus placerat gravida condimentum. Sed conubia gravida ultrices dolor felis id. Nullam condimentum efficitur magnis quam massa curabitur ad eros. Augue per neque venenatis tempor mollis. Eget congue ridiculus fames erat libero per congue urna.",
          image: "services/sw3UGJvrvbrFLL3csz2stZdbeLhmkGDp3XSJbFAr.png",
          image_url: "https://api-bimasakti.noesatech.com/uploads/services/sw3UGJvrvbrFLL3csz2stZdbeLhmkGDp3XSJbFAr.png",
          problem: [{
            name: "AC tidak Dingin",
            sub_problem: [{ name: "AC 0.5 pk", qty: 2, price: 50000 }],
          }]
        },
        status: 1,
        date: "2024-11-30T14:29:50.000000Z",
        total: 50000,
        useLadder: 0,
        property: {
          id: 1,
          name: 'Rumah Pribadi',
          price: 50000,
        },
        customer: {
          id: 1,
          name: 'Alif bata jim sa sho',
          email: 'exmple@email.com',
          phone: '82118849939',
        },
        location: "Jl. Sekeloa II, No. 50, RT/11 RW/11, Sekeloa Selatan, Ciheulang, Kota Bandung, Jawa Barat",
        paymentMethod: 'Transfer Bank',
        vendor: {
          id: 1,
          name: 'PT Angkasa Jaya',
          code: 'X5TD45'
        }
      },
    ];
  },

  getPaymentReportService() {
    return Promise.resolve(this.getData());
  },
};
