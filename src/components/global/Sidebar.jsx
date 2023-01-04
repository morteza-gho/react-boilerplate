import { useState } from "react"

const Sidebar = () => {

  const menus = [
    {
      title: 'ویدئوهای آموزشی',
      link: '#',
      icon: 'icon bi bi-film'
    },
    {
      title: 'مدیریت پرسشنامه / فرم',
      link: '#',
      icon: 'icon bi bi-ui-checks',
      children: [
        {
          title: 'ایجاد پرسشنامه / فرم',
          link: '#'
        },
        {
          title: 'لیست پرسشنامه / فرم های من',
          link: '#'
        }
      ]
    }
  ]; // menus

  const [menuItems, setMenuitems] = useState(menus); // use `useState` to toggle menu items

  const toggleMenu = (menu) => {
    // open and close sub menu 
    Object.assign(menu, { isOpen: !menu.isOpen })
    setMenuitems([...menuItems])
  }


  return (
    <aside id="main-sidebar">
      <div className="content">
        {/* <div className="search-sidebar">
          <input className="input" type="text" placeholder="جستجو" /><i className="icon bi-search"></i>
        </div> */}
        <nav className="navigation">
          <ul>
            {
              menuItems.map((menu, index) => {
                return (
                  <li key={index}
                    className={`${(menu.children && menu.children.length ? 'has-submenu' : '')} ${menu.isOpen ? 'open' : ''}`}>
                    <a href={menu.link} onClick={(e) => { e.preventDefault(); toggleMenu(menu) }}>
                      <i className={menu.icon}></i>
                      <span className="text">{menu.title}</span>
                    </a>
                    {
                      menu.children ?
                        <ul className={`second-ul ${menu.isOpen ? 'd-block' : ''}`}>
                          {
                            menu.children.map((subMenu, subIndex) => {
                              return (
                                <li key={subIndex}>
                                  <a href={subIndex.link}><span className="text">{subMenu.title}</span></a>
                                </li>)
                            })
                          }
                        </ul>
                        : null
                    }
                  </li>
                )
              })
            }
          </ul>
        </nav>
        {/* nav */}
      </div>
      {/* .content */}
    </aside>
  )
}

export default Sidebar