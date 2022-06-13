import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

    const [singleUser, setSingleUser] = useState(null);

    const fetchSingleUser = () => {
        axios.post(`/api/getSingleUser`).then((res) => setSingleUser(res))
        console.log(singleUser)
    }
    
    return (
        <div>
            <h1>Hello, Welcome to Next JS Serverless Function Demo</h1>
            
            {singleUser && (
                <table style={{ border: '1px solid #eeeeee'}}>
                    <tbody >
//                         <tr>
//                             <td style={{ border: '1px solid #272727'}}>Name</td>
//                             <td style={{ border: '1px solid #272727'}}>
//                                 <p>{singleUser.id}</p>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td style={{ border: '1px solid #272727'}}>Username</td>
//                             <td style={{ border: '1px solid #272727'}}>{singleUser.type}</td>
//                         </tr>
//                         <tr>
//                             <td style={{ border: '1px solid #272727'}}>Email</td>
//                             <td style={{ border: '1px solid #272727'}}>{singleUser.price}</td>
//                         </tr>
//                         <tr>
//                             <td style={{ border: '1px solid #272727'}}>Phone</td>
//                             <td style={{ border: '1px solid #272727'}}>{singleUser.phone}</td>
//                         </tr>
//                         <tr>
//                             <td style={{ border: '1px solid #272727'}}>Website</td>
//                             <td style={{ border: '1px solid #272727'}}>{singleUser.website}</td>
//                         </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
};
export default App;
