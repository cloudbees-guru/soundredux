// import rox-browser from npm

import Rox from 'rox-browser'
import UserRepo from '../store/UserRepo'

// define an exported object that contains the flags
const Flags = {
  followingView: new Rox.Flag(),
  history: new Rox.Flag(),
  shuffle: new Rox.Flag(),
  showoverride: new Rox.Flag(),
  repeat: new Rox.Flag(),
  jsonNba: new Rox.RoxString('j1', ['j1', 'j2', 'j3']),
  startFollowingWord: new Rox.RoxString('Follow', ['Follow', 'Start Following', 'Watch Him'])
};

const options = {
  configurationFetchedHandler: configurationFetchedHandler
};

const configurationFetchedHandler = fetcherResults => {
  console.log(fetcherResults);
  if (fetcherResults.hasChanges && fetcherResults.fetcherStatus === 'APPLIED_FROM_NETWORK') {
    window.location.reload(false)
  }
};

async function initRollout() {
  // Register the flags with Rollout
  Rox.register('', Flags);
  // Setup the Rollout key
  await Rox.setup('<REPLACE ME WITH ENVIRONMENT KEY>', options);
}

initRollout().then(function () {
  console.log('Done loading Rollout');
});

Rox.setCustomStringProperty('plan', () => UserRepo.getUser().plan);
Rox.setCustomStringProperty('email', () => UserRepo.getUser().email);
Rox.setCustomNumberProperty('playlist_count', () => UserRepo.getUser().playlistCount);
Rox.setCustomStringProperty('soundcloud_id', () => UserRepo.getUser().id);
Rox.setCustomStringProperty('customer_email', () => UserRepo.getUser().id);
Rox.setCustomStringProperty('region', () => UserRepo.getUser().id);

export default Flags;