import { CustomMap } from './CustomMap';
import { Search } from './Search';
import { Location } from './Location';
import { LocationList } from './LocationList';

const customMap = new CustomMap('map');
const search = new Search('searchTextField');
const locationList = new LocationList('locations');

const insertBtn = document.getElementById('insert-btn');

insertBtn.addEventListener('click', () => {
  const location = new Location(search.getLocation());
  customMap.changeMapLocation(location);
  locationList.addLocationToList(location, customMap);
});
