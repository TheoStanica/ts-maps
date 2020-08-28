export class Location {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(location: google.maps.places.PlaceResult) {
    this.name = location.name;
    this.location = {
      lat: location.geometry.location.lat(),
      lng: location.geometry.location.lng(),
    };
  }

  markerContent(): string {
    return `
    <h1>${this.name}</h1>
    <h3>${this.location.lat}</h3>
    <h3>${this.location.lng}</h3>
    `;
  }
}
