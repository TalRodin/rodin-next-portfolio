import Layout from '../components/Layout'


export default ({statusCode})=>(
    <Layout title="Error!!!">
        {statusCode ? `Could not load your user data: Status Code ${statusCode}`: `Could not get that page, sorry!`
        }
       
    </Layout>
)