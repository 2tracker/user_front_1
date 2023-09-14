import React, { useEffect, useState } from 'react';
import MyProfileComponent from '../component/common/MyProfileComponent';
import Layout from '../component/common/Layout';
import LoaderSpin from '../component/common/LoaderSpin';

function Myprofile() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data (you can replace this with your actual data fetching logic)
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);
    return (
        <>{
            loading ? <LoaderSpin />
                :
                <Layout>
                    <MyProfileComponent />
                </Layout>}
        </>
    );
}

export default Myprofile;