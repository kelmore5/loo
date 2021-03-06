import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function activeHover(hover_id) {
  store.dispatch({
    type: 'ACTIVE_HOVER',
    hover: hover_id

  })
}

export function activeListing(listing_id) {
  store.dispatch({
    type: 'ACTIVE_LISTING',
    listingHover: listing_id
  })
}

export function getGoogleMarkers() {
  axios.get('/listings').then(resp => {
    store.dispatch({
      type: 'GET_MARKERS', 
      markers: resp.data
    })
  })
}


export function getListing(id) {
  axios.get('/listing/'+ id).then(resp => {
    console.log("establishment", resp.data[0])
    store.dispatch({
      type: 'GET_LISTING', 
      establishment: resp.data[0]
    })
  })
}