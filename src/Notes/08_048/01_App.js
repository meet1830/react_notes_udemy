import TripList from './Components/TripList'
import data from './data/db.json'

// WORKING WITH A DATABASE
// using a package JSON server, which allows us to replicate a database locally. it will wrap that json file with api end points that we can use to fetch and interact.

// json is different from js - keys of object pairs have to be inside string double(not single)quotes
// json server will watch this. it will wrap each resource in a different API endpoint. so can be /trips to get all trips and /posts to get all posts. we can use json server to watch this file. these endpoints can then be used to fetch data
// to run json server command - ```json-server --watch ./data/db.json``` here json server is package name, watch is to watch a file for changes and then path to file to watch

export default function App() {
  return (
    <div>
      <TripList />
    </div>
  )
}
