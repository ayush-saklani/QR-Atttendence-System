document.getElementById('go').addEventListener('click', () => {
    let container = document.getElementById("imageContainer");
    container.innerHTML = "";
    
    let name = document.getElementById("name_val").value;
    let roll_no = document.getElementById("roll_val").value;
    let section = document.getElementById("section_val").value;
    let student_id = document.getElementById("studentid_val").value;
    let campus = document.getElementById("campus_val").value;
    console.log(name);
    console.log(roll_no);
    console.log(section);
    console.log(student_id);
    console.log(campus);
    
    let dataString = `${name},${roll_no},${section},${student_id},${campus}`;
    console.log(dataString);
    
    let img = document.createElement("img");
    img.setAttribute("id", "qrimg");
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${dataString}`; 
    document.getElementById("imageContainer").appendChild(img);
});