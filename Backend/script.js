async function load(){
    // Fetch data
    const URL = 'https://script.google.com/macros/s/AKfycbxIeU0r2LeFoMbM0MJILVvV_LBygXXFp31bk9EvgAs_oZ6XKF9FwIeNDwJwX14hM7RVNw/exec';
    const response = await fetch(URL);

    const people = await response.json();

    const dataContainer = document.getElementById('table-body');

    for (let person of people) {
        dataContainer.innerHTML += `
            <tr class="hover">
                <th>${person.ID}</th> 
                <td>${person.NAME}</td> 
                <td>${person.VOTE}</td> 
            </tr>
        `
    }
}

load();