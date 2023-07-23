import React from 'react';
// import DashBoradComponent from '../component/common/DashBoradComponent';
import Layout from '../component/common/Layout';
import ProjectTable from '../component/common/ProjectTable';
import PostCard from '../component/common/postCards';

function Dashboard() {
    return (
        <Layout>
            {/* <MyProfileComponent/> */}
            <ProjectTable/>       
            <PostCard/>       
        </Layout>
    );
}

export default Dashboard;
