import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({slug,title}) =>(
            <li>
                <Link as={`/${slug}`} href={`/post?title=${title}`}>
                    <a>{title}</a>
                </Link>
            </li>
)

export default ()=>(
    <Layout title='My Blog'>
        <ul>
            <PostLink  slug="react-post" title="React post"/>
            <PostLink slug="angular-post" title="Angular post"/>
            <PostLink slug="vue-post" title="Vue post"/>
        </ul>
    </Layout>
)