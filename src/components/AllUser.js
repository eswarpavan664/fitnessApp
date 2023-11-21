import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faCheck  } from '@fortawesome/free-solid-svg-icons';

function AllUser() {
  const [Data, setData] = useState([]);

  const getUser = async () => {
    const apiUrl = `https://fitness-server-wwif.onrender.com/user/get_users/list`;

    try {
      const response = await axios.get(apiUrl);
      console.log('Response:', response.data);
      setData(response?.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDisablelUser = async (userId) => {

       const apiUrl = `https://fitness-server-wwif.onrender.com/admin/disable_accounts`;
        const postData = {
            user_id: userId,
            status:false
        };

        axios.put(apiUrl, postData)
            .then(response => {
                if (response.data?.Status === 200) {
           
                    window.location.reload();
                } else {
                    alert(response.data?.message);
                }

                console.log('Response:', JSON.stringify(response));
            })
            .catch(error => {
                console.error('Error:', error);
            });
  };

  
  const handleEnableUser = async (userId) => {
     const apiUrl = `https://fitness-server-wwif.onrender.com/admin/disable_accounts`;
        const postData = {
            user_id: userId,
            status:true
        };

        axios.put(apiUrl, postData)
            .then(response => {
                if (response.data?.Status === 200) {

                   window.location.reload();
                } else {
                    alert(response.data?.message);
                }

                console.log('Response:', JSON.stringify(response));
            })
            .catch(error => {
                console.error('Error:', error);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="table-container">
        <table className="soft-ui-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>User Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Account Status</th>
              <th>Disable</th>
            </tr>
          </thead>
          <tbody>
            {Data &&
              Data.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{`${data?.FirstName} ${data?.LastName}`}</td>
                  <td>{data?.PhoneNumber || '-'}</td>
                  <td>{data?.email}</td>
                  <td>{data?.AccountStatus?"Active":"InActive"}</td>
                  <td>
                    {data?.AccountStatus?
                     <button
                      onClick={() => handleDisablelUser(data.Id)}
                      className="delete-button"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>:
                     <button
                      onClick={() => handleEnableUser(data.Id)}
                      className="delete-button"
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>

                    }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllUser;
