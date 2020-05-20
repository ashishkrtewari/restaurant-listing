import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor() { }

  shopData = [
    {
      image: 'https://source.unsplash.com/400x300/?ramen+0',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 4.5
    },
    {
      image: 'https://source.unsplash.com/400x300/?ramen+1',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 3.5
    },
    {
      image: 'https://source.unsplash.com/400x300/?ramen+2',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 2.5
    },
    {
      image: 'https://source.unsplash.com/400x300/?ramen+3',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 4
    },
    {
      image: 'https://source.unsplash.com/400x300/?ramen+4',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 2.5
    },
    {
      image: 'https://source.unsplash.com/400x300/?ramen+5',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 5
    },
    {
      image: 'https://source.unsplash.com/400x300/?ramen+6',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 1.5
    },
    {
      image: 'https://source.unsplash.com/400x300/?ramen+7',
      name: 'Bareque Nations',
      subtitle: 'Pan India',
      offersData: [
        {
          title: 'Food Voucher',
          description: 'Buy a Gift Voucher worth Rs 1800'
        },
        {
          title: 'Another Amazing offer',
          description: 'Some other description'
        }
      ],
      ratings: 3.5
    }
  ];
}
