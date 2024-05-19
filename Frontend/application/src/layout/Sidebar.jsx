import React from 'react'
import { Link } from 'react-router-dom';

const linksData = [
  {title: 'Home', to: '/'},
  {title: 'Add Schenario', to: '/add-scenarios'},
  {title: 'Schenarios', to: '/schenarios'},
  {title: 'Add Vehicle', to: '/add-vehicles'},
]

const Sidebar = () => {
  return (
    <div className='side-bar-box hv-100 d-flex flx-d-col ai-left'>
      {
        linksData?.length && (
          linksData?.map(({title, to}, ind) => (
            <Link className='sidebar-items trasnitions' key={ind} to={to}>{title}</Link>
          ))
        )
      }
    </div>
  )
}

export default Sidebar