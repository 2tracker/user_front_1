import React, { useEffect, useState } from 'react';
import Layout from '../component/common/Layout';
import CreateTikcket from '../component/common/CreateTicket';
import LoaderSpin from '../component/common/LoaderSpin';

function CreateticketPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading data (you can replace this with your actual data fetching logic)
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);
    return (
        <>
        {loading ? <LoaderSpin/> : 
            <Layout>
                <CreateTikcket/>
        
            </Layout>}
            </>
    );
}

export default CreateticketPage;