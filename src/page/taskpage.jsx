import React, { useEffect, useState } from 'react';
import Layout from '../component/common/Layout';
import TaskComponent from '../component/common/TaskComponent';
import LoaderSpin from '../component/common/LoaderSpin';

function Taskpage(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data (you can replace this with your actual data fetching logic)
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
    return (
        <div>
            {loading ? <LoaderSpin/> : 
            <Layout>
                <TaskComponent/>
            </Layout>}
        </div>
    );
}

export default Taskpage;