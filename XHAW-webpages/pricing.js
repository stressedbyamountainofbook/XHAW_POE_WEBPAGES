document.getElementById('calculateBtn').addEventListener('click', function() {
    const courseFees = {
        "Life Skills": R1500,
        "Child Minding": R750,
        "Cooking": R750
    };
    
    const numCourses = parseInt(document.getElementById('numCourses').value);
    const selectedCourses = Object.keys(courseFees).slice(0, numCourses); // Select first 'numCourses' courses
    let totalCost = 0;

    selectedCourses.forEach(course => {
        totalCost += courseFees[course];
    });

    let discount = 0;

    // Determine the discount based on the number of courses
    if (numCourses === 2) {
        discount = 0.05; // 5% discount
    } else if (numCourses === 3) {
        discount = 0.10; // 10% discount
    } else if (numCourses > 3) {
        discount = 0.15; // 15% discount
    }

    const discountAmount = totalCost * discount;
    const totalAfterDiscount = totalCost - discountAmount;
    const vat = totalAfterDiscount * 0.15; // 15% VAT
    const totalFee = totalAfterDiscount + vat;

    document.getElementById('result').innerText = `Total Fee (including VAT): R${totalFee.toFixed(2)}`;
});
