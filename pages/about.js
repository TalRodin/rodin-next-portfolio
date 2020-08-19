import Link from 'next/link'
import Layout from '../components/Layout'
import Error from './_error'
import {Component} from 'react'
import fetch from 'isomorphic-unfetch'

class About extends Component{
    state={
        user:null
    }
    // componentDidMount(){
    //     fetch('https://github.com/TalRodin').then(res=>res.json())
    //     .then(data=>{
    //         user:data
    //     })
    // }
    static async getInitialProps(){
          const res = await fetch('https://api.github.com/users/TalRodin')
          const statusCode = res.status>200?res.status:false
          const data = await res.json()

        //   .then(res=>res.json())
        //   .then(data=>{
        //     console.log(data)
    //})
          return { user: data, statusCode};
}
    render(){
        const {user, statusCode}=this.props

        if (statusCode){
            return <Error statusCode={statusCode}/>
        }
        return (
<Layout title='About'>
    <p>{user.name}</p>
    {/* {JSON.stringify(user)} */}
        <Link href='/'>
        <a >Home</a>
        </Link>
        <p>A JavaScript programmer</p>
        <img src={user.avatar_url} alt="Alyona" height="200px"></img>
    </Layout>
        )
    }
}

export default About