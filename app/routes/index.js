import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'spotify-favorites/config/environment';

let token = encodeURIComponent(ENV.SPOTIFY_ACCESS_TOKEN);

export default class IndexRoute extends Route {
  async model() {
    // let response = await fetch(
    //   'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5',
    //   {
    //     method: 'GET',
    //     headers: { Authorization: 'Bearer ' + token },
    //   }
    // );

    // let { items } = await response.json();
    //   console.log(items)
    // return items;

    // }
    let response = await fetch('/api/spotify.json');

    let { items } = await response.json();
    console.log(items);
    return items;
  }
}
