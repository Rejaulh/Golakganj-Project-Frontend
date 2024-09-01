  
/*  
document.getElementById('fetch-button').addEventListener('click', getData);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNzc2MzIyLCJpYXQiOjE3MjI3NjU1MjIsImp0aSI6ImVkODlhYTYyMTRjMDQ3OTZiMGQ4MGM3YjA2M2NlYmNjIiwidXNlcl9pZCI6NH0.cWeyHpU_yaub9aSBsnC2PpYU_GHHBX43iAHOdHS22oc";

async function getData(){
    const url = "http://127.0.0.1:8000/api/worker/";
    try{
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            throw new Error("Response status:${response.status}");
        }
        const data = await response.json();
        console.log(data);
        // data.forEach(item => {
        //     const dataItem = document.createElement('div');
        //     dataItem.classList.add('data-item');
        //     dataItem.textContent = `ID: ${item.id}, AWC_Name: ${item.AWC_Name}`;
        //     dataContainer.appendChild(dataItem);
        // });
    }catch(error){
        console.error(error.message);
    }
}
*/


const apiUrl = 'http://127.0.0.1:8000/api/worker/';  // Replace with your API URL
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NzU0MzE3LCJpYXQiOjE3MjQ3NDM1MTcsImp0aSI6Ijg3NzU1MTEyN2U1MDRjYTY4ZDk0NWIwMjMyMWM5NjMwIiwidXNlcl9pZCI6MX0.aQvUatGmUngyxl0TXxQZKP44xcQLSwRHwqWQk9G_5Rk";
document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const createButton = document.getElementById('create-button');
    const dataTableBody = document.querySelector('#data-table tbody');

    
    // Function to fetch and display data
    async function fetchData() {
        dataTableBody.innerHTML = ''; // Clear previous data
        try {
            const response = await fetch(apiUrl,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            data.forEach(item => {
                addItemToTable(item);
             });
        } catch (error) {
            console.error('Error fetching data:', error);
            const errorRow = document.createElement('tr');
            const errorCell = document.createElement('td');
            errorCell.colSpan = 12;
            errorCell.textContent = 'Failed to load data.';
            dataTableBody.appendChild(errorRow);
        }
    }

    // Function to add a row to the table
    function addItemToTable(item) {
        const row = document.createElement('tr');
        
        const idCell = document.createElement('td');
        // const sectorCell = document.createElement('td');
        const codeCell = document.createElement('td');
        const awcCell = document.createElement('td');
        const awwnameCell = document.createElement('td');
        const awwphoneCell = document.createElement('td');
        const awhnameCell = document.createElement('td');
        const awhphoneCell = document.createElement('td');
        const addressCell = document.createElement('td');
        const buildingtypeCell = document.createElement('td');
        const imageCell = document.createElement('td');
        const waterCell = document.createElement('td');
        const actionsCell = document.createElement('td')
        
        idCell.textContent = item.id;
        // sectorCell.textContent = item.sector;
        codeCell.textContent = item.AWC_Code;
        awcCell.textContent = item.AWC_Name;
        awwnameCell.textContent = item.AWW_Name;
        awwphoneCell.textContent = item.AWW_Phone;
        awhnameCell.textContent = item.AWH_Name;
        awhphoneCell.textContent = item.AWH_Phone;
        addressCell.textContent = item.AWC_Address;
        buildingtypeCell.textContent = item.Building_Type;
        imageCell.textContent = item.AWC_Image;
        waterCell.textContent = item.Driking_Water_Facility;
        actionsCell.textContent = item.actions;

        // const updateButton = document.createElement('button');
        // updateButton.textContent = 'Update';
        // updateButton.addEventListener('click', () => updateData(item.id));

        // const deleteButton = document.createElement('button');
        // deleteButton.textContent = 'Delete';
        // deleteButton.addEventListener('click', () => deleteData(item.id));

        // actionsCell.appendChild(updateButton);
        // actionsCell.appendChild(deleteButton);

        row.appendChild(idCell);
        // row.appendChild(sectorCell);
        row.appendChild(codeCell);
        row.appendChild(awcCell);
        row.appendChild(awwnameCell);
        row.appendChild(awwphoneCell);
        row.appendChild(awhnameCell);
        row.appendChild(awhphoneCell);
        row.appendChild(addressCell);
        row.appendChild(buildingtypeCell);
        row.appendChild(imageCell);
        row.appendChild(waterCell);
        row.appendChild(actionsCell);

        dataTableBody.appendChild(row);
    }
    fetchButton.addEventListener('click', fetchData);
});

    // const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNzk0NTc4LCJpYXQiOjE3MjI3ODM3NzgsImp0aSI6IjI2MDdjZDE4NDA0ZTRhZjE4NjllNWM3NTkxNDUzM2E2IiwidXNlcl9pZCI6NH0.s9VeJWkAm1Oc6KTvY8coTMbHtcsJ8OdDqwa9AUA_Xyw";
    // Function to create new data
    // document.addEventListener()
    // async function createData() {
    //     const newItem = {
    //         AWC_Code: 'New Name',
    //         AWC_Name: 'new.email@example.com',
    //         AWW_Name: 'abc',
    //         AWW_Phone: '123-456-7890',
    //         AWH_Name: 'def',
    //         AWH_Phone: 'ghy',
    //         AWC_Address: 'kil',
    //         Building_Type: 'deg',
    //         AWC_Image: 'pho',
    //         Driking_Water_Facility: 'turu',
    //         status: 'Active'
    //     };
    //     try {
    //         const response = await fetch(apiUrl, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(newItem)
    //         });
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         addItemToTable(data);
    //     } catch (error) {
    //         console.error('Error creating data:', error);
    //     }
    // }
    // createButton.addEventListener('click', createData);

    // // Function to update data
    // async function updateData(id) {
    //     const updatedItem = {
    //         name: 'Updated Name',
    //         email: 'updated.email@example.com',
    //         phone: '098-765-4321',
    //         status: 'Inactive'
    //     };
    //     try {
    //         const response = await fetch(`${apiUrl}/${id}`, {
    //             method: 'PUT',  // Or 'PATCH'
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(updatedItem)
    //         });
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         fetchData();  // Refresh the data
    //     } catch (error) {
    //         console.error('Error updating data:', error);
    //     }
    // }

    // Function to delete data
//     async function deleteData(id) {
//         try {
//             const response = await fetch(`${apiUrl}/${id}`, {
//                 method: 'DELETE'
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             fetchData();  // Refresh the data
//         } catch (error) {
//             console.error('Error deleting data:', error);
//         }
//     }

//     fetchButton.addEventListener('click', fetchData);
//     
// });


