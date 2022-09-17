import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
     <>This is currently our home page</>
     <ArticlesCell />
    </>
  )
}

export default HomePage
