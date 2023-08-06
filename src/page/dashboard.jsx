import React from 'react';
// import DashBoradComponent from '../component/common/DashBoradComponent';
import Layout from '../component/common/Layout';
import ProjectTable from '../component/common/ProjectTable';
import PostCard from '../component/common/postCards';

function Dashboard() {
    const user_id = JSON.parse(localStorage.getItem('user_id'))
    console.log(user_id)
    return (
        <Layout>
            {/* <MyProfileComponent/> */}
            <ProjectTable/>       
            <PostCard/>       
        </Layout>
    );
}

export default Dashboard;
