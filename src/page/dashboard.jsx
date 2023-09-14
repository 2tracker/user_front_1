import React, { useEffect, useState } from 'react';
// import DashBoradComponent from '../component/common/DashBoradComponent';
import Layout from '../component/common/Layout';
import ProjectTable from '../component/common/ProjectTable';
import PostCard from '../component/common/postCards';
import LoaderSpin from '../component/common/LoaderSpin';

function Dashboard() {
    const user_id = JSON.parse(localStorage.getItem('user_id'))
    console.log(user_id)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading data (you can replace this with your actual data fetching logic)
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }, []);
    return (
        
       <>
       {loading ? <LoaderSpin/> : 
        <Layout>
            {/* <MyProfileComponent/> */}
            <ProjectTable/>       
            <PostCard/>       
        </Layout>}</>
    );
}

export default Dashboard;
