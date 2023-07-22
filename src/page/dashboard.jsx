import React from 'react';
// import DashBoradComponent from '../component/common/DashBoradComponent';
import Layout from '../component/common/Layout';
import ProjectTable from '../component/common/ProjectTable';

function Dashboard() {
    return (
        <Layout>
            {/* <MyProfileComponent/> */}
            <ProjectTable/>       
        </Layout>
    );
}

export default Dashboard;
