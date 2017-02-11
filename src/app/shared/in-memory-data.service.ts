import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, firstName: 'Bijoy', lastName: 'Thomas', address: 'Bangalore', pincode: 560076, phone: '9663314495' },
      { id: 2, firstName: 'Delna', lastName: 'John', address: 'Bangalore', pincode: 560076, phone: '9902889870' }
    ];

    let orders = [
      { id: 1, userid: 1, total: 1 },
      { id: 2, userid: 2, total: 1 }
    ];
    return { users, orders };
  }
}