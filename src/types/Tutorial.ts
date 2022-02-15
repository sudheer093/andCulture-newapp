export default interface ITutorialData {
  id?: any | null;  
  name?: string; //"Almanac Beer Company",
  brewery_type?: string; // "micro",
  street?: string; //"651B W Tower Ave",
  address_2?: string; //null,
  address_3?: string; //null,
  city?: string; //"Alameda",
  state?: string; //"California",
  county_province?: string; // null,
  postal_code?: string; //"94501-5047",
  country?: string; //"United States",
  longitude?: string; //"-122.306283180899",
  latitude?: string; //"37.7834497667258",
  phone?: string; //"4159326531",
  website_url?: string; //"http://almanacbeer.com",
  updated_at?: Date; //"2018-08-23T23:24:11.758Z",
  created_at?: Date; //"2018-08-23T23:24:11.758Z"
}
// export default interface ILocation{
//   address: string;
//   lat:number;
//   lng:number;
// }
// const location = {
//   address: '1600 Amphitheatre Parkway, Mountain View, california.',
//   lat: 37.42216,
//   lng: -122.08427,
// }