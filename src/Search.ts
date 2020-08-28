export class Search {
  private autocomplete: google.maps.places.Autocomplete;

  constructor(searchField: string) {
    const input = document.getElementById(searchField) as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(input, {});
  }

  getLocation(): google.maps.places.PlaceResult {
    return this.autocomplete.getPlace();
  }
}
