import React, { useEffect, useState } from 'react';
import Layout from '../component/common/Layout';
import ChatComponent from '../component/common/ChatComponent';
import LoaderSpin from '../component/common/LoaderSpin';

function Chats() {
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
            <ChatComponent/>
        </Layout>}
        </>
    );
}

export default Chats;