import React from 'react';
import Layout from '../component/common/Layout';
import TaskComponent from '../component/common/TaskComponent';

function Taskpage(props) {
    return (
        <div>
            <Layout>
                <TaskComponent/>
            </Layout>
        </div>
    );
}

export default Taskpage;