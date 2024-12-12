export type User = {
    id? : string,
    username: string,
    name: string,
    email: string,
    phone: string,
    website: string,
    address: { street: string, city: string, suite: string, zipcode: string, geo: { lat: string, lng: string } },
    company: { name: string, catchPhrase: string, bs: string }
  }
  