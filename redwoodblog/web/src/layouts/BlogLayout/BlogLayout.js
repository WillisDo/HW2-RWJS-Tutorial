import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
return (<>
        <header>
        <h1> Dilip, Villaire, Willis' Redwood Blog</h1>
        <nav>
          <ul>            
            <li>
              <Link to= {routes.home()}>Home</Link>
            </li>
            <li>
              <Link to= {routes.about()}> About Page </Link>
            </li>

          </ul>
        </nav>
    </header>
    <main>{children}</main>
    </>
    )
}
export default BlogLayout