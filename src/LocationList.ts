import { Location } from './Location';
import { CustomMap } from './CustomMap';

export class LocationList {
  private targetList: HTMLElement;

  constructor(location: string) {
    this.targetList = document.getElementById(location);
  }

  addLocationToList(location: Location, map: CustomMap): void {
    const newNode = document.createElement('li');
    newNode.className = 'list-group-item';
    newNode.innerText = location.name;
    this.targetList.appendChild(newNode);

    newNode.addEventListener('click', () => {
      map.changeMapLocation(location);
    });
  }
}
